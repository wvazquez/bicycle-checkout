import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import Close from '@material-ui/icons/Close';
import Save from '@material-ui/icons/SaveAlt';
import { Transition, animated } from 'react-spring/renderprops'
import QuantityControls from '../QuantityControls';

import { Context } from '../CartProvider';
import './style.css'


class SideCartItem extends Component {
  state = {
    isEditing: false,
    quantity: 1
  }

  componentDidMount() {
    let Context = this.context;
    let { quantity } = Context.state

    this.setState({ quantity: quantity });

    /**
     * DESCRIPTION: Refs provide a way to access DOM nodes or React elements created in the render method. 
     * Creates a Ref so we can later access the instance of quantity controls state and methods.
    */
    this.quantityControl = React.createRef();
  }
  toggleIsEditing = () => {
    this.setState(prevState => ({ isEditing: !prevState.isEditing }));
  }

  handleSave = (id) => {
    let { removeCartItem, editCartItem } = this.context;
    let { quantity } = this.quantityControl.current.state;

    if (this.quantityControl.current.state.quantity === 0) {
      removeCartItem(id);
    } else {
      console.log("quantity",quantity);
      editCartItem(id, quantity);
    }

    this.toggleIsEditing();
  }
  handleCancel = () => {
    this.toggleIsEditing();
    this.setState(prevState => ({ quantity: prevState.quantity }));
  }
  
  
  render() {
    let {formatMoney, removeCartItem } = this.context;
    return (

      <ListItem key={this.props.id} alignItems="center" className="cart-item">
        <ListItemAvatar >
          <Avatar className="cart-item-image" alt={this.props.name} src={this.props.image} />
        </ListItemAvatar>
        <div className="cart-item-body">
          <ListItemText
            primary={this.props.name}
          />

          <Typography
            component="span"
            className="sidecartitem-title"
            variant="body2"
            color="textPrimary"
          >

            {formatMoney(this.props.price)}/ each
                  </Typography>



          <Typography
            component="span"
            variant="body2"
            color="textPrimary"
          >
            Quantity: {this.state.quantity}
          </Typography>
        </div>
        <Transition className="transition-container"
          items={this.state.isEditing}
          from={{ transform: 'translate3d(0px,40px,0)', opacity: 0 }}
          enter={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
          leave={{ transform: 'translate3d(0px,40px,0)', opacity: 0 }}
          config={{ duration: 100 }}
        >
          {show => show && (props => (
            <animated.div style={props}>
              <div>
                <p>Quantity: </p>
                {/**
                *  Passes the ref to quantity controls to access current instance state and methods.
                *  Starting quantity is the current component state quantity
                */}
                <QuantityControls ref={this.quantityControl} quantity={this.state.quantity}/>
              </div>

            </animated.div>
          ))}
        </Transition>
        {
          this.state.isEditing ?
            <>

              <IconButton aria-label="Save shopping cart item" color="inherit"
                onClick={() => { this.handleSave(this.props.id) }}
              >
                <Save color='primary' />
              </IconButton>


              <IconButton aria-label="cancel cart item" color="inherit"
                edge="end"
                onClick={() => this.handleCancel()}
              >
                <Close color='primary' />
              </IconButton>
            </>
            :
            <>
              <IconButton aria-label="edit shopping cart item" color="inherit"
                onClick={this.toggleIsEditing}
              >
                <Edit color='primary' />
              </IconButton>


              <IconButton aria-label="delete shopping cart item" color="inherit"
                edge="end"
                onClick={() => {
                  console.log('hello: ', this.props)
                  removeCartItem(this.props.id)
                }}
              >
                <Delete color='primary' />
              </IconButton>

            </>
        }


      </ListItem>
    );
  }

}


SideCartItem.contextType = Context;

export default SideCartItem;