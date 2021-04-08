import React from "react";
import "./Newsletter.css";


function Newsletter() {
  return <div className="newsletter">

<h2>Join our Newsletter</h2>
<p>New releases, exclusives, features, films and more.</p>
<form action="http://google.com">
<input type="email" placeholder="Enter your email"/>
<button>SIGN UP</button>
</form>

  </div>;
}

export default Newsletter;
