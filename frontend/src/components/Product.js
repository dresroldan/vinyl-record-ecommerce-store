import React from 'react';
import './Product.css';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';

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
