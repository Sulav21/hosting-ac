import React, { useEffect } from "react";
import "./Features.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import phoneFeatures from "../../assets/phone-features.jpg";
import Feature from "./Feature";
import { FeatureList } from "./data";

import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="about-us">
      <div className="container features">
        <div className="title" data-aos="fade-up">
          <BsFillBookmarkStarFill color="#0a1930" size={30} />
          <h2>Who Are We?</h2>
          <p className="u-text-small">
          BNA HVAC is an Australian owned and run air conditioning company catering to air conditioning needs for both domestic and commercial customers throughout Sydney area. We specialize in domestic and commercial air conditioning solutions to any situation and budget. 

          </p>
        </div>
        <div className="features-content">
          <div className="features-left" data-aos="fade-right">
            <img src={phoneFeatures} alt="phone" />
          </div>
          <div className="features-right" data-aos="fade-left">
            {FeatureList.map((feature) => (
              <Feature
                key={feature.id}
                icon={feature.icon}
                heading={feature.heading}
                text={feature.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
