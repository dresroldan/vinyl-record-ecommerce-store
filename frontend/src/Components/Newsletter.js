import React from 'react';
import './Newsletter.css';

function Newsletter() {
  return (
    <div className="newsletter">
      <h2>Join our Newsletter</h2>
      <p>New releases, exclusives, features, films and more.</p>
      <form className="newsletter__form" action="">
        <input type="email" placeholder="Enter your email" />
        <button>SIGN UP</button>
      </form>

      {/* <form  className="flex-form">
      <label for="from">
        <i className="ion-location"></i>
      </label>
      <input type="search" placeholder="Where do you want to go?">
      <input type="submit" value="Search">
    </form> */}
    </div>
  );
}

export default Newsletter;
