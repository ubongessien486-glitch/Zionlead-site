import { Resend } from 'resend';
import nodemailer from 'nodemailer';

const resend = new Resend((process.env.RESEND_API_KEY || '').trim());

// ── Delivery strategy ────────────────────────────────────────────────────────
// This handler sends through whichever transport is configured, so the site can
// go live before the Resend domain is verified:
//
//   SMTP (preferred when configured) — set these in Vercel to deliver straight to
//   admin@zionlead.com.ng via the domain's own mail server. Needs NO DNS records:
//     SMTP_HOST=mail.zionlead.com.ng
//     SMTP_PORT=465
//     SMTP_USER=noreply@zionlead.com.ng   (an existing cPanel mailbox)
//     SMTP_PASS=<that mailbox's password>
//
//   Resend (fallback) — used when SMTP is not configured. Its sandbox sender only
//   reaches the Resend account owner's own inbox until zionlead.com.ng is verified
//   at resend.com/domains, so the fallback recipient stays that owner inbox.
//
// CONTACT_TO_EMAIL overrides the recipient for either transport (comma-separated).
const SMTP_HOST = (process.env.SMTP_HOST || '').trim();
const SMTP_USER = (process.env.SMTP_USER || '').trim();
const SMTP_PASS = process.env.SMTP_PASS || '';
const SMTP_ENABLED = Boolean(SMTP_HOST && SMTP_USER && SMTP_PASS);

const SUBJECT = 'New Contact Form Submission - Zionlead';

// Sender: SMTP servers require the From to be the authenticated mailbox.
const FROM_EMAIL = SMTP_ENABLED
    ? (process.env.CONTACT_FROM_EMAIL || `Zionlead Contact Form <${SMTP_USER}>`)
    : (process.env.CONTACT_FROM_EMAIL || 'Zionlead Contact Form <onboarding@resend.dev>');

// Recipient: default to the client's admin mailbox once SMTP can reach it,
// otherwise the Resend-owner inbox that the sandbox sender is allowed to hit.
const TO_EMAIL = (process.env.CONTACT_TO_EMAIL || (SMTP_ENABLED ? 'admin@zionlead.com.ng' : 'ubongessien486@gmail.com'))
    .split(',')
    .map((addr) => addr.trim())
    .filter(Boolean);

