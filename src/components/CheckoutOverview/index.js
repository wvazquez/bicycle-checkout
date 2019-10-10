import React, { useContext } from 'react';
import { products } from '../../data/bikerentals.json';
import { Context } from '../../components/CartProvider';
import AddOn from "../AddOn";

import './style.css';

const CheckoutOverview = () => {
  const {formatMoney, state, removeCartItem, addCartItem} = useContext(Context);

  const handleAddOn = (product) => {
    console.log('i worked')
    return (state.cart.find((addOn) => addOn.id === product.id)) ? 
      removeCartItem(product.id) : () => { product.quantity = 1; addCartItem(product)};
  }
  const renderCheckbox = (product) => {
    //  return (state.cart.find((addOn) => addOn.id === product.id)) ? 
    return 
    // : null
   
  }

  return (
    <div className="col-md-6 mb-5 mb-md-0">
      <h2 className="h3 mb-3 text-black font-heading-serif">Manage Add-on's</h2>
      <div className="p-3 p-lg-5 border">
        {
          products.map(product => {
            if (product.product_type === 'accessory' || product.product_type === 'addon') {
              return (
                <div className="form-group mt-3" key={product.id}>
                  <label htmlFor={product.id} className="text-black mr-1"
                    href={`#${product.id}`} role="button" 
                    aria-controls={product.id}>
                    <AddOn onClick={() => handleAddOn(product)} id={product.id} />
                    {product.name} - <strong>{formatMoney(product.price)}</strong></label>
                  <img className="input-image" src={product.image} alt={`accessory item ${product.name}`} />
                </div>
              );
            } else {
              return null;
            }
          })
        }
      </div>

    </div>
  );
}

export default CheckoutOverview;