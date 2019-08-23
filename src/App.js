import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Header from './components/Header/Header';

function App() {
  return (
      <div className="App">
        <Header/>
        <Switch >
          <Route  exact path="/" component={ LandingPage }/>
        </Switch>
      </div>
  );
}

export default App;
