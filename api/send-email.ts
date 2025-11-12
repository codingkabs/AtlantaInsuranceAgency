import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

// Initialize Resend with API key from environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Parse the request body
    const body = req.body;
    const { name, email, phone, insuranceType, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !insuranceType) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Get recipient email from environment variable, fallback to default
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'david@tegins.net';

    // Escape HTML to prevent XSS in email
    const escapeHtml = (text: string) => {
      return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    };

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeInsuranceType = escapeHtml(insuranceType);
    const safeMessage = message ? escapeHtml(message) : '';

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Atlanta Insurance Agency <onboarding@resend.dev>', // You'll need to verify your domain later
      to: recipientEmail,
      replyTo: email,
      subject: `Quote Request: ${insuranceType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a;">New Quote Request</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Phone:</strong> ${safePhone}</p>
            <p><strong>Insurance Type:</strong> ${safeInsuranceType}</p>
          </div>
          ${safeMessage ? `
            <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #1e3a8a; margin: 20px 0;">
              <h3 style="color: #1e3a8a; margin-top: 0;">Additional Information:</h3>
              <p style="white-space: pre-wrap;">${safeMessage}</p>
            </div>
          ` : ''}
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          <p style="color: #6b7280; font-size: 12px;">
            This email was sent from the Atlanta Insurance Agency contact form.
          </p>
        </div>
      `,
      text: `
New Quote Request

Name: ${name}
Email: ${email}
Phone: ${phone}
Insurance Type: ${insuranceType}

${message ? `Additional Information:\n${message}` : ''}
      `.trim(),
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email', details: error });
    }

    // Success response
    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      id: data?.id 
    });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

