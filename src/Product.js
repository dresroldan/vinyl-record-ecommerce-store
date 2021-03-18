// import { Title } from "@material-ui/icons";
import React from "react";
import "./Product.css";

// props in es6 allow you to deconstruct the object you pass in.
// here we are using props to deconstruct title, image, price, and rating from the product object.
// props allows reusability and efficiency in components.

function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="mardeluz-single" />

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
