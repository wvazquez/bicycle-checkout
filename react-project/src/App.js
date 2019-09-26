import React, {Component} from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from './components/Navigation';
import Bicycles from './pages/Bicycles';
import ProductPage from './pages/ProductPage';
import Checkout from './pages/Checkout';


class App extends Component {
  state = {
    cart: [],
    quantity: 0
  }

  formatMoney = (number) => number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  addToCart = (item, quantity) =>{
    console.log(this.state.cart)
    this.setState(
      prevState => ({
        cart: [...prevState.cart, item],
        quantity: prevState.quantity + quantity
      }));
  }

  render(){
    return (
      <Router>
        <Navigation cart={this.state.cart} totalQuantity={this.state.quantity}/>
        <Switch>
          <Route exact path='/' component={Bicycles}/>
          <Route exact path='/bicycles/:id' render={(props) => <ProductPage {...props} formatMoney={this.formatMoney} addToCart={this.addToCart}/>} />
          <Route exact path='/checkout' render={() => <Checkout cart={this.state.cart} formatMoney={this.formatMoney}/>}/>
        </Switch>
      </Router>
      
    );
  }
  
}

export default App;
