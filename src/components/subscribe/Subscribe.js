import React, { useEffect } from "react";
import "./Subscribe.css";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

const Subscribe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="subscribe">
      <div className="container subscribe" data-aos="fade-up">
        <h2>Get In Touch!</h2>
        {/* <form>
          <div className="form-control">
            <input type="text" placeholder="Enter Your Email..." />
            <button>Subscribe</button>
          </div>
        </form> */}
         {/* <form ref={form} onSubmit={sendEmail}> */}
         <form>
          <div className="form-control">
         <input type="text" name='name' placeholder='Your Full Name' required />
         <input type="email" name='email' placeholder='Your Email' required />
         <textarea name="message"rows="5" placeholder='Your Message' required></textarea>
         <button type='submit'>Send Message</button>
         </div>

        </form>
        <div className="social-icons">
          <div className="social-icon">
            <TiSocialGooglePlus />
          </div>
          <div className="social-icon">
            <FaFacebookF />
          </div>
          <div className="social-icon">
            <FaTwitter />
          </div>
          <div className="social-icon">
            <FaInstagram />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
