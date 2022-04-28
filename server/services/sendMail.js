const nodemailer = require('nodemailer');
const mailConfig = require('./mailConfig')

let SEND_EMAIL_OPERATION_FAILED = false;
  
  const sendMail = async({ sender , receiver , subject , text }) =>{
    console.log("Mail Sending process started!");
    console.log("sender : " + sender);
    console.log("receiver : " + receiver);
    console.log("subject : " + subject);
    
    let mailOptions = {
        from: sender,
        to: receiver,
        subject: subject,
        text: text
    };

  try{
      mailConfig.transporter.sendMail(mailOptions)
        .then((res) => {
          console.log("Mail Sent Successfully!");
        }).catch((error) => {
          console.log(error);
        });
    }
    catch(error){
      console.log(error);
    }

      /* Uncomment this line for debugging purpose only */
        //console.log(mailConfig.transporter);
}

module.exports = {
  sendMail
}
