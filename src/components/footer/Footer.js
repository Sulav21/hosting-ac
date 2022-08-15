import React from "react";
import "./Footer.css";
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>BNA HVAC Services</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#features">Services</a></li>
        <li><a href="#about-us">About Us</a></li>
        <li><a href="#subscribe">Contact Us</a></li>
      </ul>

      <div className="footer_socials">
        
    {/* <a href='mailto: info@bnahvac.com.au'>info@bnahvac.com.au</a> */}
    <a href = "mailto: info@bnahvac.com.au" target="_top">info@bnahvac.com.au</a>
        {/* <a href='https://www.facebook.com/sulabh.adhikari.96/' target="_blank" ><BsFacebook/></a>
        <a href='https://www.instagram.com/su.ad.21/' target="_blank" ><BsInstagram/></a> */}
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.8810802447842!2d151.01603620000003!3d-33.9441866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12beecf102ff13%3A0xdcf4bbbe78b9d14f!2s1%2F66%20Victoria%20St%2C%20Revesby%20NSW%202212!5e0!3m2!1sen!2sau!4v1660557020313!5m2!1sen!2sau"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   

    <div className="footer_copyright">
      <small>&copy; BNA HVAC Services All rights reserved</small>
    </div>
    </footer>
  );
};

export default Footer;
