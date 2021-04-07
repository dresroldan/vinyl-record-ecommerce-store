import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import AlbumIcon from "@material-ui/icons/Album";
import { AppBar, Toolbar, Badge, IconButton } from "@material-ui/core/";
import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp";
import "./Header.css";

function Header() {
  const [{ basket }, ] = useStateValue();

  // const ctx = useContext(myContext);


  return (
    <AppBar position="sticky"  color="inherit">
      <Toolbar>
        <Link to="/">
          <AlbumIcon className="header__logo" fontSize="large" />
        </Link>

        <div className="header__nav">
          <Link to="/login">
            <div className="header__option">
              <span className="header__optionLineOne">SIGN IN</span>
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
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
