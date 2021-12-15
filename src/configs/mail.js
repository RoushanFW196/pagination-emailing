const nodemailer=require('nodemailer');


 module.exports= nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: "389f2d18bbf83f",
      pass: "1dc6f2f82a258c",
    },
  });