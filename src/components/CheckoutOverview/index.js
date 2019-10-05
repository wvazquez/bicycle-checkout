import React, { Component } from 'react';
import { products } from '../../data/bikerentals.json';
import './style.css';

class CheckoutOverview extends Component {
  state = {
    addOns: []
  }


  handleAddOn = (product) =>{
      let addOn = this.props.cart.find((addOn) => addOn.id === product.id);

      if(addOn){
        this.props.removeCartItem(product.id);
      }else{
        product.quantity = 1;
        this.props.addCartItem(product);
      }
  }
  isChecked = (id) => {
    let addOn = this.props.cart.find((addOn) => addOn.id === id);
    if(addOn){
      return true;
    }
    return false
  }

  render() {

    return (
      <div className="col-md-6 mb-5 mb-md-0">
        <h2 className="h3 mb-3 text-black font-heading-serif">Manage Add-on's</h2>
        <div className="p-3 p-lg-5 border">

          
            {
              products.map(product => {
                if(product.product_type === 'accessory' || product.product_type === 'addon' ){
                  return (
                    <div className="form-group mt-3" key={product.id}>
                    <label htmlFor={product.id} className="text-black mr-1" data-toggle="collapse"
                      href={`#${product.id}`} role="button" aria-expanded="false"
                      aria-controls={product.id}>
                        {
                          this.isChecked(product.id) ? 
                          <input checked={true}onChange={()=> this.handleAddOn(product)} className='mr-1' type="checkbox" value="1" id={product.id} />
                          :
                          <input checked={false} onChange={()=> this.handleAddOn(product)} className='mr-1' type="checkbox" value="1" id={product.id} />
                        }
                      
                      {product.name} - <strong>{this.props.formatMoney(product.price)}</strong></label>
                      <img className="input-image" src={product.image} alt={`accessory item ${product.name}`}/>
                    </div>
                  );
                }else{
                  return null;
                }
              })
            }
        </div>
        
        </div>
        

    );
  };
}
export default CheckoutOverview;