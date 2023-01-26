import nodemailer from "nodemailer";

const createTrans = () => {
  /* config the host */
  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    /* secure: false, */
    auth: {
      user: "610d6535cecaa5",
      pass: "71de9fba2479b3",
    },
    /*  tls: {
      rejectUnauthorized: false,
    }, */
  });

  return transporter;
};

const sendMail = async (obj) => {
  /* config data to submit*/
  const info = await createTrans().sendMail({
    from: '"Fred Foo " <foo@example.com>', //sender address
    to: [`${obj.email}`], //list of receivers
    subject: "How are you ? Mr Robot.",
    html: `<h1>User Information</h1>
            <ul>
              <li>User name: ${obj.name}</li>
              <li>User lastname: ${obj.lastName}</li>
              <li>Email: ${obj.email}</li>
              <li>Phone: ${obj.phone}</li>
              <p>${obj.menssage}</p>
            </ul>
    `, //html body
    attachments: [
      {
        // use URL as an attachment
        filename: "license.txt",
        path: "https://raw.github.com/nodemailer/nodemailer/master/LICENSE",
      }
    ]
  });

  console.log(`Message setnt %s ${info.messageId}`);

  return;
};

export default function sendMailExpor(obj) {
  sendMail(obj);
}
