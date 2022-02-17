import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';
import { Badge, IconButton } from '@material-ui/core/';
import AlbumIcon from '@material-ui/icons/Album';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import './Header.css';

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Link to="/">
        <div className="logo">
          <AlbumIcon fontSize="large" />
        </div>
      </Link>

      {/* Ternarary operator used to check if user is logged in */}
      {/* If user is logged in the header will display LOG OUT otherwise the header will display SIGN IN*/}

      {userInfo ? (
        <div className="nav">
          <Link to="/">
            <div className="nav-item">
              <span onClick={logoutHandler} className="nav-link">
                LOG OUT
              </span>
            </div>
          </Link>

          <Link to="/cart">
            <IconButton>
              <Badge
                badgeContent={cartItems?.length}
                fontSize="small"
                color="secondary"
              >
                <ShoppingCartSharpIcon />
              </Badge>
            </IconButton>
          </Link>
        </div>
      ) : (
        <div className="nav">
          <Link to="/login">
            <div className="nav-item">
              <span className="nav-link">SIGN IN</span>
            </div>
          </Link>

          <Link to="/cart">
            <IconButton>
              <Badge
                badgeContent={cartItems?.length}
                fontSize="small"
                color="secondary"
              >
                <ShoppingCartSharpIcon />
              </Badge>
            </IconButton>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
