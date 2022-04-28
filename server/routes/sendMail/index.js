const express = require("express");
const router = express.Router();
const multer = require("multer")();
const sendMailHandler = require('../../services/sendMail');
const { Mail } = require('../../services/mailClass'); 

router.post("/", multer.none(), function (req, res, next) {
    // console.log(req.query);
    let response = true;

    const { sender,receiver,subject,text,preference } = req.query;

    const mailer = new Mail(sender , receiver , subject , text , preference);

    /* Uncomment this line for debugging purpose only */
    console.log(mailer);

    const validateCredentials = () => {
        return (mailer.sender.length !== 0 && mailer.receiver.length !== 0  && mailer.subject.length !== 0 && mailer.text.length !== 0);
    }

    // TODO : Add a better validation check!

    if(validateCredentials()){
        // sendMailHandler.sendMail(mailer);
        mailer.createScheduler();
    }
    else{
        response = false;
    }
    
    res.send({
        operationSuccesfull : response
    });
});

module.exports = router;