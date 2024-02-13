import React from "react";
import logo from "../imgs/street suite logo-04.png";
import profilePic from "../imgs/profilepic.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import "./navbar.css";

const Navbar = () => {
  library.add(fas);
  return (
    <div className="navbar">
      <div className="left-side">
        <img src={logo} alt="Logo" className="logo" />
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>
      <div className="right-side">
        <div className="alert">
          <FontAwesomeIcon icon="fa-solid fa-bell" className="alert-icon" />
          <div className="alert-number">3</div>
        </div>
        <FontAwesomeIcon
          icon="fa-solid fa-alarm-clock"
          className="alarm-icon"
        />
        <div className="profile-info">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <span className="profile-name">Mahmoud Mira</span>{" "}
        </div>
        <div className="circle">
          <FontAwesomeIcon
            icon="fa-solid fa-arrow-down"
            className="arrow-down-icon"
            style={{ color: "#404040", cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
