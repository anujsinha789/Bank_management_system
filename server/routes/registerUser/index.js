const express = require("express");
const router = express.Router();
const multer = require("multer")();

router.post("/", multer.none(), function (req, res, next) {
  console.log(req.body);
  const {
    name,
    username,
    password,
    guardian_type,
    guardian_name,
    address,
    citizenship,
    state,
    country,
    gender,
    martial_status,
    email,
    contact,
    date_of_birth,
    account_type,
    branch_name,
  } = req.body;

  res.set("Access-Control-Allow-Origin", "*");
  if (name.length > 10) {
    res.send({
      userRegistered: false,
      message: "Name can't be greater than 10 words.",
    });
  } else {
    res.send({
      userId: "RRR-123",
      userRegistered: true,
      message: "User registered Successfully",
      name,
      username,
      password,
      guardian_type,
      guardian_name,
      address,
      citizenship,
      state,
      country,
      gender,
      martial_status,
      email,
      contact,
      date_of_birth,
      account_type,
      branch_name,
    });
  }
});

module.exports = router;
