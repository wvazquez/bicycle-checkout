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


import SideCart from '../SideCart';

import {Context} from '../CartProvider';

import { HashLink } from 'react-router-hash-link';
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
      <HashLink to='/#store'><MenuItem>Rentals</MenuItem></HashLink>
      <Link to='/checkout'><MenuItem>Checkout</MenuItem></Link>
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
    let Context = this.context;
    const total = Context.state.quantity;
    return (

      <div className="grow">
        <AppBar position="static" className='appbar'>
          <Toolbar>
            <Link to='/'>
              <Typography className="appbar-title" variant="h6" noWrap>
                Bicycle Rental
              </Typography>
            </Link>

            <div className="grow" />
            <div className="sectionDesktop">
              <Link to='/'> <Button className="button">Home</Button></Link>
              <HashLink to='/#store'><Button className="button">Rentals</Button></HashLink>
              <Link to='/checkout'> <Button className="button">Checkout</Button></Link>

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
        <SideCart editCartItem={this.props.editCartItem} isShoppingCartOpen={this.state.isShoppingCartOpen} toggleSideCart={this.toggleSideCart} cart={this.props.cart}/>
      </div>
    );

  }
}

Navigation.contextType  = Context;

export default Navigation;