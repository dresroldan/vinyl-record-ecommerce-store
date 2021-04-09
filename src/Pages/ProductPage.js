import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import './ProductPage.css';

const ProductPage = ({ match }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);

      setProduct(data);
    };

    fetchProduct();
  });

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
