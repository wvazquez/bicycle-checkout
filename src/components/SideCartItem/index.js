import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import Save from '@material-ui/icons/SaveAlt';
// import { useSpring, animated } from 'react-spring'
import { Transition, animated } from 'react-spring/renderprops'
import TextField from '@material-ui/core/TextField';


import './style.css'


class SideCartItem extends Component {
  state = {
    isEditing: false,
    quantity: 1

  }

  componentDidMount(){
      console.log("this is the props",this.props);
    
    this.setState({ quantity: this.props.quantity});
  }
  handleEdit = () => {
    this.setState(prevState => ({ isEditing: !prevState.isEditing }));
  }
  handleEditChange = (event)=>{
    if(parseInt(event.target.value)){
      return this.setState({quantity : event.target.value});
    }else if(event.target.value.trim().length === 0){
       this.setState({quantity : ""});
    }
  }
  handleSave = (id) => {
    if(this.state.quantity === ""){
      return this.handleEdit();
      // this.setState({ quantity: });
    }else if(this.state.quantity === 0){
      this.props.removeFromCart(id);
    }else{
      this.props.editCartItem(id, this.state.quantity);
    }
    
    this.handleEdit();
  }
  render() {
    return (

      <ListItem key={this.props.id} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={this.props.name} src={this.props.image} />
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
        <Transition
          items={this.state.isEditing}
          from={{ transform: 'translate3d(40px,0px,0)', opacity: 0 }}
          enter={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
          leave={{ transform: 'translate3d(40px,0px,0)', opacity: 0 }}
          config={{ duration: 100 }}
        >
          {show => show && (props => (
            <animated.div style={props}>
              <TextField
                id="standard-number"
                label="Quantity"
                value={this.state.quantity}
                onChange={this.handleEditChange}
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
              />
            </animated.div>
          ))}
        </Transition>
        {
          this.state.isEditing ?
            <IconButton aria-label="Save shopping cart item" color="inherit"
              onClick={() => {this.handleSave(this.props.id)}}
            >
              <Save color='primary' />
            </IconButton>
            :
            <IconButton aria-label="edit shopping cart item" color="inherit"
              onClick={this.handleEdit}
            >
              <Edit color='primary' />
            </IconButton>
        }

        <IconButton aria-label="delete shopping cart item" color="inherit"
          edge="end"
          onClick={() => this.props.removeFromCart(this.props.id)}
        >
          <Delete color='primary' />
        </IconButton>
      </ListItem>
    );
  }

}




export default SideCartItem;