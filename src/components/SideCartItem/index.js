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

import './style.css'


class SideCartItem extends Component {
  state = {
    isEditing: false,
    quantity: 1
  }

  componentDidMount() {
    this.setState({ quantity: this.props.quantity });
  }
  handleEdit = () => {
    this.setState(prevState => ({ isEditing: !prevState.isEditing }));
  }
  handleEditChange = (event) => {
    console.log(event.target.value.trim());
    if (parseInt(event.target.value)) {
      return this.setState({ quantity: event.target.value });
    }

    if (event.target.value.trim().length === 0) {
      this.setState({ quantity: "" });
    }
  }
  handleSave = (id) => {
    if (this.state.quantity === 0) {
      this.props.removeCartItem(id);
    } else {
      this.props.editCartItem(id, this.state.quantity);
    }

    this.handleEdit();
  }
  handleCancel = () => {
    this.handleEdit();
    this.setState(prevState => ({ quantity: prevState.quantity }));
  }
  handleQuantity = (event) => {
    const action = event.currentTarget.getAttribute('name');
    if (action === 'decrease') {
      if (this.checkQuantity()) {
        this.setState({ quantity: this.state.quantity - 1 });
      }
      return;
    } else {
      this.setState({ quantity: this.state.quantity + 1 });
    }
  }
  checkQuantity = () => {
    if (this.state.quantity > 0) {
      return true
    }
  }
  render() {
    return (

      <ListItem key={this.props.id} alignItems="center" className="cart-item">
        <ListItemAvatar >
          <Avatar className="cart-item-image" alt={this.props.name} src={this.props.image} />
        </ListItemAvatar>
        <ListItemText
          primary={this.props.name}
          secondary={
            <>
              <Typography
                component="span"
                className="sidecartitem-title"
                variant="body2"
                color="textPrimary"
              >
                ${this.props.price} / each
              </Typography>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
                Quantity: {this.props.quantity}
              </Typography>
            </>
          }
        />
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
                <QuantityControls quantity={this.state.quantity} handleQuantity={this.handleQuantity}/>
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
              onClick={this.handleEdit}
            >
              <Edit color='primary' />
            </IconButton>
            <IconButton aria-label="delete shopping cart item" color="inherit"
            edge="end"
            onClick={() => this.props.removeCartItem(this.props.id)}
          >
            <Delete color='primary' />
          </IconButton>
          </>
        }

        
      </ListItem>
    );
  }

}




export default SideCartItem;