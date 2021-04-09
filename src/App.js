import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import Checkout from './Pages/Checkout';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Context from './Context';

function App() {
  return (
    // BEM
    <Router>
      <Context>
        <div className="app">
          <Header />
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
            <Route path="/" component={Home} exact></Route>
          </Switch>
        </div>
      </Context>
    </Router>
  );
}

export default App;
