import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import{
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
//pages
import MainPage from './pages/index';
import Chapter1 from './pages/chapter1';
import errorPage from './pages/404';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage}></Route>
        <Route exact path="/chapter1Intro" component={Chapter1}></Route>
        <Route exact path="/404" component={errorPage}></Route>
        <Redirect to="/404"></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
