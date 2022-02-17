import React, { useEffect } from 'react';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import './Homepage.css';

const HomePage = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <span>Features</span>
          <h2>Our favorite new releases this week </h2>
        </div>
      </section>

      <section className="featured-products">
        <div className="product-grid">
          {products.map((product) => (
            <Product
              key={product._id}
              _id={product._id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </section>

      <div className="newsletter"></div>
    </>
  );
};

export default HomePage;
