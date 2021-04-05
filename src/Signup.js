import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const signup = () => {
    // e.preventDefault();
    axios({
      method: "POST",
      data: {
        username: signupEmail,
        password: signupPassword,
      },
      withCredentials: true,
      url: "http://localhost:5000/signup",
    }).then((res) => console.log(res));
  };

  return (
    <div className="signup">
      <Link to="/">
        <img
          className="signup__logo"
          src="https://www.pngitem.com/pimgs/m/12-124076_vinyl-records-png-product-coalition-logo-transparent-png.png"
        />
      </Link>

      <div className="signup__container">
        <h1>Create account </h1>

        <form>
          {/* <h5>E-mail</h5> */}
          <input
            type="text"
            // value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
            placeholder="Email"
          />
          {/* <h5>Password</h5> */}
          <input
            type="password"
            // value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
            placeholder="Password"
          />
          <button onClick={signup} className="signup__signUpButton">
            Create your discM8 account
          </button>
        </form>
        <p>
          By creating an account you agree to discM8's Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads
        </p>
      </div>
    </div>
  );
}

export default Signup;
