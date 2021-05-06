import React, { useState, useEffect } from 'react';
import './SignupPage.css';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';
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

function SignupPage({ location, history }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const classes = useStyles();

  const dispatch = useDispatch();
  const userSignup = useSelector((state) => state.userRegister);
  const { error, userInfo } = userSignup;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match!');
    } else if (
      !username ||
      !password ||
      typeof username !== 'string' ||
      typeof password !== 'string'
    ) {
      setMessage('Error: Email and Password are required.');
    } else {
      dispatch(register(username, password));
    }
  };

  return (
    <div className="signup">
      {/* <Link to="/">
        <img
          className="signup__logo"
          src="https://www.pngitem.com/pimgs/m/12-124076_vinyl-records-png-product-coalition-logo-transparent-png.png"
          alt="vinylrecord-logo"
        />
      </Link> */}

      <div className="signup__container">
        <h1>Create account </h1>
        {message && <Alert severity="error">{message}</Alert>}
        {error && <Alert severity="error">{error}</Alert>}

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

          <TextField
            type="text"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            label="Confirm Password"
            required
          />

          <button onClick={submitHandler} className="signup__signUpButton">
            Create
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

export default SignupPage;
