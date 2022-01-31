/* eslint-disable arrow-body-style */
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../screens/landingPage";
import Login from "../screens/login";
// import Signup from "../screens/signup";
// import Dashboard from "../screens/dashboard";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      {/* <Route path="/signup" element={<Signup />}></Route> */}
    </Routes>
  );
};

export default Main;
