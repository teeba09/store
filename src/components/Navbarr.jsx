import React from "react";
import logo from "../assets/logo.svg";

function Navbarr() {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <h1> Home</h1>
        <h1> Products</h1>
        <h1> About Us</h1>
      </div>
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default Navbarr;
