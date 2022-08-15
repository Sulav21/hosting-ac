import React, { useEffect } from "react";
import "./Download.css";
import { FaApple, FaWindows } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import { IconContext } from "react-icons";
import actron from '../../assets/actron.jpg'
import daikin from '../../assets/daikin.jpg'
import fujitsu from '../../assets/fujitsu.jpg'
import mitsubishi from '../../assets/mitsubishi.jpg'
import mitsubishi1 from '../../assets/mitsubihis-heavy.jpg'
import rinnai from '../../assets/rinnai.jpg'


import AOS from "aos";
import "aos/dist/aos.css";

const Download = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="download">
      <div className="container download" data-aos="fade-up">
        <h2>Specialist Dealer & Partner
Brands</h2>
        <p className="u-text-small">
          We work with.
        </p>
        <IconContext.Provider value={{ size: "25" }}>
          <div className="download-icons">
            {/* <div className="download-icon">
              <FaApple /> <p>ios</p>
            </div>
            <div className="download-icon">
              <GrAndroid /> <p>Android</p>
            </div>
            <div className="download-icon">
              <FaWindows /> <p>Windows</p>
            </div> */}
            <div className="download-icon"><img src={daikin} alt=''></img></div>
            <div className="download-icon"><img src={actron} alt=''></img></div>
            <div className="download-icon"><img src={fujitsu} alt=''></img></div>
          </div>
          <div className="download-icons">
    
            <div className="download-icon"><img src={mitsubishi} alt=''></img></div>
            <div className="download-icon"><img src={rinnai} alt=''></img></div>
            <div className="download-icon"><img src={mitsubishi1} alt=''></img></div>
          </div>
        </IconContext.Provider>
      </div>
    </section>
  );
};

export default Download;
