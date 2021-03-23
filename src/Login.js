import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    //   prevent the page from refreshing
    // console.log(email)
    e.preventDefault();
  };

  const register = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://www.pngitem.com/pimgs/m/12-124076_vinyl-records-png-product-coalition-logo-transparent-png.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign in </h1>

        <form>
          {/* <h5>E-mail</h5> */}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          {/* <h5>Password</h5> */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign in
          </button>
        </form>
        <p>
          By signing-in you agree to discM8's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
        </p>

        <button onClick={register} className="login__signUpButton">
          Create your discM8 account
        </button>
      </div>
    </div>
  );
}

export default Login;
