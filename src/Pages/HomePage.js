import React, { useContext } from 'react';
import './HomePage.css';
import Product from '../Components/Product';
import products from '../data.js';
import { myContext } from '../Context';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';

function Home() {
  const ctx = useContext(myContext);

  console.log(ctx);

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

          <div className="home__product">
            {products.map((product) => (
              <Product
                id={product._id}
                title={product.title}
                price={product.price}
                image={product.image}
                rating={product.rating}
              />
            ))}
          </div>
        </div>
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
