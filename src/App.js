import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import AboutPage from './pages/AboutPage/AboutPage';
import Products from './pages/Products/Products';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProductPage from './pages/ProductPage/ProductPage';
import Checkout from './pages/Checkout/Checkout';
import Header from './components/Header/Header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Switch >
          <Route  exact path="/" component={ LandingPage }/>
          <Route  exact path="/about" component={ AboutPage }/>
          <Route  exact path="/products" component={ Products }/>
          <Route  exact path="/login" component={ LoginPage }/>
          <Route  exact path="/register" component={ RegisterPage }/>
          <Route  exact path="/product" component={ ProductPage }/>
          <Route  exact path="/checkout" component={ Checkout  }/>
        </Switch>
      </div>
    );
  }
}

export default App;
