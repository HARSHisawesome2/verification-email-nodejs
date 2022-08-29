const nodemailer = require("nodemailer");
const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email' , 
      port: 587,
      auth: {
          user: 'merritt.nicolas80@ethereal.email',
          pass: 'hCWX4H3FRaf16pFCcZ'
      },
    });

    await transporter.sendMail({
      from: 'merritt.nicolas80@ethereal.email',
      to: email,
      subject: subject,
      text: text,
    });
    console.log("email sent sucessfully");
  } catch (error) {
    console.log("email not sent");
    console.log(error);
  }
};

module.exports = sendEmail;










