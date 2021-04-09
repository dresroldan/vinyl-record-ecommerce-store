import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import Checkout from './Pages/Checkout';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Context from './Context';
import ProductPage from './Pages/ProductPage';

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
              <Checkout />
            </Route>

            {/* home page route */}
            <Route path="/" component={HomePage} exact></Route>
            <Route path="/product/:id" component={ProductPage}></Route>
          </Switch>
        </div>
      </Context>
    </Router>
  );
}

export default App;
