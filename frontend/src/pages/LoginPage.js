import React, { useState, useEffect } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';
import { login } from '../actions/userActions';
import { useSelector, useDispatch } from 'react-redux';
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '30ch',
    },
  },
}));

function LoginPage({ location, history }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const classes = useStyles();

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const redirect = location.search ? location.search.split('=')[1] : '/';
  console.log(redirect);

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      !username ||
      !password ||
      typeof username !== 'string' ||
      typeof password !== 'string'
    ) {
      setMessage('Error: Email and Password are required.');
    } else {
      dispatch(login(username, password));
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1>Sign In </h1>
        {message && <Alert severity="error">{message}</Alert>}

        <form className={classes.root}>
          <TextField
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            label="Email"
            required
          />

          <TextField
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            required
          />

          <button
            type="submit"
            onClick={submitHandler}
            className="login__signInButton"
          >
            Sign in
          </button>

          {/* {data ? <h1>Welcome back {data.username}</h1> : null} */}
        </form>
        <p>
          By signing-in you agree to discM8's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
        </p>

        <Link to="/signup" className="login__registerButton">
          Create your account
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
