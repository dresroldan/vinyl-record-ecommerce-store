import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './HomePage.css';
import Product from '../components/Product';
import { myContext } from '../Context';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { listProducts } from '../actions/productActions';

function HomePage() {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__image">
          <h1>Discover new Music</h1>
          {/* <img className="home__image" src={data.heroImage} alt="record-shop" ></img> */}
        </div>

        <div className="home__productscontainer">
          <div className="home__sectionheading">
            <h3>Shop</h3>
            <p>Collect our newest releases</p>
          </div>
          {loading ? (
            <h2>Loading...</h2>
          ) : error ? (
            <h3>{error}</h3>
          ) : (
            <div className="home__product">
              {products.map((product) => (
                <Product
                  id={product._id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                />
              ))}
            </div>
          )}
        </div>
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
