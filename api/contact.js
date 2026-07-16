import { Resend } from 'resend';

const resend = new Resend((process.env.RESEND_API_KEY || '').trim());

const ADMIN_EMAIL = 'admin@zionlead.com.ng';
const FROM_EMAIL = 'Zionlead Contact Form <onboarding@resend.dev>';
const SUBJECT = 'New Contact Form Submission - Zionlead';

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

    // ── Send email via Resend ───────────────────────────────────────────────
    try {
        const { data, error } = await resend.emails.send({
            from: FROM_EMAIL,
            to: [ADMIN_EMAIL],
            replyTo: email.trim(),
            subject: SUBJECT,
            html: htmlBody,
            text: textBody,
        });

        if (error) {
            console.error('[contact] Resend API error:', error);
            return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
        }

        console.log('[contact] Email sent successfully. ID:', data?.id);
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
