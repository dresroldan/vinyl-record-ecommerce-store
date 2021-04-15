import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './ProductPage.css';
import { listProductDetails } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';

const ProductPage = ({ match }) => {
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id));
  };

  return (
    <div className="productpage">
      <div className="productpage__container">
        <div className="productpage__productinfo">
          <img className="productpage__image" src={product.image} alt="" />

          <div className="productpage__productdetails">
            <h2 className="productpage__heading">{product.title}</h2>
            <p>{product.description}</p>
            <p className="productpage__price">{product.price}</p>
            <p className="productpage__stock">
              {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
            </p>
          </div>
        </div>

        <div className="productpage__options">
          <button onClick={addToCartHandler}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
