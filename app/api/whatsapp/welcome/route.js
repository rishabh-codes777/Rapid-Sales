// app/api/whatsapp/route.js

export async function POST(request) {
    const { mobile } = await request.json();
    // Replace these with your own values
    const accessToken = 'EAANr5g2jbr4BO4iyZAlUEx6LDycrbeHdfToSzve11HGMGQQzIdyGlkun4CgcP94ZBo59WA1kd7gunfUx3UzAsGCDjTBRiUZCIGr8J8qqaeKIYM0MEgqTwFiqFL3f0RrMunXdVM2tMvG6YNoXWwqX86RQGgspHh7NsQWqYAs1wuSqtZCZBw2bJWzNnnR9YhOtX7sBthMRK2ZBQYF4Np0FgZD'; // Your access token from Meta Developer account
    const phoneNumberId = '298498760024821'; // WhatsApp Business Account phone number ID
    const recipientPhoneNumber = `+91${mobile}`; // Replace with the correct phone number in E.164 format
    const messageText = 'As promised, please find attached a special eBook that will guide you in starting your journey. This resource is packed with valuable insights and actionable steps to help you hit the ground running.';
    const documentUrl = 'https://sprintearn.s3.ap-south-1.amazonaws.com/Sprint+Earn+Playbook+-+2.0.pdf'; // URL to the document file
    const documentTitle = 'Sprint Earn Playbook 2.0.pdf';
  try {
    // Send the message with the document URL
    

    const response1 = await fetch(`https://graph.facebook.com/v18.0/${phoneNumberId}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: recipientPhoneNumber,
          type: 'text',
          text: { body: "Hey Thanks for subscribing the sprint earn 😊" },
        }),
    });

    const response2 = await fetch(`https://graph.facebook.com/v18.0/${phoneNumberId}/messages`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: recipientPhoneNumber,
        type: 'text',
        text: { body: "We are excited to have you on board for the next six weeks as you embark on a journey to start earning money. Your commitment to this program is the first step towards unlocking your potential. \n" },
    }),
    });

    const response = await fetch(`https://graph.facebook.com/v18.0/${phoneNumberId}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: recipientPhoneNumber,
          type: 'document',
          document: {
            link: documentUrl, // Use the link to the document instead of media_id
            caption: messageText, // Optional: Add a caption to the document
            filename: documentTitle
          },
        }),
    });

    if (!response1.ok) {
      const errorText = await response.text();
      console.error('Error sending message:', errorText);
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
  }
  