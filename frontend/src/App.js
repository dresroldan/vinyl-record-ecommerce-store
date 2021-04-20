import './App.css';
// import Header from './components/Header';
import HomePage from './pages/HomePage';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Context from './Context';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        {/* <Header /> */}
        <Switch>
          <Route path="/signup" component={Signup}></Route>

          <Route path="/login" component={Login}></Route>

          <Route path="/checkout" component={Checkout}></Route>

          <Route path="/product/:id" component={ProductPage}></Route>

          <Route path="/" component={HomePage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
