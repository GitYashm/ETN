import React from "react";
import "./CSS/about.css";
import aboutImage from "./images/About/harmon_kardon_speakers_ci-1716979140972-removebg-preview.png";
const About = () => {
  return (
    <div className="about">
      <div className="left-about">
        <img src={aboutImage} alt="" />
      </div>
      <div className="right-about">
        <h1>ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          architecto sint dolores culpa blanditiis autem excepturi facere!
          Incidunt quos, molestiae, recusandae numquam, voluptate totam iusto
          dolores explicabo et laboriosam repellendus?
        </p>
      </div>
    </div>
  );
};
export default About;
