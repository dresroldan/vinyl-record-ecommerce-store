import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images.unsplash.com/photo-1541667558913-5510fb3c7bd9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="record-shop"
        />
      <div className="home__row">
        <Product />
        <Product />
        <Product />
      </div>
      <div className="home__row">
        <Product />
        <Product />
        <Product />
      </div>
      <div className="home__row">
        <Product />
        <Product />
        <Product />
      </div>
      </div>
    </div>
  );
}

export default Home;
