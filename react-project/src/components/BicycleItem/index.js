import React, {Component} from 'react';
import {products} from '../../data/bikerentals.json';
import { element } from 'prop-types';

class BicycleItem extends Component{
    state = {
        name: '',
        price: '',
        image: '',
    }

    componentDidMount(){
        const id = parseInt(this.props.match.params.id);
        const {name, price, image} = products.find(element => {
            console.log(typeof id);
            if(element.id === id){
                return element;
            }
        });
        this.setState({ name, price, image});
        

    }

    render(){
        return (<p>{this.state.name}</p>);
    }
}



export default BicycleItem;