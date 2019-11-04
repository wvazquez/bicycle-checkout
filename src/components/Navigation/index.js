import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

import SideCart from '../SideCart';
import { Context } from '../CartProvider';
import './style.css';


class Navigation extends Component {
  state = {
    mobileMenuElement: null,
    isMobileMenuOpen: false,
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
    return (
      <div className="grow">
        <AppBar position="static" className='appbar'>
          <Toolbar>
            <Link to='/'>
              <h3 className="appbar-title">
                Bicycle Rental
              </h3>
            </Link>

            <div className="grow" />
            <div className="sectionDesktop">
              <Link to='/'> <Button className="button">Home</Button></Link>
              <HashLink to='/#store'><Button className="button">Rentals</Button></HashLink>
              <Link to='/checkout'> <Button className="button">Checkout</Button></Link>

            </div>
            
            <SideCart />
            
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
      </div>
    );
  }
}

Navigation.contextType  = Context;
export default Navigation;