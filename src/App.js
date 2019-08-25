import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import AboutPage from './pages/AboutPage/AboutPage';
import Products from './pages/Products/Products';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Header from './components/Header/Header';

function App() {
  return (
      <div className="App">
        <Header/>
        <Switch >
          <Route  exact path="/" component={ LandingPage }/>
          <Route  exact path="/about" component={ AboutPage }/>
          <Route  exact path="/products" component={ Products }/>
          <Route  exact path="/login" component={ LoginPage }/>
          <Route  exact path="/register" component={ RegisterPage }/>
        </Switch>
      </div>
  );
}

export default App;
