import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Header />
        <Switch>
          {/* checkout route */}
          <Route path="/checkout">
            <Checkout />
          </Route>
          {/* home page route */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
