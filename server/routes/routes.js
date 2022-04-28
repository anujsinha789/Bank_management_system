const express = require("express");
const router = express.Router();

const getLanguage = require("./getLanguage");
const registerUser = require("./registerUser"); //http://localhost:4000/registerUser
const authenticateUser = require("./authenticateUser"); //http://localhost:4000/authenticateUser.do
const sendMail = require("./sendMail"); //http://localhost:4000/sendMail.do
const validateLoanApplicationData = require("./validateLoanApplicationData");
// User Registration
router.use("/registerUser", registerUser);

// get lang data
router.use("/getLanguage", getLanguage);

// Authentication Routes
router.use("/authenticateUser", authenticateUser);

router.use("/validateLoanApplicationData", validateLoanApplicationData);

// Mail service Routes
// router.use("/sendMail.do",sendMail);

/*Define your routes before this */

module.exports = router;
