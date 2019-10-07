import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';

import './style.css';

const tax = .08875;


const calcTaxes = (price) => {
    return price * tax;
}
const calcTotal = (subtotal) => {
    return (subtotal * tax) + subtotal
}
const OrderForm = (props) => {
    console.log(props)
    let subtotal = 0;
    return (
        <div className="mb-5 orderform-container">
            <div className="col-md-12">
                <h2 className="h3 mb-3 text-black font-heading-serif">Your Order</h2>
                <div className="p-3 p-lg-5 border">
                    <table className="table site-block-order-table mb-5">
                        <thead>
                            <tr>
                                <td>Product</td>
                                <td>Total</td>
                            </tr>
                        </thead>
                        <tbody>

                            {

                                props.cart.map(cartItem => {
                                    subtotal += (cartItem.price * cartItem.quantity);
                                    return (
                                        <tr key={cartItem.id}>
                                            <td>
                                                <IconButton aria-label="delete shopping cart item" color="inherit"
                                                    aria-controls='shopping-cart'
                                                    aria-haspopup="true"
                                                    onClick={() => props.removeCartItem(cartItem.id)}
                                                >
                                                    <Delete color='primary' />
                                                </IconButton>
                                                {cartItem.name} <strong className="mx-2">x</strong> {cartItem.quantity}
                                            </td>
                                            {/* <td>{props.formatMoney(cartItem.price)}</td> */}
                                        </tr>)
                                })
                            }
                            <tr className="seperator">
                                <td className=""></td>
                                <td className=""></td>
                            </tr>

                            <tr>
                                <td className="text-black">Cart Subtotal</td>
                                {/* <td className="text-black">{props.formatMoney(subtotal)}</td> */}
                            </tr>
                            <tr>
                                <td className="text-black">Taxes and Fees</td>
                                {/* <td className="text-black">{props.formatMoney(calcTaxes(subtotal))}</td> */}
                            </tr>
                            <tr>
                                <td className="text-black font-weight-bold"><strong>Order Total</strong></td>
                                {/* <td className="text-black font-weight-bold"><strong>{props.formatMoney(calcTotal(subtotal))}</strong></td> */}
                            </tr>
                        </tbody>
                    </table>

                    <div className="text-center">
                        <Button disabled={props.activeStep === 0} onClick={props.handleBack} className='button'>
                            {props.activeStep === props.stepLength - 1 ? 'Edit Order' : 'Back'}
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={props.handleNext}
                            className='button ml-3'
                        >
                            {props.activeStep === props.stepLength - 1 ? 'Complete Purchase' : 'Next'}
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OrderForm;