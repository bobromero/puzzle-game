import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

//pages
import MainPage from './pages/index';
import errorPage from './pages/404';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage}></Route>
        <Route exact path="/404" component={errorPage}></Route>
        <Redirect to="/404"></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
