import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { SiAnaconda } from "react-icons/si";
import {IoMdCall} from "react-icons/io";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";
import logo from '../../assets/logo.png'

import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="navbar container">
      <div className="logo ">
        {/* <SiAnaconda color="#a5362f" size={33} /> */}
        {/* <p className="logo-text">
          BNA HVAC */}
          {/* <span>X</span> */}
        {/* </p> */}
        <img src={logo} alt='' />
      </div>
      <menu>
        <ul
          className="nav-links"
          id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about-us">About Us</a>
          </li>
          <li>
            <a href="#features">Services</a>
          </li>
          
          <li>
            <a href="#subscribe">Contact</a>
          </li>

          {/* <li>
            <a href="#" className="btn btn-dark">
              Get Started
            </a>
          </li> */}
          <li className="nav-btn">
          <span><IoMdCall size={25} /></span> <Button text={"Call Us Now"} btnClass={"btn-dark"} href={"tel:0435614524"} />
          </li>
        </ul>
      </menu>
      <div className="menu-icons" onClick={toggleMenu}>
        {showMenu ? (
          <RiCloseLine color="#0a1930" size={30} />
        ) : (
          <AiOutlineBars color="#0a1930" size={27} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
