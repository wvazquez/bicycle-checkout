import React, {Component} from 'react';

import { HashRouter as Router, Route, Switch } from "react-router-dom";

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
    console.log(item)
    console.log(quantity);
    this.setState(
      prevState => {
        

        let existingProduct = prevState.cart.find((cartItem) => cartItem.id === item.id);
        
        if(existingProduct){
          let newCart = prevState.cart.filter(cartItem => cartItem.id !== item.id );
          let newQuantity = existingProduct.quantity += quantity;
          existingProduct.quantity = newQuantity;
          return ({
            cart: [...newCart, existingProduct],
            quantity: prevState.quantity + quantity
          })
        }else{
          return ({
            cart: [...prevState.cart, item],
            quantity: prevState.quantity + quantity
          })
        }  
    });
  }
  removeFromCart = (key)=> {
    this.setState(prevState => {
      let productToRemove = prevState.cart.find((cartItem) => cartItem.id === key);
      if(productToRemove){
        let newCart = prevState.cart.filter(cartItem => cartItem.id !== key );
        return ({
          cart : [...newCart],
          quantity: prevState.quantity - productToRemove.quantity
        });

      }
    });
  }
  reduceFromCart= ()=> {

  }

  render(){
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Navigation cart={this.state.cart} totalQuantity={this.state.quantity}/>
        <Switch>
          <Route exact path='/' component={Bicycles}/>
          <Route exact path='/bicycles/:id' render={(props) => <ProductPage {...props} formatMoney={this.formatMoney} addToCart={this.addToCart}/>} />
          <Route exact path='/checkout' render={() => <Checkout cart={this.state.cart} formatMoney={this.formatMoney} addToCart={this.addToCart} removeFromCart={this.removeFromCart}/> }/>
        </Switch>
      </Router>
      
    );
  }
  
}

export default App;
