import React from "react";
import Boat from "../assets/Earbuds/513uVTtRo-L-removebg-preview.png";
import "./HomePage.css";
import video from "../assets/video/videoplayback (2).mp4";
const HomePage = () => {
  return (
    <>
      <div className="Homepage">
        <video autoPlay muted>
          <source src={video} type="video/mp4" />
        </video>

        <div className="left-Homepage">
          <div className="Homepage-para">
            <p>NEW ARRIVALS ONLY</p>
          </div>
          <div className="Homepage-heading">
            <h1>
              Where
              <br /> words fail, <br /> music speaks.
            </h1>
          </div>
          <button>Latest Collection</button>
        </div>
        <div className="right-Homepage">
          <img src={Boat} alt="" />
        </div>
      </div>
    </>
  );
};
export default HomePage;
