import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>Mar de Luz - All On U (12")</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
        </div>

        <img
          src="https://i1.sndcdn.com/artworks-98c8BLUm7CIz7vxF-DSWXgQ-t500x500.jpg"
          alt="mardeluz-single"
        />
      </div>
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
