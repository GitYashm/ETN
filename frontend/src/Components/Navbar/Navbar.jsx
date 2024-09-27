import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./—Pngtree—music notes- musical design_8660682.png";
import cart from "../assets/cart_icon.png";
import hamburger from "./8600360.png";

const Navbar = ({ cartCount }) => {
  let [active, setActive] = useState("Home");
  const myref = useRef();
  const dropdown = (e) => {
    myref.current.classList.toggle("toggle-navbar-visible");
    e.target.classList.toggle("rotate");
  };
  return (
    <>
      <div className="Navbar">
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>Music...</p>
        </div>
        <img
          className="hamburger-icon"
          onClick={dropdown}
          src={hamburger}
          alt=""
        />
        <ul ref={myref} className="list">
          <li
            onClick={() => {
              setActive("Home");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/">
              Home
            </Link>

            {active === "Home" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setActive("Earbuds");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/earbuds">
              Earbuds
            </Link>
            {active === "Earbuds" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setActive("Neckband");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/neckband">
              Neckband
            </Link>
            {active === "Neckband" ? <hr /> : <></>}
          </li>

          <li
            onClick={() => {
              setActive("Tower");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/tower">
              Tower
            </Link>
            {active === "Tower" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setActive("About");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/about">
              About
            </Link>
            {active === "About" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setActive("Contact");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/contact">
              Contact
            </Link>
            {active === "Contact" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="Navbar-cart">
          <Link style={{ textDecoration: "none" }} to="/login">
            <button className="loginbtn">Login</button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/Cart">
            <img src={cart} alt="" />
          </Link>
          <div className="notification">
            <p className="cart-notification">{cartCount}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
