const nodemailer = require('nodemailer');

// Create transporter once (singleton) – reused for all emails
let _transporter = null;
const getTransporter = () => {
  if (!_transporter) {
    _transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }
  return _transporter;
};

// Email template for contact form submission
const createContactEmailTemplate = (contactData) => {
  const { name, email, phone, message, createdAt } = contactData;

  return {
    subject: `New Contact from ${name} - Aries Technologies`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
          }
          .header {
            background: linear-gradient(135deg, #FF2E2E 0%, #C41E1E 100%);
            color: white;
            padding: 30px 20px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
          }
          .content {
            padding: 30px 20px;
            background: #f9f9f9;
          }
          .field {
            background: white;
            margin: 15px 0;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #FF2E2E;
          }
          .label {
            font-weight: 600;
            color: #FF2E2E;
            display: block;
            margin-bottom: 5px;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .value {
            color: #333;
            font-size: 15px;
          }
          .message-box {
            background: white;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #FF2E2E;
            margin: 15px 0;
          }
          .footer {
            background: #333;
            color: white;
            padding: 20px;
            text-align: center;
            font-size: 12px;
          }
          .footer a {
            color: #FF2E2E;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🔔 New Contact Form Submission</h1>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">👤 Name</span>
              <span class="value">${name}</span>
            </div>
            <div class="field">
              <span class="label">📧 Email</span>
              <span class="value"><a href="mailto:${email}">${email}</a></span>
            </div>
            <div class="field">
              <span class="label">📱 Phone</span>
              <span class="value"><a href="tel:${phone}">${phone}</a></span>
            </div>
            <div class="message-box">
              <span class="label">💬 Message</span>
              <p class="value">${message}</p>
            </div>
            <div class="field">
              <span class="label">🕐 Submitted</span>
              <span class="value">${new Date(createdAt).toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'short'
    })}</span>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from the Aries Technologies contact form.</p>
            <p>Reply directly to <a href="mailto:${email}">${email}</a> to respond to this inquiry.</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
New Contact Form Submission - Aries Technologies

Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
Submitted: ${new Date(createdAt).toLocaleString()}

Reply to: ${email}
    `,
  };
};

// Send contact notification email
const sendContactNotification = async (contactData) => {
  // Skip email sending if credentials not configured
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.warn('⚠️  Email credentials not configured — skipping notification.');
    return { success: false, error: 'Email not configured' };
  }

  try {
    const transporter = getTransporter();
    const emailContent = createContactEmailTemplate(contactData);

    const mailOptions = {
      from: `"Aries Technologies" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: emailContent.subject,
      html: emailContent.html,
      text: emailContent.text,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error.message);
    return { success: false, error: error.message };
  }
};

module.exports = {
  sendContactNotification,
};
