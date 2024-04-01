const mailer = require("nodemailer");
const welcome = require("./welcome_template");
const goodbye = require("./goodbye_template");

const getEmailData = (to, name, template) => {
  let data = null;

  switch (template) {
    case "welcome":
      data = {
        from: "보내는 사람 이름 <uerId>",
        to,
        subject: `Hello ${name}`,
        html: welcome(),
      };
      break;
    case "goodbye":
      data = {
        from: "보내는 사람 이름 <uerId>",
        to,
        subject: `Hello ${name}`,
        html: goodbye(),
      };
      break;

    default:
      data;
  }
  return data;
};

const sendMail = (to, name, type) => {
  const transporter = mailer.createTransporter({
    service: "Gmail",
    auth: {
      user: "johnahndev@gmail.com", // 유저 이메일 아이디
      pass: process.env.EMAIL_PASSWORD, // 구글에서 새로 생성한 비밀번호
    },
  });

  const mail = getEmailData(to, name, type);

  transporter.sendEmail(mail, (error, response) => {
    if (error) {
      console.log(error);
    } else {
      console.log("email sent successfully");
    }
    transporter.close();
  });
};

module.exports = sendMail;
