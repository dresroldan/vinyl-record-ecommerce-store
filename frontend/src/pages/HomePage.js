import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './HomePage.css';
import Product from '../components/Product';
import Newsletter from '../components/Newsletter';
import { listProducts } from '../actions/productActions';

function HomePage() {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="home">
      <div className="home__image">
        <div className="home__imagetext">
          <span>Features</span>
          <h1>Our favorite new releases this week </h1>
        </div>
      </div>
      <div className="home__productscontainer">
        <div className="home__sectionheading">
          <h3>Shop</h3>
          <p>Collect our newest releases</p>
        </div>
        <div className="home__product">
          {products.map((product) => (
            <Product
              _id={product._id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
      <Newsletter />
    </div>
  );
}

export default HomePage;
