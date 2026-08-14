import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

interface ContactPayload {
  name?: string
  email?: string
  phone?: string
  company?: string
  message?: string
  type?: 'employer' | 'candidate'
}

/**
 * Contact form endpoint.
 *
 * Emails the form details using SMTP. Configure via environment variables
 * (see .env.example):
 *   EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, EMAIL_TO (optional)
 *
 * If SMTP is not configured the route returns a clear 500 so the UI can
 * fall back to a mailto: link.
 */
export async function POST(request: NextRequest) {
  let body: ContactPayload
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body' }, { status: 400 })
  }

  const { name = '', email = '', phone = '', company = '', message = '', type = 'employer' } = body

  if (!name.trim() || !email.trim() || !message.trim()) {
    return NextResponse.json(
      { ok: false, error: 'Name, email and message are required' },
      { status: 400 }
    )
  }

  const host = process.env.EMAIL_HOST
  const user = process.env.EMAIL_USER
  const pass = process.env.EMAIL_PASS
  const to = process.env.EMAIL_TO || 'info@contacttohire.in'

  if (!host || !user || !pass) {
    return NextResponse.json(
      {
        ok: false,
        error:
          'Email is not configured yet. Set EMAIL_HOST, EMAIL_USER and EMAIL_PASS (see .env.example) or email us directly at info@contacttohire.in',
      },
      { status: 500 }
    )
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port: Number(process.env.EMAIL_PORT || 587),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: { user, pass },
    })

    const enquiryType = type === 'candidate' ? 'Candidate (job seeker)' : 'Employer (hiring)'

    await transporter.sendMail({
      from: `"Contact2Hire Website" <${user}>`,
      to,
      replyTo: email,
      subject: `New ${enquiryType} enquiry from ${name}`,
      text: [
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
      ].join('\n'),
      html: `
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
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact form email failed:', error)
    return NextResponse.json(
      { ok: false, error: 'Could not send the email. Please try again or contact us directly at info@contacttohire.in' },
      { status: 500 }
    )
  }
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => {
    const map: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }
    return map[c]
  })
}
