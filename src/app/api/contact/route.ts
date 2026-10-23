import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { checkRateLimit } from '@/lib/rateLimit'

export const runtime = 'nodejs'

interface ContactPayload {
  name?: string
  email?: string
  phone?: string
  company?: string
  message?: string
  type?: 'employer' | 'candidate'
  /** Honeypot — a hidden field bots auto-fill; humans never see it. */
  website?: string
}

/**
 * Contact form endpoint.
 *
 * Delivers submissions to:
 *   1. Email -> EMAIL_TO (default info@contacttohire.in) via SMTP (EMAIL_*)
 *   2. Google Sheets (optional) -> appends a row via SHEETS_WEBHOOK_URL
 *      (see scripts/sheets-apps-script.gs for the one-time setup — no API keys)
 *
 * The request succeeds as long as at least one configured channel delivered.
 * The response reports which channels delivered via `emailDelivered` and
 * `sheetsDelivered`.
 */
export async function POST(request: NextRequest) {
  let body: ContactPayload
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body' }, { status: 400 })
  }

  const { name = '', email = '', phone = '', company = '', message = '', type = 'employer', website = '' } = body

  // Honeypot: bots auto-fill the hidden "website" field. Silently drop the
  // submission but pretend it succeeded so the bot learns nothing.
  if (website.trim()) {
    console.warn('Contact form honeypot triggered — submission discarded')
    return NextResponse.json({ ok: true })
  }

  if (!name.trim() || !email.trim() || !message.trim()) {
    return NextResponse.json(
      { ok: false, error: 'Name, email and message are required' },
      { status: 400 }
    )
  }

  // Simple per-IP sliding-window rate limit (see @/lib/rateLimit).
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  const rate = checkRateLimit(ip)
  if (rate.limited) {
    return NextResponse.json(
      {
        ok: false,
        error:
          'You have sent too many messages recently. Please try again in a few minutes, or email us directly at info@contacttohire.in.',
        retryAfterSeconds: rate.retryAfterSeconds,
      },
      { status: 429 }
    )
  }

  const enquiryType = type === 'candidate' ? 'Candidate (job seeker)' : 'Employer (hiring)'

  const [emailResult, sheetsResult] = await Promise.all([
    sendEmail({ enquiryType, name, email, phone, company, message }),
    appendToSheet({ type, name, email, phone, company, message }),
  ])

  if (emailResult.ok || sheetsResult.ok) {
    return NextResponse.json({
      ok: true,
      emailDelivered: emailResult.ok,
      sheetsDelivered: sheetsResult.ok,
    })
  }

  const errors = [emailResult.error, sheetsResult.error].filter(Boolean).join(' ')
  console.error('Contact form delivery failed:', errors)
  return NextResponse.json(
    {
      ok: false,
      error:
        'We could not deliver your message automatically right now. Please email us directly at info@contacttohire.in, or try again shortly.',
    },
    { status: 500 }
  )
}

function buildEnquiryText(
  enquiryType: string,
  name: string,
  email: string,
  phone: string,
  company: string,
  message: string
) {
  return [
    `New contact form submission (contacttohire.in)`,
    ``,
    `Type: ${enquiryType}`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || '-'}`,
    `Company: ${company || '-'}`,
    ``,
    `Message:`,
    message,
  ].join('\n')
}

function buildEmailHtml(
  enquiryType: string,
  name: string,
  email: string,
  phone: string,
  company: string,
  message: string
) {
  return `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;border:1px solid #eee;border-radius:16px;overflow:hidden">
      <div style="background:#111;color:#fff;padding:20px 24px">
        <h2 style="margin:0;font-size:18px">New Contact2Hire enquiry</h2>
        <p style="margin:4px 0 0;color:#C2E84A;font-size:13px">${enquiryType}</p>
      </div>
      <div style="padding:24px;color:#333;font-size:14px;line-height:1.7">
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || '-')}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || '-')}</p>
        <hr style="border:none;border-top:1px solid #eee" />
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      </div>
    </div>
  `
}

async function sendEmail({
  enquiryType,
  name,
  email,
  phone,
  company,
  message,
}: {
  enquiryType: string
  name: string
  email: string
  phone: string
  company: string
  message: string
}): Promise<{ ok: boolean; error?: string }> {
  const host = process.env.EMAIL_HOST
  const user = process.env.EMAIL_USER
  const pass = process.env.EMAIL_PASS
  const to = process.env.EMAIL_TO || 'info@contacttohire.in'

  if (!host || !user || !pass) {
    return {
      ok: false,
      error: 'Email is not configured yet. Set EMAIL_HOST, EMAIL_USER and EMAIL_PASS (see .env.example)',
    }
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port: Number(process.env.EMAIL_PORT || 587),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: { user, pass },
    })

    await transporter.sendMail({
      from: `"Contact2Hire Website" <${user}>`,
      to,
      replyTo: email,
      subject: `New ${enquiryType} enquiry from ${name}`,
      text: buildEnquiryText(enquiryType, name, email, phone, company, message),
      html: buildEmailHtml(enquiryType, name, email, phone, company, message),
    })

    return { ok: true }
  } catch (error) {
    console.error('Contact form email failed:', error)
    return { ok: false, error: 'Could not send the email.' }
  }
}

/**
 * Appends the submission to a Google Sheet through an Apps Script web app.
 * Optional channel: when SHEETS_WEBHOOK_URL is not set, this reports "not
 * configured" (ok: false with no error) so the email channel is unaffected.
 */
async function appendToSheet({
  type,
  name,
  email,
  phone,
  company,
  message,
}: {
  type: string
  name: string
  email: string
  phone: string
  company: string
  message: string
}): Promise<{ ok: boolean; error?: string }> {
  const url = process.env.SHEETS_WEBHOOK_URL
  if (!url) {
    // Optional channel — not configured is not a delivery failure.
    return { ok: false }
  }

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, name, email, phone, company, message }),
    })

    if (!res.ok) {
      const detail = await res.text().catch(() => '')
      console.error('Contact form Google Sheets append failed:', res.status, detail)
      return { ok: false, error: 'Could not write to the Google Sheet.' }
    }

    return { ok: true }
  } catch (error) {
    console.error('Contact form Google Sheets append failed:', error)
    return { ok: false, error: 'Could not reach the Google Sheets webhook.' }
  }
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => {
    const map: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }
    return map[c]
  })
}
