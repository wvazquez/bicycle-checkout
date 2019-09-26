import React, { Component } from 'react';
import CouponForm from '../CouponForm';
import './style.css';





class PaymentForm extends Component {
    state = {
        toggleCreditForm: true
    }
    toggleCreditFormState = () => {
        this.setState(prevState => ({ toggleCreditForm: !prevState.toggleCreditForm }));
    }
    renderCreditForm = () => (
        <div className="p-3">
            <div className="form-group row">
                <div className="col-md-12">
                    <label htmlFor="cc-number" className="text-black">Card Number <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="cc-number" name="cc-number" />
                </div>
            </div>
            <div className="form-group row">
                <div className="col-md-5">
                    <label htmlFor="cc-name" className="text-black">Name:<span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="cc-name" name="cc-name" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="cc-date" className="text-black">Exp. Date:<span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="cc-date" name="cc-date" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="cc-ccv" className="text-black">CCV </label>
                    <input type="text" className="form-control" id="cc-ccv" name="cc-ccv" />
                </div>
            </div>

        </div>
    );

    render() {
        return (
            <div className="col-md-6 mb-5 mb-md-0">
                <h2 className="h3 mb-3 text-black font-heading-serif">Payment Method</h2>
                <div className="form-group delivery-options-container">

                    <div className="card" >
                        <div className="card-body">
                            <div className="custom-control custom-radio">
                                <input type="radio" checked={this.state.toggleCreditForm} id="creditcard" name="paymentmethod" className="custom-control-input" onClick={this.toggleCreditFormState} />
                                <label className="custom-control-label" htmlFor="creditcard">Credit Card</label>
                                <p className='delivery-option-subheading'>Safe payment using your bank account or credit card.</p>
                                <p className='delivery-option-subheading'>Visa. Mastercard. Discover. American Express</p>
                            </div>
                            {this.state.toggleCreditForm ? this.renderCreditForm() : null}
                        </div>
                    </div>
                    <div className="card mt-3" >
                        <div className="card-body">
                            <div className="custom-control custom-radio">
                                <input type="radio" id="paypal" name="paymentmethod" className="custom-control-input" onClick={this.toggleCreditFormState} />
                                <label className="custom-control-label" htmlFor="paypal">PayPal</label>
                                <p className='delivery-option-subheading'>You will be redirected to PayPals website to complete your purchase</p>
                            </div>
                        </div>
                    </div>
                </div>
                <CouponForm />
            </div>
        );
    }
}

export default PaymentForm;