import React, {Component} from 'react';
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
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import SideCartItem from '../SideCartItem';

import SideCart from '../SideCart';


import {Link} from 'react-router-dom';

import './style.css';



class Navigation extends Component{
    state = {
        shoppingCartElement: null,
        mobileMenuElement: null,

        isShoppingCartOpen: false,
        isMobileMenuOpen: false,
        right: false
    };
    sideList = side => (
      <div
        style={{width: '250px'}}
        role="presentation"
        onClick={this.toggleDrawer(side, false)}
        onKeyDown={this.toggleDrawer(side, false)}
      >
          <h2>Shopping Cart</h2>
      <Divider />
        <List>
          
          { this.shoppingCartItems() }
        </List>

      </div>
    );
    toggleDrawer = (side, open) => event => {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      this.setState({ right: open});
    };

    shoppingCartItems = ()=>{
      if(this.props.cart.length >0 ){
        return this.props.cart.map((cartItem) => {
          return (<>
          <SideCartItem index={cartItem.id} text={cartItem.title}/>
          <Divider />
          </>)
        }
        )
      }
      return null
    }

    renderShoppingCart = ()=> (
        <SwipeableDrawer
        anchor="right"
        open={this.state.right}
        onClose={this.toggleDrawer('right', false)}
        onOpen={this.toggleDrawer('right', true)}
      >
        {this.sideList('right')}
      </SwipeableDrawer>
      );

    renderMobileMenu = ()=> (
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
                mobileMenuElement : event.currentTarget,
                isMobileMenuOpen : !this.state.isMobileMenuOpen
            });
        }

        handleMenuClose = () => {
            this.setState({
                mobileMenuElement : null,
                shoppingCartElement: null,
                isShoppingCartOpen: false,
                isMobileMenuOpen: false,
            });   
        };

      render(){
        console.log('total: ', this.props.totalQuantity);
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
                  onClick={this.toggleDrawer('right', true)}>
                    <Badge badgeContent={total} color="secondary">
                      <ShoppingCart color='primary'/>
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
                    <MenuIcon color='primary'/>
                  </IconButton>
                </div>
              </Toolbar>
            </AppBar>
            {this.renderMobileMenu()}
            {this.renderShoppingCart()}
          </div>
        );
        
      }
}

export default Navigation;