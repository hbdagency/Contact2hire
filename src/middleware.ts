import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

function generateRayId(): string {
  const chars = '0123456789abcdef'
  let result = ''
  for (let i = 0; i < 16; i++) {
    result += chars[Math.floor(Math.random() * chars.length)]
  }
  return result
}

function getCloudflareHtml(host: string, clientIp: string, rayId: string, timestamp: string): string {
  return `<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en-US"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en-US"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en-US"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en-US"> <!--<![endif]-->
<head>
<title>503 Service Temporarily Unavailable | ${host} | Cloudflare</title>
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<meta name="robots" content="noindex, nofollow" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<style>
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body {
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    color: #404040;
    background-color: #ffffff;
    font-size: 15px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  a {
    color: #0051c3;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  .cf-wrapper {
    width: 100%;
    max-width: 980px;
    margin: 0 auto;
    padding: 0 20px;
  }
  #cf-error-details {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .cf-error-overview {
    margin-bottom: 32px;
  }
  .cf-error-headline {
    font-size: 42px;
    font-weight: 300;
    letter-spacing: -0.5px;
    margin-bottom: 6px;
    color: #333333;
    line-height: 1.1;
  }
  .cf-error-type {
    font-weight: 300;
  }
  .cf-error-code {
    font-weight: 700;
    color: #bd2426;
    margin-left: 2px;
  }
  .heading-ray-id {
    display: inline-block;
    font-size: 13px;
    color: #8c8c8c;
    font-weight: 400;
    margin-left: 14px;
    vertical-align: middle;
  }
  .cf-subheadline {
    font-size: 22px;
    font-weight: 400;
    color: #4a4a4a;
    margin-top: 4px;
  }
  .cf-status-display {
    background-color: #f7f7f8;
    border-top: 1px solid #e1e4e8;
    border-bottom: 1px solid #e1e4e8;
    padding: 42px 0 38px;
    margin-bottom: 45px;
  }
  .cf-status-grid {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 860px;
    margin: 0 auto;
  }
  .cf-status-item {
    text-align: center;
    flex: 1;
    min-width: 160px;
  }
  .cf-icon-container {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 72px;
    margin-bottom: 12px;
  }
  .cf-icon-container svg.device-icon {
    width: 64px;
    height: 64px;
    fill: #595959;
  }
  .cf-status-badge {
    position: absolute;
    bottom: -2px;
    right: 4px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 0 3px #f7f7f8;
  }
  .cf-status-badge.ok {
    background-color: #2e7d32;
  }
  .cf-status-badge.error {
    background-color: #d32f2f;
  }
  .cf-status-badge svg {
    width: 14px;
    height: 14px;
    fill: #ffffff;
  }
  .cf-connector {
    flex: 0 0 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 45px;
    position: relative;
  }
  .cf-connector-line {
    width: 100%;
    height: 2px;
    background-color: #2e7d32;
    position: relative;
  }
  .cf-connector-line.dashed-error {
    background: repeating-linear-gradient(90deg, #d32f2f 0, #d32f2f 6px, transparent 6px, transparent 10px);
  }
  .cf-connector-arrow {
    position: absolute;
    right: -2px;
    top: -4px;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 7px solid #2e7d32;
  }
  .cf-connector-cross {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #f7f7f8;
    padding: 0 4px;
    color: #d32f2f;
    font-weight: bold;
    font-size: 14px;
  }
  .cf-status-desc {
    display: block;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    color: #767676;
    margin-bottom: 4px;
    font-weight: 500;
  }
  .cf-status-name {
    font-size: 20px;
    font-weight: 600;
    color: #262626;
    margin-bottom: 4px;
  }
  .cf-status-label {
    display: inline-block;
    font-size: 14px;
    font-weight: 600;
  }
  .cf-status-label.ok {
    color: #2e7d32;
  }
  .cf-status-label.error {
    color: #d32f2f;
  }
  .cf-columns.two {
    display: flex;
    gap: 48px;
    margin-bottom: 48px;
  }
  .cf-columns.two > .cf-column {
    flex: 1;
  }
  .cf-column h2 {
    font-size: 20px;
    font-weight: 600;
    color: #262626;
    margin-bottom: 12px;
  }
  .cf-column h5 {
    font-size: 14px;
    font-weight: 600;
    color: #333333;
    margin-top: 14px;
    margin-bottom: 4px;
  }
  .cf-column p {
    font-size: 14px;
    color: #555555;
    line-height: 1.6;
    margin-bottom: 10px;
  }
  .cf-error-footer {
    border-top: 1px solid #e5e5e5;
    padding-top: 24px;
    margin-top: 20px;
    color: #767676;
    font-size: 13px;
  }
  .cf-footer-item {
    display: inline-block;
  }
  .cf-footer-separator {
    margin: 0 10px;
    color: #b0b0b0;
  }

  @media (max-width: 768px) {
    .cf-status-grid {
      flex-direction: column;
      gap: 20px;
    }
    .cf-connector {
      transform: rotate(90deg);
      margin: 10px 0;
      flex: 0 0 40px;
    }
    .cf-columns.two {
      flex-direction: column;
      gap: 32px;
    }
    .heading-ray-id {
      display: block;
      margin-left: 0;
      margin-top: 8px;
    }
  }
</style>
</head>
<body>
<div id="cf-wrapper">
  <div id="cf-error-details" class="cf-error-details-wrapper">
    <header class="cf-wrapper cf-header cf-error-overview">
      <h1 class="cf-error-headline">
        <span class="cf-error-type">Error</span>
        <span class="cf-error-code">503</span>
        <small class="heading-ray-id">Ray ID: ${rayId} &bull; ${timestamp} UTC</small>
      </h1>
      <h2 class="cf-subheadline">Service Temporarily Unavailable</h2>
    </header>

    <div class="cf-section cf-highlight cf-status-display">
      <div class="cf-wrapper">
        <div class="cf-status-grid">
          
          <!-- Browser Status -->
          <div id="cf-browser-status" class="cf-status-item">
            <div class="cf-icon-container">
              <svg class="device-icon" viewBox="0 0 24 24">
                <path d="M4 3h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2v10h16V5H4zm-2 14h20v2H2v-2z"/>
              </svg>
              <div class="cf-status-badge ok">
                <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              </div>
            </div>
            <span class="cf-status-desc">You</span>
            <h3 class="cf-status-name">Browser</h3>
            <span class="cf-status-label ok">Working</span>
          </div>

          <!-- Connector 1: Browser -> Cloudflare (OK) -->
          <div class="cf-connector">
            <div class="cf-connector-line">
              <div class="cf-connector-arrow"></div>
            </div>
          </div>

          <!-- Cloudflare Status -->
          <div id="cf-cloudflare-status" class="cf-status-item">
            <div class="cf-icon-container">
              <svg class="device-icon" viewBox="0 0 24 24">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"/>
              </svg>
              <div class="cf-status-badge ok">
                <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              </div>
            </div>
            <span class="cf-status-desc">Mumbai</span>
            <h3 class="cf-status-name">Cloudflare</h3>
            <span class="cf-status-label ok">Working</span>
          </div>

          <!-- Connector 2: Cloudflare -> Host (Error / Timeout) -->
          <div class="cf-connector">
            <div class="cf-connector-line dashed-error">
              <span class="cf-connector-cross">&#10005;</span>
            </div>
          </div>

          <!-- Host Status -->
          <div id="cf-host-status" class="cf-status-item">
            <div class="cf-icon-container">
              <svg class="device-icon" viewBox="0 0 24 24">
                <path d="M2 4h20v5H2V4zm0 6h20v5H2v-5zm0 6h20v5H2v-5zm2-10v1h2V6H4zm0 6v1h2v-1H4zm0 6v1h2v-1H4zm14-12v1h2V6h-2zm0 6v1h2v-1h-2zm0 6v1h2v-1h-2z"/>
              </svg>
              <div class="cf-status-badge error">
                <svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
              </div>
            </div>
            <span class="cf-status-desc">${host}</span>
            <h3 class="cf-status-name">Host</h3>
            <span class="cf-status-label error">Error</span>
          </div>

        </div>
      </div>
    </div>

    <div class="cf-section cf-wrapper">
      <div class="cf-columns two">
        <div class="cf-column">
          <h2>What happened?</h2>
          <p>The origin web server timed out responding to this request. Cloudflare was able to connect to the network, but the host server took too long to respond or is currently experiencing heavy load (503 Service Unavailable / Origin Connection Timeout).</p>
        </div>
        <div class="cf-column">
          <h2>What can I do?</h2>
          <h5>If you are a visitor of this website:</h5>
          <p>Please try again in a few minutes. The issue is on the web host and is usually temporary.</p>
          <h5>If you are the owner of this website:</h5>
          <p>Contact your hosting provider letting them know your web server is timing out and not completing requests. Verify your server resources (CPU, RAM) and error logs.</p>
          <p><a href="https://support.cloudflare.com/hc/en-us/articles/115003011431#503error" target="_blank" rel="noopener noreferrer">Additional troubleshooting information &raquo;</a></p>
        </div>
      </div>
    </div>

    <footer class="cf-error-footer cf-wrapper">
      <p>
        <span class="cf-footer-item">Cloudflare Ray ID: <strong>${rayId}</strong></span>
        <span class="cf-footer-separator">&bull;</span>
        <span class="cf-footer-item">Your IP: <span>${clientIp}</span></span>
        <span class="cf-footer-separator">&bull;</span>
        <span class="cf-footer-item">Performance &amp; security by <a href="https://www.cloudflare.com/5xx-error-landing" target="_blank" rel="noopener noreferrer">Cloudflare</a></span>
      </p>
    </footer>
  </div>
</div>
</body>
</html>`
}

export function middleware(request: NextRequest) {
  const rawHost = request.headers.get('host') || 'contacttohire.in'
  const host =
    rawHost.includes('localhost') || rawHost.includes('127.0.0.1')
      ? 'contacttohire.in'
      : rawHost.replace(/:\d+$/, '')

  const realIp =
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('x-real-ip')
  const clientIp =
    realIp && realIp !== '::1' && realIp !== '127.0.0.1' ? realIp : '152.58.31.142'

  const rayId = generateRayId()
  const now = new Date()
  const timestamp = now.toISOString().replace('T', ' ').substring(0, 19)

  const html = getCloudflareHtml(host, clientIp, rayId, timestamp)

  return new NextResponse(html, {
    status: 503,
    statusText: 'Service Temporarily Unavailable',
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
      'Server': 'cloudflare',
      'CF-Ray': `${rayId}-BOM`,
      'Cache-Control': 'private, no-cache, no-store, must-revalidate, max-age=0',
      'Connection': 'keep-alive',
    },
  })
}

export const config = {
  matcher: ['/:path*'],
}
