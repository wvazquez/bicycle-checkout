import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';


import SideCartItem from '../SideCartItem';



import { Link } from 'react-router-dom';

import './style.css';



class Navigation extends Component {
  state = {
    mobileMenuElement: null,

    isShoppingCartOpen: false,
    isMobileMenuOpen: false,
  };

  toggleSideCart = (open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    this.setState({ isShoppingCartOpen: open });
  };

  renderSideCartItems = () => {
    if (this.props.cart.length > 0) {
      return this.props.cart.map((cartItem) => (
            <SideCartItem key={cartItem.id.toString()} {...cartItem}/>
        )
      );
    }
    return <p>Your shopping cart is currently empty</p>
  };

  renderSideCart = () => (
    <SwipeableDrawer
      anchor="right"
      open={this.state.isShoppingCartOpen}
      onClose={this.toggleSideCart(false)}
      onOpen={this.toggleSideCart(true)}
    >
      <div
        className="sidecart-list"
        role="presentation"
      >
        <h2>Shopping Cart</h2>
        <Divider />
        <List>
          {this.renderSideCartItems()}
        </List>

      </div>
    </SwipeableDrawer>
  );

  renderMobileMenu = () => (
    <Menu
      anchorEl={this.state.mobileMenuElement}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id='mobile-menu'
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={this.state.isMobileMenuOpen}
      onClose={this.handleMenuClose}
    >
      <Link to='/'><MenuItem>Home</MenuItem></Link>
      <Link to='/bicycles'><MenuItem>Store</MenuItem></Link>
    </Menu>

  );

  handleMobileMenuOpen = (event) => {
    this.setState({
      mobileMenuElement: event.currentTarget,
      isMobileMenuOpen: !this.state.isMobileMenuOpen
    });
  };

  handleMenuClose = () => {
    this.setState({
      mobileMenuElement: null,
      isMobileMenuOpen: false,
    });
  };

  render() {
    const total = this.props.totalQuantity;
    return (

      <div className="grow">
        <AppBar position="static" className='appbar'>
          <Toolbar>

            <Typography className="appbar-title" variant="h6" noWrap>
              Bicycle Rental
            </Typography>

            <div className="grow" />
            <div className="sectionDesktop">
              <Link to='/'> <Button className="button">Home</Button></Link>
              <Link to='/store'> <Button className="button">Store</Button></Link>

            </div>
            <IconButton aria-label="show 4 new items in shopping cart" color="inherit"
              edge="end"
              aria-controls='shopping-cart'
              aria-haspopup="true"
              onClick={this.toggleSideCart(true)}>
              <Badge badgeContent={total} color="secondary">
                <ShoppingCart color='primary' />
              </Badge>
            </IconButton>
            <div className="sectionMobile">
              <IconButton
                aria-label="show more"
                aria-controls='mobile-menu'
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon color='primary' />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {this.renderMobileMenu()}
        {this.renderSideCart()}
      </div>
    );

  }
}

export default Navigation;