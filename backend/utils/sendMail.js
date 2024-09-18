const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "ajayreigns0@gmail.com",
    pass: "abljxesitkezvulo",
  },
});
async function sendMail(body) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `Client Mails <ajayreigns0@gmail.com>`,
    to: "ajayreigns0@gmail.com",
    subject: `${body.fullName}: Need a service - Reg`,
    text: body.projectDetails,
    html: `<div>
        <strong>Your Name: </strong>${body.fullName}<br/><br/>
        <strong>Phone: </strong>${body.phone}<br/><br/>
        <strong>Email: </strong>${body.email}<br/><br/>
        <strong>Project Details: </strong>${body.projectDetails}<br/><br/>
        <pre>Digital Signature: ${body.fullName}</pre>
        </div>`,
  });
  return info;
}
module.exports = { sendMail };
