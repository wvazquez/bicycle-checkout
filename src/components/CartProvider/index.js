import React, {Component, createContext} from 'react';

export const Context = createContext();
class CartProvider extends Component{
    state={
        cart: [],
        quantity: 0,
        isAlertOpen: false
    }

    render(){
        return (
            <Context.Provider value={{ state: this.state,
                                        formatMoney : this.formatMoney
                                    }}>
                {this.props.children}
            </Context.Provider>
        );
    }
    formatMoney = (number) => number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

}

export default CartProvider;