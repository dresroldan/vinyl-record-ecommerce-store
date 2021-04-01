import React from "react";
import "./Home.css";
import Product from "./Product";
import data from "./data.js";

function Home() {
  return (
    <div className="home">
      <div className="home__container">

<div className="home__image">

        <img className="home__image" src={data.heroImage} alt="record-shop" />
</div>



        <div className="home__row">
          {data.products.map((product) => (
            <Product
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              rating={product.rating}
            />
          ))}
          ;
        </div>
        ;
      </div>
    </div>
  );
}

export default Home;
