import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


import './style.css'


const SideCartItem = (props) => {

  return (
  
      <ListItem key={props.id} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={props.name} src={props.image} />
        </ListItemAvatar>
        <ListItemText
          primary={props.name}
          secondary={
            <>
              <Typography
                component="span"
                className="sidecartitem-title"
                variant="body2"
                color="textPrimary"
              >
                ${props.price} / each
              </Typography>
              <Typography
              component="span"
              variant="body2"
              color="textPrimary"
              >
                Quantity: {props.quantity}
              </Typography>
            </>
          }
        />
      </ListItem>
  );
}

export default SideCartItem;