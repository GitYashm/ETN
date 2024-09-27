import React from "react";
import logo from "../../Navbar/—Pngtree—music notes- musical design_8660682.png";
import Whastapp from "../whatsapp_icon.png";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="Footer-main">
        <div className="Shopper-icon">
          <img src={logo} alt="" />
          <p>Music...</p>
        </div>
        <div className="li-items">
          <ul>
            <div className="ul-div">
              <li>Company</li>
              <li>Products</li>
              <li>Office</li>
              <li>About</li>
              <li>Contact</li>
            </div>
          </ul>
        </div>

        <div className="icons">
          <img src={Whastapp} alt="" />
          <img src={Whastapp} alt="" />
          <img src={Whastapp} alt="" />
          <p>Copyright &copy; 2024 - All Right Reserved</p>
        </div>

        <hr />
      </div>
    </footer>
  );
};
export default Footer;
