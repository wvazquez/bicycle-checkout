import React, {Component} from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';


import FormControl from '@material-ui/core/FormControl';
import {products} from '../../data/bikerentals.json';



class BicycleItem extends Component{
    
    
    state = {
        name: '',
        price: '',
        image: '',
        quantity: 1,
    }
    changeQuantity = (event)=>{
        const value = event.target.value;
        if(!value){
            this.setState({quantity: ""})
        }else if(value >= 0){
            this.setState({quantity: parseInt(value)})
        }  
    }
    checkQuantity = (event)=>{
        const value = event.target.value;
        if(!value){
            this.setState({quantity: 0})
        }
    }

    componentDidMount(){
        const id = parseInt(this.props.match.params.id);
        const {name, price, image} = products.find(element => {
            if(element.id === id){
                return element;
            }
        });
        this.setState({ name, price, image});
    }

    render(){
        console.log(this.state);
        const classes = makeStyles(theme => ({
            button: {
              margin: theme.spacing(1),
            },
            leftIcon: {
              marginRight: theme.spacing(1),
            },
            rightIcon: {
              marginLeft: theme.spacing(1),
            },
            iconSmall: {
              fontSize: 20,
            },
            container: {
                display: 'flex',
                flexDirection: 'column',
                // flexWrap: 'wrap',
              },
              textField: {
                marginLeft: theme.spacing(1),
                marginRight: theme.spacing(1),
                width: 200,
              },
          }))
        
        return (
            <div>
                <img src={this.state.image} alt={this.state.name} />
                <p>{this.state.name}</p>
                <p>{this.state.price}</p>
                <form className={classes.container} noValidate>

                    <FormControl>
                        <TextField
                                id="outlined-number"
                                label="Quantity"
                                value={this.state.quantity}
                                onChange={(event) => this.changeQuantity(event)}
                                onBlur={(event) => this.checkQuantity(event)}
                                type="number"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin="normal"
                                variant="outlined"
                        />
                    </FormControl>
                    
                    <FormControl required={true}>
                    <TextField
                        id="datetime-local"
                        label="Reservation Date and Time"
                        type="datetime-local"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant='outlined'
                    />
                </FormControl>

                    <Button variant="contained" color="primary" className={classes.button}>
                        Reserve 
                        <Icon className={classes.rightIcon}>send</Icon>
                    </Button>
                </form>
             
                
              
            </div>
        );
    }
}



export default BicycleItem;