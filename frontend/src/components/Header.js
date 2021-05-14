import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AlbumIcon from '@material-ui/icons/Album';
import { AppBar, Toolbar, Badge, IconButton } from '@material-ui/core/';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import './Header.css';
import { logout } from '../actions/userActions';

function Header() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { cartItems } = cart;

  console.log(cartItems);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <AppBar elevation={0} position="static" color="inherit">
        <Toolbar>
          <Link to="/">
            <AlbumIcon className="header__logo" fontSize="large" />
          </Link>

          {userInfo ? (
            <div className="header__nav">
              <Link to="/">
                <div className="header__option">
                  <span
                    onClick={logoutHandler}
                    className="header__optionLineOne"
                  >
                    LOG OUT
                  </span>
                </div>
              </Link>

              <Link to="/checkout">
                <IconButton aria-label="Show cart items" color="inherit">
                  <Badge
                    badgeContent={cartItems?.length}
                    fontSize="small"
                    color="secondary"
                  >
                    <ShoppingCartSharpIcon fontSize="small" />
                  </Badge>
                </IconButton>
              </Link>
            </div>
          ) : (
            <div className="header__nav">
              <Link to="/login">
                <div className="header__option">
                  <span className="header__optionLineOne">SIGN IN</span>
                </div>
              </Link>

              <Link to="/checkout">
                <IconButton aria-label="Show cart items" color="inherit">
                  <Badge
                    badgeContent={cartItems?.length}
                    fontSize="small"
                    color="secondary"
                  >
                    <ShoppingCartSharpIcon fontSize="small" />
                  </Badge>
                </IconButton>
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;