export default async function handler(req, res) {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, company, email, phone, service, message } = req.body;

    // ── Server-side validation ──────────────────────────────────────────────
    const errors = [];
    if (!name || !name.trim()) errors.push('Name is required.');
    if (!email || !email.trim()) errors.push('Email is required.');
    if (!message || !message.trim()) errors.push('Message is required.');
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
        errors.push('Please provide a valid email address.');
    }

    if (errors.length > 0) {
        return res.status(400).json({ error: errors.join(' ') });
    }

    const submittedAt = new Date().toLocaleString('en-US', {
        timeZone: 'Africa/Lagos',
        dateStyle: 'full',
        timeStyle: 'long',
    });

    // ── Build email body ────────────────────────────────────────────────────
    const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: Arial, sans-serif; color: #1e293b; background: #f8fafc; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 32px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
    .header { background: linear-gradient(135deg, #06b6d4, #10b981); padding: 28px 32px; }
    .header h1 { color: #ffffff; margin: 0; font-size: 20px; font-weight: 700; }
    .header p { color: rgba(255,255,255,0.85); margin: 6px 0 0; font-size: 13px; }
    .body { padding: 32px; }
    .field { margin-bottom: 20px; }
    .label { font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px; }
    .value { font-size: 15px; color: #0f172a; }
    .divider { height: 1px; background: #e2e8f0; margin: 24px 0; }
    .message-box { background: #f1f5f9; border-left: 4px solid #06b6d4; border-radius: 6px; padding: 16px 20px; }
    .message-box .value { font-size: 14px; line-height: 1.7; white-space: pre-wrap; }
    .footer { background: #f8fafc; padding: 20px 32px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
    .badge { display: inline-block; background: #ecfdf5; color: #059669; border: 1px solid #a7f3d0; border-radius: 20px; padding: 3px 12px; font-size: 12px; font-weight: 600; margin-bottom: 16px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📬 New Contact Form Submission</h1>
      <p>Received via zionlead.com.ng</p>
    </div>
    <div class="body">
      <span class="badge">New Enquiry</span>

      <div class="field">
        <div class="label">Full Name</div>
        <div class="value">${escapeHtml(name.trim())}</div>
      </div>

      <div class="field">
        <div class="label">Company</div>
        <div class="value">${escapeHtml((company || '—').trim())}</div>
      </div>

      <div class="field">
        <div class="label">Email Address</div>
        <div class="value"><a href="mailto:${escapeHtml(email.trim())}" style="color:#06b6d4;">${escapeHtml(email.trim())}</a></div>
      </div>

      <div class="field">
        <div class="label">Phone Number</div>
        <div class="value">${escapeHtml((phone || '—').trim())}</div>
      </div>

      <div class="field">
        <div class="label">Service Needed</div>
        <div class="value">${escapeHtml((service || '—').trim())}</div>
      </div>

      <div class="divider"></div>

      <div class="field">
        <div class="label">Message</div>
        <div class="message-box">
          <div class="value">${escapeHtml(message.trim())}</div>
        </div>
      </div>

      <div class="divider"></div>

      <div class="field">
        <div class="label">Submitted At</div>
        <div class="value" style="font-size:13px; color:#64748b;">${submittedAt} (WAT)</div>
      </div>
    </div>
    <div class="footer">
      This message was sent from the Zionlead contact form.<br />
      Reply directly to <strong>${escapeHtml(email.trim())}</strong> to respond to this enquiry.
    </div>
  </div>
</body>
</html>
`;

    const textBody = `
New Contact Form Submission - Zionlead
=======================================

Name: ${name.trim()}
Company: ${(company || '—').trim()}
Email: ${email.trim()}
Phone: ${(phone || '—').trim()}
Service Needed: ${(service || '—').trim()}

Message:
${message.trim()}

Submitted At:
${submittedAt} (WAT)
`.trim();

    // ── Send email ──────────────────────────────────────────────────────────
    try {
        if (SMTP_ENABLED) {
            // Deliver via the domain's own mail server (no DNS verification needed).
            const port = Number(process.env.SMTP_PORT || 465);
            const transporter = nodemailer.createTransport({
                host: SMTP_HOST,
                port,
                secure: port === 465, // 465 = implicit TLS; 587 = STARTTLS
                auth: { user: SMTP_USER, pass: SMTP_PASS },
            });

            const info = await transporter.sendMail({
                from: FROM_EMAIL,
                to: TO_EMAIL,
                replyTo: email.trim(),
                subject: SUBJECT,
                html: htmlBody,
                text: textBody,
            });

            console.log('[contact] Email sent via SMTP. messageId:', info?.messageId);
            return res.status(200).json({ success: true, id: info?.messageId });
        }

        // Fallback: Resend.
        const { data, error } = await resend.emails.send({
            from: FROM_EMAIL,
            to: TO_EMAIL,
            replyTo: email.trim(),
            subject: SUBJECT,
            html: htmlBody,
            text: textBody,
        });

        if (error) {
            console.error('[contact] Resend API error:', error);
            return res.status(500).json({ error: `Failed to send email: ${error.message}` });
        }

        console.log('[contact] Email sent via Resend. ID:', data?.id);
        return res.status(200).json({ success: true, id: data?.id });

    } catch (err) {
        console.error('[contact] Unexpected error:', err.message || err);
        return res.status(500).json({ error: 'An unexpected error occurred. Please try again.' });
    }
}

// ── Helpers ─────────────────────────────────────────────────────────────────
function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
