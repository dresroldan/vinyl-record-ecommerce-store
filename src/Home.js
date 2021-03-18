import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images.unsplash.com/photo-1541667558913-5510fb3c7bd9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="record-shop"
        />
        <div className="home__row">
          <Product
            id="2563784"
            title="The Soundwork-Shoppers – Discomusic (LP, RE + CD)"
            price={19.99}
            image="https://furtherrecords.com/wp-content/uploads/2021/03/R-10043100-1490626390-1896.jpeg.jpg"
            rating={5}
          />
          <Product
            id="2565784"
            title="Colin Curtis – Jazz Dance Fusion Volume 2 (LP, Comp)"
            price={19.99}
            image="https://furtherrecords.com/wp-content/uploads/2021/03/R-16293751-1606728693-5405.jpeg.jpg"
            rating={5}
          />
          <Product
            id="2523784"
            title="S-Tone Inc. With Toco & Friends (91) – Onda (LP, Album)"
            price={19.99}
            image="https://furtherrecords.com/wp-content/uploads/2021/03/R-11457810-1516669109-9012.jpeg.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="2583784"
            title="Various – Shouts Vol. 2 (12″)"
            price={19.99}
            image="https://furtherrecords.com/wp-content/uploads/2021/03/R-15049220-1586290876-5199.jpeg.jpg"
            rating={5}
          />
          <Product
            id="2568784"
            title="Mar de Luz - All On U (12)"
            price={19.99}
            image="https://i1.sndcdn.com/artworks-98c8BLUm7CIz7vxF-DSWXgQ-t500x500.jpg"
            rating={5}
          />

          <Product
            id="3563784"
            title="Tenorio Jr. – Embalo (LP, Shape, RE)"
            price={19.99}
            image="https://furtherrecords.com/wp-content/uploads/2021/03/R-10026233-1536320093-4883.jpeg.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="2263784"
            title="Béliz – Mémoires (LP, Album)"
            price={19.99}
            image="https://furtherrecords.com/wp-content/uploads/2021/03/R-15693500-1596034993-7924.jpeg.jpg"
            rating={5}
          />
          <Product
            id="2569784"
            title="Tommy Guerrero – Soul Food Taqueria (2xLP, Dlx, Ltd, RE, RM, 180)"
            price={19.99}
            image="https://furtherrecords.com/wp-content/uploads/2021/03/R-11215525-1563382895-2058.jpeg.jpg"
            rating={5}
          />
          <Product
            id="2563484"
            title="CW/A – Ringleader EP (12″, EP)"
            price={19.99}
            image="https://furtherrecords.com/wp-content/uploads/2021/03/R-9587297-1483358544-3710.jpeg-2.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
