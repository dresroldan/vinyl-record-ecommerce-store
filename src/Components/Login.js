import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  // const [data, setData] = useState(null);

  const login = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      data: {
        username: loginEmail,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:5000/login",
    }).then((res) => {
      if (res.data === "success") {
        window.location.href = "/";
      }

      console.log("No user exists!");
    });
  };

  // const getUser = (e) => {
  //   e.preventDefault();
  //   axios({
  //     method: "GET",
  //     withCredentials: true,
  //     url: "http://localhost:5000/user",
  //   }).then((res) => {
  //     setData(res.data);
  //     console.log(res.data);
  //   });
  // };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://www.pngitem.com/pimgs/m/12-124076_vinyl-records-png-product-coalition-logo-transparent-png.png"
          alt="vinylrecord-logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign in </h1>

        <form>
          {/* <h5>E-mail</h5> */}
          <input
            type="text"
            // value={email}
            onChange={(e) => setLoginEmail(e.target.value)}
            placeholder="Email"
          />
          {/* <h5>Password</h5> */}
          <input
            type="password"
            // value={password}
            onChange={(e) => setLoginPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit" onClick={login} className="login__signInButton">
            Sign in
          </button>
          {/* <button
            type="submit"
            onClick={getUser}
            className="login__signInButton"
          >
            get user
          </button> */}

          {/* {data ? <h1>Welcome back {data.username}</h1> : null} */}
        </form>
        <p>
          By signing-in you agree to discM8's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
        </p>

        <Link to="/signup" className="login__signUpButton">
          Create your discM8 account
        </Link>
      </div>
    </div>
  );
}

export default Login;
