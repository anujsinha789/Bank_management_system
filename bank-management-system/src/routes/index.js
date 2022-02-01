/* eslint-disable arrow-body-style */
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../screens/landingPage";
import Login from "../screens/login";
import RegisterUser from "../screens/registerUser";
import Dashboard from "../screens/userDashboard";
import LoanApplication from "../screens/loanApplication";
import EducationLoanApplication from "../screens/educationLoanApplication";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<RegisterUser />}></Route>
      <Route path="/userDashboard" element={<Dashboard />}></Route>
      <Route path="/loanApplication" element={<LoanApplication />}></Route>
      <Route
        path="/educationLoanApplication"
        element={<EducationLoanApplication />}
      ></Route>
    </Routes>
  );
};

export default Main;
