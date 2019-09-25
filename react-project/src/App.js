import React, {Component} from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from './components/Navigation';
import Bicycles from './pages/Bicycles';
import ProductPage from './pages/ProductPage';
import Checkout from './components/Checkout';
import SideCart from './components/SideCart';


class App extends Component {
  state = {
    cart: [],
  }

  addToCart = (item) =>{
    this.setState(
      prevState => ({cart: [...prevState.cart, item]}));
  }

  render(){
    return (
      <Router>
        <Navigation cart={this.state.cart} totalQuantity={this.state.cart.length}/>
        <Switch>
          <Route exact path='/' component={Bicycles}/>
          <Route exact path='/bicycles/:id' render={(props) => <ProductPage {...props} addToCart={this.addToCart}/>} />
          <Route exact path='/checkout' component={Checkout}/>
        </Switch>
        <SideCart/>
      </Router>
      
    );
  }
  
}

export default App;
