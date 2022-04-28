var cron = require('node-cron');
const sendMailHandler = require('./sendMail');
const constants = require("../utils/constants");

class Mail{

    constructor(sender , receiver , subject , text , preference){
        this.sender = sender;
        this.receiver = receiver;
        this.subject = subject;
        this.text = text;
        this.preference = preference;
        this.taskSchedular = null;
    }

    createScheduler = () =>{

        switch(this.preference){
            case constants.DEFAULT : /* Minute */
                    this.taskSchedular = cron.schedule('* * * * *',() => sendMailHandler.sendMail(this));
                    break;
            case constants.WEEKLY : /* Weekly Scheduler */
                    this.taskSchedular = cron.schedule('* * * * *',() => sendMailHandler.sendMail(this));
                    break;
            case constants.MONTHLY :  /* Monthly Scheduler */
                    this.taskSchedular = cron.schedule('* * * * *',() => sendMailHandler.sendMail(this));
                    break;
            case constants.YEARLY :  /* Yearly Scheduler */
                    this.taskSchedular = cron.schedule('* * * * *',() => sendMailHandler.sendMail(this));
                    break;
            default :       /* Default case Scheduling by minutes */
                    this.taskSchedular = cron.schedule('* * * * *',() => sendMailHandler.sendMail(this));      
        }
    }

    /* Currently not in use */

    stopScheduler = () => {
        this.taskSchedular.stop();
    }

    /* Currently not in use */

    destroyScheduler = () => {
        this.taskSchedular.destroy();
    }

}

module.exports = {
    Mail
};