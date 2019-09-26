import React, { Component } from 'react';
import { products } from '../../data/bikerentals.json';
import './style.css';

class CheckoutOverview extends Component {
  state = {
    addOns: []  
  }
  componentDidMount(){
    let accessories = products.filter(product =>{
      if(product.product_type === "accessory"){
        product.isAdded = false;
        return product
      }
    });
    console.log(accessories);
    this.setState({
      addOns : [...accessories]
    });
  }

  toggleAddOn = () => {
    this.setState(prevState => ({ showForm: !prevState.showForm }));
  }

  handleAddOn = (product) =>{

    console.log(product)
    this.setState(prevState => {
      let addOn = prevState.addOns.find((addOn) => addOn.id === product.id);
      let otherAddOns = prevState.addOns.filter((addOn) => addOn.id !== product.id);
      if(!addOn.isAdded){
        product.quantity = 1;
        this.props.addToCart(product, 1);
        addOn.isAdded=true;
        return({addOn : [...otherAddOns, addOn]});
      }else{
        this.props.removeFromCart(product.id);
        addOn.isAdded=false;
        return({addOn : [...otherAddOns, addOn]});
      }
    });
  }
  

  render() {

    return (
      <div className="col-md-6 mb-5 mb-md-0">
        <h2 className="h3 mb-3 text-black font-heading-serif">Manage Add-on's</h2>
        <div className="p-3 p-lg-5 border">

          
            {
              this.state.addOns.map(product => {
                  return (
                    <div className="form-group mt-3" key={product.id}>
                    <label htmlFor={product.id} className="text-black mr-1" data-toggle="collapse"
                      href={`#${product.id}`} role="button" aria-expanded="false"
                      aria-controls={product.id}>
                    <input  onClick={()=> this.handleAddOn(product)} className='mr-1' type="checkbox" value="1" id={product.id} />
                      {product.name} - <strong>{this.props.formatMoney(product.price)}</strong></label>
                      <img className="input-image" src={product.image}/>
                    </div>
                  );
                
              })
            }
        </div>
        <h2 className="h3 mb-3 text-black font-heading-serif mt-5">Shipping Method</h2>
        <div className="form-group form-check-inline delivery-options-container ">

          <div className="card mr-3" >
            <div className="card-body">
              <div className="custom-control custom-radio">
                <input type="radio" checked id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
                <label className="custom-control-label" htmlFor="customRadioInline1">Standard Delivery - </label>
                <p className='delivery-option-title'> FREE</p>
                <p className='delivery-option-subheading'>Estimated 7-20 Day Shipping</p>
                <p className='delivery-option-subheading'>Weekends and Holidays may delay delivery times</p>
              </div>
            </div>
          </div>
          <div className="card" >
            <div className="card-body">
              <div className="custom-control custom-radio">
                <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                <label className="custom-control-label" htmlFor="customRadioInline2">Express Delivery - </label>
                <p className='delivery-option-title'> $8.99</p>
                <p className='delivery-option-subheading'>Estimated 2-3 Day Shipping</p>
                <p className='delivery-option-subheading'>Weekends and Holidays may delay delivery times</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  };
}
export default CheckoutOverview;