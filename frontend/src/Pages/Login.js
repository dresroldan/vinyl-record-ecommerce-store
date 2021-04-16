import React, { useState, useEffect } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { login } from '../actions/userActions';
import { useSelector,useDispatch } from 'react-redux';


function Login({location, history} ) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split('=')[1] : '/'
 
  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(username, password))
  };

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
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Email"
          />
          {/* <h5>Password</h5> */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
          <button
            type="submit"
            onClick={submitHandler}
            className="login__signInButton"
          >
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
