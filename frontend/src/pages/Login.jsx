import React, { useState } from "react";
import usericon from "./images/loginSignup/USerlogin.png";
import "./CSS/loginSignup.css";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const validationForm = () => {
    let formError = {};
    if (!email) {
      formError.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formError.email = "Email address is invalid.";
    }
    if (!password) {
      formError.password = "password is required";
    } else if (password.length < 8) {
      formError.password = "Password must be at least 8 character";
    }
    seterror(formError);
    return Object.keys(formError).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validationForm()) {
      console.log("Form Submited");
    }
  };

  return (
    <div className="login">
      <div className="login-2">
        <div className="login-userIcon-heading">
          <img src={usericon} alt="" />
          <h2>Login</h2>
        </div>
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            {error.email && <p className="error">{error.email}</p>}
            <input
              type="text"
              placeholder="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            {error.password && <p className="error">{error.password}</p>}
            <div className="loginbtn">
              <button>login</button>
            </div>
          </form>
          <div className="create-account">
            <p>
              Don't have an account?
              <a>
                <Link to="/login/signup"> Signup</Link>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
