const express = require("express");
const router = express.Router();
const multer = require("multer")();

router.post("/", multer.none(), function (req, res, next) {
  console.log(req.body);
  const {
    userId,
    loan_type,
    loan_amount,
    loan_apply_date,
    loan_issue_date,
    rate_of_interest,
    duration_of_loan,
  } = req.body;

  res.set("Access-Control-Allow-Origin", "*");
  if (rate_of_interest > 500) {
    res.send({
      isValidated: false,
      message: "Rate of Interest cannot be greater than 10",
      userId,
    });
  } else {
    res.send({
      isValidated: true,
      message: "Data Validation Successfull",
      userId,
      loan_type,
      loan_amount,
      loan_apply_date,
      loan_issue_date,
      rate_of_interest,
      duration_of_loan,
    });
  }
});

module.exports = router;
