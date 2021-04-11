import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AlbumIcon from '@material-ui/icons/Album';
import { AppBar, Toolbar, Badge, IconButton } from '@material-ui/core/';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import './Header.css';

function Header() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  console.log(cartItems);

  return (
    <AppBar elevation={0} position="sticky" color="inherit">
      <Toolbar>
        <Link to="/">
          <AlbumIcon className="header__logo" fontSize="large" />
        </Link>

        {/* {ctx ? ( */}
        {/* <div className="header__nav">
          <Link onClick={logout} to="/">
          <div className="header__option">
            <span className="header__optionLineOne">LOGOUT</span>
          </div>
          </Link>

          <Link to="/checkout">
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge
                badgeContent={basket?.length}
                fontSize="small"
                color="secondary"
              >
                <ShoppingCartSharpIcon fontSize="small" />
              </Badge>
            </IconButton>
          </Link>
        </div> */}
        {/* ) : ( */}
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
        {/* )} */}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
