import React from "react";
import "./CSS/contact.css";
import address from "./images/contact/address-removebg-preview.png";
import email from "./images/contact/email.png";
import call from "./images/contact/call.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="left-contact">
        <div className="Phone">
          <img src={call} alt="" />
          <p>7302099889</p>
        </div>
        <div className="email">
          <img src={email} alt="" />
          <p>ym.mishra.9889@gmail.com</p>
        </div>
        <div className="address">
          <img src={address} alt="" />
          <p>
            2/42 Begum Bagh, Aligarh <br />
            Noida Sector 34
          </p>
        </div>
        <div className="icons">
          <img src="" alt="" />
        </div>
      </div>
      <div className="right-contact">
        <h1>Contact</h1>
        <form action="/" typeof="submit">
          <input type="text" placeholder="Enter Your Name" name="name" />
          <input type="text" placeholder="Enter Your Email" name="email" />
          <textarea name="" id="" placeholder="Enter your message"></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
