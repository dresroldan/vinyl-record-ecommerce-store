import React, { useContext } from "react";
import "./Home.css";
import Product from "./Product";
import data from "./data.js";
import { myContext } from "./Context";
import Newsletter from "./Newsletter";

function Home() {
  const ctx = useContext(myContext);
  console.log(ctx);

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__image">
          <img className="home__image" src={data.heroImage} alt="record-shop" />
        </div>

        <div className="home__productscontainer">
          <div className="home__sectionheading">
            <h3>Shop</h3>
            <p>Collect our newest releases</p>
          </div>

          <div className="home__product">
            {data.products.map((product) => (
              <Product
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                rating={product.rating}
              />
            ))}
          </div>
        </div>
        <Newsletter />
      </div>
    </div>
  );
}

export default Home;
