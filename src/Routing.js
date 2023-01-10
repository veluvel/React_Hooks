import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        {/* <Route path="*" element={<h1>Page Not Found..!</h1>}></Route> */}
        <Route path="*" element={<Navigate to="/home"></Navigate>}>
          {" "}
        </Route>
      </Routes>
    </Router> //browseRouter ku alias name vachirukkom <Router> endru so atha use pannirukkom
  );
};

export default Routing;
