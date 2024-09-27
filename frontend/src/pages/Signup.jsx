import React, { useState } from "react";
import { Link } from "react-router-dom";
import usericon from "./images/loginSignup/USerlogin.png";
import "./CSS/signup.css";
const Signup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirm, setconfirm] = useState("");
  const [error, seterror] = useState("");
  const [showPassword, setShowPassword] = useState(false); // For toggling password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // For confirm password

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handlesubmit = () => {
    let formerror = {};
    if (!email) {
      formerror.email = "email is required";
    }

    if (!password) {
      formerror.password = "Create Password is required";
    } else if (password.length < 8) {
      formerror.password = "Please create password at least 8 character";
    }
    if (!confirm) {
      formerror.confirm = "Please re-type password";
    } else if (confirm !== password) {
      formerror.confirm = "password not matched please check";
    } else {
      formerror.confirm = "Succefully matched";
    }
    seterror(formerror);
    return Object.keys(formerror).length === 0;
  };
  const creatid = (e) => {
    e.preventDefault();
    if (handlesubmit()) {
      console.log("Id create Successfully");
    }
  };
  return (
    <div className="signup">
      <div className="signup-2">
        <div className="signup-userIcon-heading">
          <img src={usericon} alt="" />
          <h2>Signup</h2>
        </div>
        <div className="signup-form">
          <form onSubmit={creatid}>
            <input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            {error.email && <p className="error">{error.email}</p>}
            <div className="passwordshow">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
              <p onClick={togglePasswordVisibility}>
                {showPassword ? "Hide" : "Show"}
              </p>
            </div>
            {error.password && <p className="error">{error.password}</p>}
            <div className="confrimpasswordshow">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="confirm password"
                value={confirm}
                onChange={(e) => setconfirm(e.target.value)}
              />
              <p onClick={toggleConfirmPasswordVisibility}>
                {showConfirmPassword ? "Hide" : "Show"}
              </p>
            </div>

            {error.confirm && <p className="error">{error.confirm}</p>}

            <div className="signupbtn">
              <button>signup</button>
            </div>
            <div className="create-account">
              <p>
                Already have an account?
                <a>
                  <Link to="/login"> Login</Link>
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
