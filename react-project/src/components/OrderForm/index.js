import React from 'react';
import Button from '@material-ui/core/Button';
import './style.css';


const OrderForm = (props) => (
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
                        <tr>
                            <td>Bioderma <strong className="mx-2">x</strong> 1</td>
                            <td>$55.00</td>
                        </tr>
                        <tr>
                            <td>Ibuprofeen <strong className="mx-2">x</strong> 1</td>
                            <td>$45.00</td>
                        </tr>
                        <tr>
                            <td className="text-black font-weight-bold"><strong>Cart Subtotal</strong></td>
                            <td className="text-black">$350.00</td>
                        </tr>
                        <tr>
                            <td className="text-black font-weight-bold"><strong>Order Total</strong></td>
                            <td className="text-black font-weight-bold"><strong>$350.00</strong></td>
                        </tr>
                    </tbody>
                </table>

                <div className="text-center">
                    <Button disabled={props.activeStep === 0} onClick={props.handleBack} className='button'>
                    {props.activeStep === props.stepLength - 1 ? 'Edit' : 'Back'}
                        </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={props.handleNext}
                        className='button ml-3'
                    >
                        {props.activeStep === props.stepLength - 1 ? 'Finish' : 'Next'}
                    </Button>
                </div>

            </div>
        </div>
    </div>
)

export default OrderForm;