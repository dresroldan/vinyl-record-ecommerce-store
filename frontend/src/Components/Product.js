// import { Title } from "@material-ui/icons";
import React from 'react';
import './Product.css';

import { Link } from 'react-router-dom';

// props in es6 allow you to deconstruct the object you pass in.
// here we are using props to deconstruct title, image, price, and rating from the product object.
// props allows reusability and efficiency in components.

function Product({ id, title, image, price, description }) {


  return (
    <div className="product">
      <Link to={`/product/${id}`}>
        <img src={image} alt="mardeluz-single" />
      </Link>

      <div className="product__info">
        <Link href={`/product/${id}`}>
          <p>{title}</p>
        </Link>

        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        

        {/* <button onClick={addToBasket}>Add to cart</button> */}
      </div>
    </div>
  );
}

export default Product;
