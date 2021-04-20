// import { Title } from "@material-ui/icons";
import React from 'react';
import './Product.css';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';

// props in es6 allow you to deconstruct the object you pass in.
// here we are using props to deconstruct title, image, price, and rating from the product object.
// props allows reusability and efficiency in components.

function Product({ _id, image, title, price }) {
  const productId = _id;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(productId));
  };

  return (
    <div className="product">
      <Link to={`/product/${_id}`}>
        <img src={image} alt="mardeluz-single" />
      </Link>

      <div className="product__info">
        <Link href={`/product/${_id}`}>
          <p>{title}</p>
        </Link>

        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <button onClick={addToCartHandler}>Add to cart</button>
      </div>
    </div>
  );
}

export default Product;
