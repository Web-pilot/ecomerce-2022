const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main(email, subject, plain_text) {
  try {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "gmail",
      port: 587,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.USER_EMAIL, // generated ethereal user
        pass: process.env.USER_EMAIL_PASS, // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"Recomerce 👻" ${process.env.USER_EMAIL}`, // sender address
      to: email, // list of receivers
      subject: subject, // Subject line
      text: plain_text, // plain text body
      html: `<a href="localhost:5000/stripe/webhook">Visit app</a>`, // html body
    });

    console.log(info);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = main;
