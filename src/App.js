import React, { Component } from 'react';

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import Navigation from './components/Navigation';
import Bicycles from './pages/Bicycles';
import ProductPage from './pages/ProductPage';
import Checkout from './pages/Checkout';


class App extends Component {
  state = {
    cart: [],
    quantity: 0,
    isAlertOpen: false
  }

  formatMoney = (number) => number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  addToCart = (item, quantity) => {
    console.log(this.state.cart);
    this.setState(
      prevState => {


        let existingProduct = prevState.cart.find((cartItem) => cartItem.id === item.id);

        if (existingProduct) {
          let newCart = prevState.cart.filter(cartItem => cartItem.id !== item.id);
          let newQuantity = existingProduct.quantity += quantity;
          existingProduct.quantity = newQuantity;
          return ({
            cart: [...newCart, existingProduct],
            quantity: prevState.quantity + quantity
          })
        } else {
          return ({
            cart: [...prevState.cart, item],
            quantity: prevState.quantity + quantity
          })
        }
      });
  }
  removeFromCart = (key) => {

    let productToRemove = this.state.cart.find((cartItem) => cartItem.id === key);
    let newCart = this.state.cart.filter(cartItem => cartItem.id !== key);

    if (productToRemove) {
      console.log()
      if ((newCart.find((cartItem) => cartItem.product_type === 'bike') || (this.state.cart.length === 1 && productToRemove.product_type === 'bike'))) {
        this.setState(prevState =>
          ({
            cart: [...newCart],
            quantity: prevState.quantity - productToRemove.quantity
          }))
      } else {
        this.toggleAlert();
      }
    }

  }

  toggleAlert = () => {
    this.setState(prevState => ({ isAlertOpen: !prevState.isAlertOpen }));
  }
  renderWarning = () => {
    return (
      <Dialog
        open={this.state.isAlertOpen}
        onClose={this.toggleAlert}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Check our other bike selection?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Add-on's must contain a bicycle selected. Please maintain a rental bicycle in your cart or remove the add-ons before removing the bicycle rental.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.toggleAlert} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
  editCartItem = (id, quantity) => {
    this.setState(prevState => {
      let item = prevState.cart.find(cartItem => cartItem.id === id);
      let newCart = prevState.cart.filter(cartItem => cartItem.id !== id);
      let newQuantity = quantity - item.quantity;

      item.quantity = quantity

      return ({ cart: [...newCart, item], quantity: prevState.quantity + newQuantity })
    });
  }

  getAddOns = () => {
    return this.state.cart.filter(cartItem => cartItem.product_type === "accessories");
  }

  render() {
    return (
      <Router >

        <Navigation editCartItem={this.editCartItem} removeFromCart={this.removeFromCart} cart={this.state.cart} totalQuantity={this.state.quantity} />
        {this.renderWarning()}
        <Switch>
          <Route exact path='/' component={Bicycles} />
          <Route exact path='/bicycles/:id' render={(props) => <ProductPage {...props} formatMoney={this.formatMoney} addToCart={this.addToCart} />} />
          <Route exact path='/checkout' render={() => <Checkout cart={this.state.cart} formatMoney={this.formatMoney} addToCart={this.addToCart} removeFromCart={this.removeFromCart} />} />
        </Switch>
      </Router>

    );
  }

}

export default App;
