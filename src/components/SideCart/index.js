import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import SideCartItem from '../SideCartItem';
import './style.css';


const renderSideCart = (props) => (
  <SwipeableDrawer
    anchor="right"
    open={props.isShoppingCartOpen}
    onClose={props.toggleSideCart(false)}
    onOpen={props.toggleSideCart(true)}
  >
    <div
      className="sidecart-container"
      role="presentation"
    >
      <h2 className='sidecart-title'>Shopping Cart</h2>
      <Divider />
      <List>
        {renderSideCartItems(props.cart, props)}
      </List>

    </div>
  </SwipeableDrawer>
);

const renderSideCartItems = (cart, props) => {
  if (cart.length > 0) {
    return cart.map((cartItem) => (
      <SideCartItem removeFromCart={props.removeFromCart} key={cartItem.id.toString()} {...cartItem} />
    ));
  }
  return <p>Your shopping cart is currently empty</p>
};

export default renderSideCart;