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
                                        formatMoney : this.formatMoney,
                                        removeCartItem : this.removeCartItem,
                                        addCartItem: this.addCartItem
                                    }}>
                {this.props.children}
            </Context.Provider>
        );
    }
    formatMoney = (number) => number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    
    addCartItem = (item) => {
      this.setState(prevState => {
          let existingProductIndex = prevState.cart.findIndex((cartItem) => (cartItem.id === item.id));
          let cart = [];
  
          if (existingProductIndex >= 0) {
            let newCart = prevState.cart;
            newCart[existingProductIndex].quantity += item.quantity;
            cart = [...newCart];
          } else {
            cart = [...prevState.cart, item];
          }
          return ({
            cart: cart,
            quantity: prevState.quantity + item.quantity
          })
        });
    }
    editCartItem = (id, quantity) => {
        this.setState(prevState => {
          let existingProductIndex = prevState.cart.findIndex((cartItem) => (cartItem.id === id));
    
          let newCart = prevState.cart;
          let newQuantity = quantity - newCart[existingProductIndex].quantity;
          newCart[existingProductIndex].quantity = quantity
    
          return ({ cart: [...newCart], quantity: prevState.quantity + newQuantity })
        });
    }
    
    removeCartItem = (id) => {
        console.log("i reached here: ", id)
        let productToRemove = this.state.cart.find((cartItem) => cartItem.id === id);
        let newCart = this.state.cart.filter(cartItem => cartItem.id !== id);
        
        if (productToRemove) {
          if ((newCart.find((cartItem) => cartItem.product_type === 'bike') || (this.state.cart.length === 1 && productToRemove.product_type === 'bike'))) {
            this.setState(prevState =>
              ({
                cart: [...newCart],
                quantity: prevState.quantity - productToRemove.quantity
              }))
          } else {
            this.toggleAlert();
          }
        }
    }
}

export default CartProvider;