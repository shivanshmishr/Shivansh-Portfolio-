@ts-ignore
import nodemailer from 'nodemailer';


export async function POST(request: Request) {
  const body = await request.json();

  // Create a transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'learningbyshiv422@gmail.com',
      pass: 'ouok oiii nzul adec',
    },
  });
  

  // Setup email data
  let mailOptions = {
    from: '"Contact Form" <yourEmail@gmail.com>', // sender address
    to: 'learningbyshiv422@gmail.com', // list of receivers
    subject: 'New Contact Form Submission', // Subject line
    html: `<p>You have a new contact form submission:</p>
           <p><strong>Name:</strong> ${body.person_name}</p>
           <p><strong>Email:</strong> ${body.email}</p>
           <p><strong>Company:</strong> ${body.company}</p>
           <p><strong>Type a message :</strong> ${body.message}</p>`, // HTML body content
  };

  // Send mail with defined transport object
  try {
    await transporter.sendMail(mailOptions);
    return new Response('Email sent!', { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response('Failed to send email.', { status: 500 });
  }
}
