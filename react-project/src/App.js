import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from './components/Navigation';
import Bicycles from './pages/Bicycles';
import BicycleItem from './components/BicycleItem';
import Checkout from './components/Checkout';


import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route exact path='/' component={Bicycles}/>
        <Route exact path='/bicycles/:id' component={BicycleItem}/>
        <Route exact path='/checkout' component={Checkout}/>
      </Switch>
    </Router>
    
  );
}

export default App;
