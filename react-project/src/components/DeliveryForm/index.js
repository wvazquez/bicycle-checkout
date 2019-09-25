import React, { Component } from 'react';

import './style.css';

class DeliveryForm extends Component {
  state = {
    showForm: false
  }

  form = () => (
    <div id="ship_different_address">
      <div className="py-2">
        <div className="form-group row">
          <div className="col-md-6">
            <label htmlFor="c_diff_fname" className="text-black">First Name <span className="text-danger">*</span></label>
            <input type="text" className="form-control" id="c_diff_fname" name="c_diff_fname" />
          </div>
          <div className="col-md-6">
            <label htmlFor="c_diff_lname" className="text-black">Last Name <span className="text-danger">*</span></label>
            <input type="text" className="form-control" id="c_diff_lname" name="c_diff_lname" />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-md-12">
            <label htmlFor="c_diff_companyname" className="text-black">Company Name </label>
            <input type="text" className="form-control" id="c_diff_companyname" name="c_diff_companyname" />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-md-12">
            <label htmlFor="c_diff_address" className="text-black">Address <span className="text-danger">*</span></label>
            <input type="text" className="form-control" id="c_diff_address" name="c_diff_address"
              placeholder="Street address" />
          </div>
        </div>

        <div className="form-group">
          <input type="text" className="form-control" placeholder="Apartment, suite, unit etc. (optional)" />
        </div>

        <div className="form-group row">
          <div className="col-md-6">
            <label htmlFor="c_diff_state_country" className="text-black">State / Country <span
              className="text-danger">*</span></label>
            <input type="text" className="form-control" id="c_diff_state_country" name="c_diff_state_country" />
          </div>
          <div className="col-md-6">
            <label htmlFor="c_diff_postal_zip" className="text-black">Posta / Zip <span
              className="text-danger">*</span></label>
            <input type="text" className="form-control" id="c_diff_postal_zip" name="c_diff_postal_zip" />
          </div>
        </div>

        <div className="form-group row mb-5">
          <div className="col-md-6">
            <label htmlFor="c_diff_email_address" className="text-black">Email Address <span
              className="text-danger">*</span></label>
            <input type="text" className="form-control" id="c_diff_email_address" name="c_diff_email_address" />
          </div>
          <div className="col-md-6">
            <label htmlFor="c_diff_phone" className="text-black">Phone <span className="text-danger">*</span></label>
            <input type="text" className="form-control" id="c_diff_phone" name="c_diff_phone"
              placeholder="Phone Number" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="c_order_notes" className="text-black">Order Notes</label>
          <textarea name="c_order_notes" id="c_order_notes" cols="30" rows="5" className="form-control"
            placeholder="Write your notes here..."></textarea>
        </div>

      </div>

    </div>
  );
  toggleForm = () => {
    this.setState(prevState => ({ showForm: !prevState.showForm }));
  }

  render() {

    return (
      <div className="col-md-6 mb-5 mb-md-0">
        <h2 className="h3 mb-3 text-black font-heading-serif">Delivery Details</h2>
        <div className="p-3 p-lg-5 border">
          <span className='delivery-option-subheading'>John Smith</span>
          <span className='delivery-option-subheading'>123 Real Street Apt 1A</span>
          <span className='delivery-option-subheading'>New York, New York, United States</span>
          <div className="form-group mt-3">
            <label htmlFor="c_ship_different_address" className="text-black mr-1" data-toggle="collapse"
              href="#ship_different_address" role="button" aria-expanded="false"
              aria-controls="ship_different_address"><input onClick={this.toggleForm} className='mr-1'type="checkbox" value="1" id="c_ship_different_address" />
              Ship To A Different Address?</label>
            {
              this.state.showForm ? this.form() : null
            }
          </div>

          
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
export default DeliveryForm;