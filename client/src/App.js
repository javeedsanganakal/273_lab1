import "./App.css";
import React, { Component } from "react";

// import { useState, useEffect } from "react";
import Home from "./components/Home";
import Signin from "./components/Signin";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./components/register";
import WelcomePage from "./components/welcomePage";
import Navbar from "./components/Navbar";
// import Axios from "axios";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/welcome" element={<WelcomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
