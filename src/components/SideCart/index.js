import React, {Component} from 'react';
import './style.css'


class SideCart extends Component{
    state = {
        isShowing : true,
        products: []
    }

    toggleShow = () => {
        this.setState({ isShowing : !this.state.isShowing});
    }
    render(){
        if(this.state.isShowing){
            return (
                <div className="sidecart-container">
                    <h1>Shopping Cart</h1>
                </div>      
            );
        }else{
            return null;
        }
        
    }

}

export default SideCart;