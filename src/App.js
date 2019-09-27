import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import AboutPage from './pages/AboutPage/AboutPage';
import Products from './pages/Products/Products';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProductPage from './pages/ProductPage/ProductPage';
import OrdersPage from './pages/OrdersPage/OrdersPage';
import ChangePassword from './pages/ChangePassword/ChangePassword';
import Checkout from './pages/Checkout/Checkout';
import Header from './components/Header/Header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route  exact path="/" component={ LandingPage }/>
          <Route  exact path="/about" component={ AboutPage }/>
          <Route  exact path="/products" component={ Products }/>
          <Route  exact strict path="/product" component={ ProductPage }/>
          <Route  exact path="/login" component={ LoginPage }/>
          <Route  exact path="/register" component={ RegisterPage }/>
          <Route  exact path="/checkout" component={ Checkout  }/>
          <Route  exact path="/orders" component={ OrdersPage }/>
          <Route  exact path="/changepassword" component={ ChangePassword }/>
        </Switch>
      </div>
    );
  }
}

export default App;
