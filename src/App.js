import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import{
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
//pages
import MainPage from './pages/index';
//chapter1
import Chapter1 from './pages/chapter1/chapter1';
import Hallway from './pages/chapter1/hallway';
import Bedroom from './pages/chapter1/bedroom';
import BMOGame from './pages/chapter1/bmoGame';



import errorPage from './pages/404';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage}></Route>
        <Route exact path="/chapter1Intro" component={Chapter1}></Route>
        <Route exact path="/chapter1part1Hallway" component={Hallway}></Route>
        <Route exact path="/chapter1part2bedroom" component={Bedroom}></Route>
        <Route exact path="/chapter1part3BMO1" component={BMOGame}></Route>
        {/* <Route exact path="/chapter2" component={Chapter1}></Route> */}
        <Route exact path="/404" component={errorPage}></Route>
        <Redirect to="/404"></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
