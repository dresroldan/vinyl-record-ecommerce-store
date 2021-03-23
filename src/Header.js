import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import TextField from '@material-ui/core/TextField';

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://www.pngitem.com/pimgs/m/260-2609838_vinyl-png-transparent-image-transparent-background-vinyl-record.png"
          alt="record-store"
        />


      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" placeholder="Search artists, albums, and more..."/>
        <SearchIcon className="header__searchIcon" />
        {/* <TextField  variant="outlined" className="header__searchInput" type="text" label="Search artists, albums, and more..."/> */}
      </div>

      <div className="header__nav">
        <Link to="/login">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Collection</span>
        </div>
      </div>

      <Link to="/checkout">
        <div className="header__optionBasket"></div>
        <AddShoppingCartIcon />
        <span className="header__optionLineTwo header__basketCount">
          {/* question mark is optional chaining -- if you don't have correct value or basket is undefined it will handle error*/}
          {basket?.length}
        </span>
      </Link>
    </div>
  );
}

export default Header;
