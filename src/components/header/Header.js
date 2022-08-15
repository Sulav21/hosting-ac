import React, { useEffect } from "react";
import "./Header.css";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";
import phoneHeader from "../../assets/phone-header-bg.png";
import { BsMouse } from "react-icons/bs";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="header">
      <div className="header-titles">
        <h3>Domestic & Commercial Heating</h3>
        <h2>Ventilation Air Conditioning Services</h2>
        <h5>Exceeding your expectations by providing quality services</h5>
        <a href='#subscribe'><button>Contact Us</button></a>
      </div>
      <div className="floating-icon">
        <a href="#about-us">
          <BsMouse color="#fff" size={25} className="mouse" />
        </a>
      </div>
    </section>
  );
};

export default Header;
