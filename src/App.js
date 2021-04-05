import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Signup from "./Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductPage from "./ProductPage";

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
          {/* login route */}

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          {/* checkout route */}
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/product">
            <Header />
            <ProductPage />
          </Route>

          {/* home page route */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
