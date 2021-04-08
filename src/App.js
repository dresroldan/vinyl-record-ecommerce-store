import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Context from "./Context";

function App() {
  return (
    // BEM
    <Router>
      <Context>
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
{/* 
            <Route path="/product">
              <Header />
              <ProductPage />
            </Route> */}

            {/* home page route */}
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        </div>
      </Context>
    </Router>
  );
}

export default App;
