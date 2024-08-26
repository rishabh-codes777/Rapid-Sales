import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { connectDB } from '@/utils/mongodb';
import FreeUsers from '@/models/freeuserModel';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
      const {name, email, mobile } = await req.json();
      //save in database
      await connectDB();
      await FreeUsers.create({name, email, mobile});
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
      subject: ' Your Copy of the Sprint Earn Playbook is Here!',
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            color: #333333;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding: 20px 0;
            background-color: #306338;
            color: #ffffff;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .content {
            padding: 20px;
        }
        .content p {
            font-size: 16px;
            line-height: 1.6;
        }
        .button {
            display: block;
            width: 200px;
            margin: 20px auto;
            text-align: center;
            padding: 10px 20px;
            background-color: #306338;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
        }
        .footer {
            text-align: center;
            padding: 20px;
            background-color: #f4f4f4;
            font-size: 14px;
            color: #666666;
        }
        .footer a {
            color: #306338;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Welcome to Sprint Earn!</h1>
        </div>
        <div class="content">
            <p>Dear ${name},</p>
            <p>Thank you for subscribing the <strong>Sprint Earn</strong></p>
            <p>We are excited to share this valuable resource with you. Inside, you'll find actionable strategies and insights to help you start earning money in just simple steps. Whether you're looking to build a product, offer a service, become an influencer, or explore affiliate marketing, this playbook has got you covered.</p>
            <p>Your free ebook is attached with this email.</p>
            <p>Feel free to visit our website for more information and resources: <a href="https://sprintearn.com" class="button">Visit Sprint Earn</a></p>
            <p>We hope you find the <strong>Sprint Earn Playbook</strong> useful and look forward to helping you on your journey to financial success.</p>
            <p>Best regards,</p>
            <p>The Sprint Earn Team</p>
        </div>
        <div class="footer">
            <p>If you have any questions or need further assistance, please do not hesitate to reach out to us at contact@sprintearn.com.</p>
            <p>Happy earning!</p>
            <p><strong>The Sprint Earn Team</strong></p>
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
