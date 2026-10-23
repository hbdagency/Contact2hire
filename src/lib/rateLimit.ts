/**
 * Simple in-memory sliding-window rate limiter for the contact form.
 *
 * Limits submissions per IP to CONTACT_RATE_LIMIT (default 3) within a
 * CONTACT_RATE_WINDOW_MINUTES (default 60) window. Counters live in memory,
 * so they reset when the server restarts — on serverless platforms the limit
 * applies per instance, which is an acceptable approximation for a small site.
 *
 * Set CONTACT_RATE_LIMIT=0 to disable.
 */

const rawLimit = process.env.CONTACT_RATE_LIMIT
const MAX = rawLimit ? Number(rawLimit) : 3
const WINDOW_MS = (Number(process.env.CONTACT_RATE_WINDOW_MINUTES || 60) || 60) * 60_000

const hits = new Map<string, number[]>()

export interface RateLimitResult {
  limited: boolean
  retryAfterSeconds?: number
}

/**
 * Records one request from `ip` and reports whether it exceeds the window.
 * A rejected request still occupies its slot, so a hammering client can never
 * send more than MAX per window.
 */
export function checkRateLimit(ip: string, now: number = Date.now()): RateLimitResult {
  if (MAX <= 0) return { limited: false }

  const timestamps = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS)

  if (timestamps.length >= MAX) {
    hits.set(ip, timestamps)
    const oldest = timestamps[0]
    return {
      limited: true,
      retryAfterSeconds: Math.max(1, Math.ceil((oldest + WINDOW_MS - now) / 1000)),
    }
  }

  timestamps.push(now)
  hits.set(ip, timestamps)
  return { limited: false }
}
