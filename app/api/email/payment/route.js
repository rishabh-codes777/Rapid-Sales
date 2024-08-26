import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { email } = await req.json();

    // Fetch the file from the S3 URL
    const s3Url = "https://sprintearn.s3.ap-south-1.amazonaws.com/Sprint+Earn+Playbook+-+2.0.pdf";
    const response = await fetch(s3Url);
    const arrayBuffer = await response.arrayBuffer();
    const base64File = Buffer.from(arrayBuffer).toString('base64');

    const attachments = [
      {
        filename: 'Sprint Earn Playbook.pdf',
        content: base64File,
        encoding: 'base64',
      },
    ];

    const emailResponse = await resend.emails.send({
      from: 'no-reply@resources.sprintearn.com',
      to: email,
      subject: 'Payment Confirmed - Welcome to SprintEarn!🎉',
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to SprintEarn</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            color: #333;
        }
        .email-container {
            background-color: #ffffff;
            max-width: 600px;
            margin: 40px auto;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #306338;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .content {
            padding: 20px;
        }
        .content p {
            line-height: 1.6;
            margin-bottom: 20px;
        }
        .content a {
            display: inline-block;
            background-color: #306338;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 4px;
            font-size: 16px;
        }
        .footer {
            text-align: center;
            padding: 20px;
            font-size: 14px;
            color: #777;
        }
        .footer p {
            margin: 0;
        }
        .footer a {
            color: #306338;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>Welcome to SprintEarn 🎉</h1>
        </div>
        <div class="content">
            <p>Hii,</p>
            <p>Thank you for your payment and welcome to SprintEarn!</p>
            <p>We're excited to have you on board for the next six weeks as you embark on a journey to start earning money. Your commitment to this program is the first step towards unlocking your potential.</p>
            <p>As promised, please find attached a special eBook that will guide you in starting your journey. This resource is packed with valuable insights and actionable steps to help you hit the ground running.</p>
            <p>We’re here to support you every step of the way. If you have any questions or need assistance, don’t hesitate to reach out.</p>
            <p>Let’s get started!</p>
            <p>Best regards,<br>SprintEarn Team</p>
        </div>
        <div class="footer">
            <p>For any support, please contact us at <a href="mailto:support@sprintearn.com">support@sprintearn.com</a>.</p>
            <p>© 2024 SprintEarn. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`,
      attachments,
    });

    return NextResponse.json({ data: emailResponse, status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email', status: 500 });
  }
}
