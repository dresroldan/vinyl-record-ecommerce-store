import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './ProductPage.css';
import { listProductDetails } from '../actions/productActions';

const ProductPage = ({ match }) => {
  const dispatch = useDispatch();

const productDetails = useSelector(state => state.productDetails)
const {loading, error, product} = productDetails

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch ,match]);



  return (
    <div className="productpage">
      <div className="productpage__container">
        <div className="productpage__productinfo">
          <img className="productpage__image" src={product.image} alt="" />

          <div className="productpage__productdetails">
            <h2 className="productpage__heading">{product.title}</h2>
            <p className="productpage__price">{product.price}</p>
            <p>{product.description}</p>
          </div>
        </div>

        <div className="productpage__options">
          {/* <button onClick={addToBasket}>Add to cart</button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
