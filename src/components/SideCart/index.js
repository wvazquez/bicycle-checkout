import React, { Component } from 'react';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCart from '@material-ui/icons/ShoppingCart';


import SideCartItem from '../SideCartItem';
import { Context } from '../CartProvider';
import './style.css';

class SideCart extends Component {

  state = {
    isOpen: false
  }
 
  toggleIsOpen = () => {
    this.setState(prevState => ({isOpen: !prevState.isOpen}));
  };

  setIsOpen = open => {
    this.setState({ isOpen: open });
  }

  render() {
    let total = this.context.state.quantity;

    return (
      <>
      <IconButton aria-label="shopping cart" color="inherit"
              edge="end"
              aria-controls='shopping-cart'
              aria-haspopup="true"
              
              onClick={this.toggleIsOpen}>
              
              <Badge badgeContent={total} color="secondary">
                <ShoppingCart color='primary' />
              </Badge>
            </IconButton>
      {this.state.isOpen ?
      <SwipeableDrawer
        anchor="right"
        open={this.state.isOpen}
        onClose={() => this.setIsOpen(false)}
        onOpen={() => this.setIsOpen(true)}
      >
        <div
          className="sidecart-container"
          role="presentation"
        >
          <h2 className='sidecart-title'>Shopping Cart</h2>

          <Divider />
          <List>
            {this.renderSideCartItems()}
          </List>

        </div>
      </SwipeableDrawer>
       : null}
      </>
    );
  }

  renderSideCartItems = () => {
    let { cart } = this.context.state;
    if (cart.length > 0) {
      return cart.map((cartItem, index) => {
        return <SideCartItem key={index} {...cartItem} />
      })
    }
    return <p>Your shopping cart is currently empty</p>
  };
}

SideCart.contextType = Context;
export default SideCart;