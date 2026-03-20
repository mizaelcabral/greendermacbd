import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Greenderma Contact <no-reply@greendermacbd.com>', // Verified domain address
      to: [process.env.CONTACT_EMAIL || 'contact@greendermacbd.com'],
      subject: `New Contact Message from ${name}`,
      reply_to: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #1b3320; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #1b3320; padding: 24px; text-align: center;">
            <h1 style="color: #FFD600; margin: 0; font-size: 24px;">New Contact Submission</h1>
          </div>
          <div style="padding: 32px; color: #333; line-height: 1.6;">
            <p style="margin-top: 0;">You have received a new message from the Greenderma website.</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 24px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #f9f9f9; padding: 16px; border-radius: 4px; border-left: 4px solid #FFD600;">
              ${message}
            </div>
          </div>
          <div style="background-color: #f4f4f4; padding: 16px; text-align: center; font-size: 12px; color: #777;">
            &copy; 2026 Greenderma CBD. All rights reserved.
          </div>
        </div>
      `,
      text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error('Resend Error:', error);
      return res.status(500).json({ error: error.message });
    }

    res.status(200).json({ success: true, data });
  } catch (err) {
    console.error('Server Error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
