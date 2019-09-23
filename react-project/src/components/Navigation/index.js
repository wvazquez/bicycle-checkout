// import React from 'react';

// const Navigation = ()=>(
//     <nav className="navbar navbar-expand-lg px-4">
//       <a className="navbar-brand" href="#">Bicycle Rental</a>
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNav">
//         <span className="toggler-icon"><i className="fas fa-bars"></i></span>
//       </button>
//       <div className="collapse navbar-collapse" id="myNav">
//         <ul className="navbar-nav mx-auto text-capitalize">
//           <li className="nav-item active">
//             <a className="nav-link" href="#">home</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link " href="#">about</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">store</a>
//           </li>
//         </ul>
//         <div className="nav-info-items d-none d-lg-flex ">
//           <div className="nav-info align-items-center d-flex justify-content-between mx-lg-5">
//             <span className="info-icon mx-lg-3"><i className="fas fa-phone"></i></span>
//             <p className="mb-0">+ 123 456 789</p>
//           </div>

//           <div id="cart-info" className="nav-info align-items-center cart-info d-flex justify-content-between mx-lg-5">
//             <span className="cart-info__icon mr-lg-3"><i className="fas fa-shopping-cart"></i></span>
//             <p className="mb-0 text-capitalize"><span id="item-count">2 </span> items - $<span className="item-total">10.49</span></p>
//           </div>
//         </div>
//       </div>
//     </nav>
// );

// export default Navigation;

import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';


import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
appbar:{
    backgroundColor: 'white'
},
title:{
    color: "#007bff"
},
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Navigation() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          
          <Typography className={classes.title} variant="h6" noWrap>
            Bicycle Rental
          </Typography>
          
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to='/'> <Button color="primary" className={classes.button}>
        Home
      </Button></Link>
            <Link to='/store'> <Button color="primary" className={classes.button}>
        Store
      </Button></Link>
            
            
            
          </div>
          <IconButton aria-label="show 4 new items in shopping cart" color="inherit"
            edge="end"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}>
              <Badge badgeContent={4} color="secondary">
                <ShoppingCart color='primary'/>
              </Badge>
            </IconButton>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
