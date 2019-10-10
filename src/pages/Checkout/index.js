import React, { Component, useContext } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import BillingForm from '../../components/BillingForm';
import OrderForm from '../../components/OrderForm';
import CreditCardForm from '../../components/CreditCardForm';
import ProductStore from '../../components/ProductStore';
import CheckoutOverview from '../../components/CheckoutOverview';

import { Context } from '../../components/CartProvider';

import { HashLink as Link } from "react-router-hash-link";
import './style.css'


class Checkout extends Component {
    
    
    state = {
        activeStep: 0,
        steps: [
            {
                title: 'Order Details',
                active: true,
                isCompleted: false,
            },
            {
                title: 'Customer Details',
                active: false,
                isCompleted: false,
            },
            {
                title: 'Payment Details',
                active: false,
                isCompleted: false,
            },
        ]
    }

    getStepContent = (step) => {
        let Context = this.context;
        switch (step) {
            case 0:
                return (
                    <div className='row justify-content-center'>
                        <CheckoutOverview cart={Context.state.cart} formatMoney={Context.formatMoney} addCartItem={Context.addCartItem} removeCartItem={Context.removeCartItem} />
                        <OrderForm removeCartItem={Context.removeCartItem} formatMoney={Context.formatMoney} cart={Context.state.cart} activeStep={this.state.activeStep} handleBack={this.handleBack} handleNext={this.handleNext} stepLength={this.state.steps.length} />
                    </div>
                )

            case 1:
                return (
                    <div className='row justify-content-center'>
                        <BillingForm formatMoney={Context.formatMoney} />
                        <OrderForm formatMoney={Context.formatMoney} cart={Context.state.cart} activeStep={this.state.activeStep} handleBack={this.handleBack} handleNext={this.handleNext} stepLength={this.state.steps.length} />
                    </div>
                )
            case 2:
                return (
                    <div className='row justify-content-center'>
                        <CreditCardForm formatMoney={Context.formatMoney} />
                        <OrderForm formatMoney={Context.formatMoney} cart={Context.state.cart} activeStep={this.state.activeStep} handleBack={this.handleBack} handleNext={this.handleNext} stepLength={this.state.steps.length} />
                    </div>
                );
            default:
                return 'There was an error with your order';
        }
    }
    handleBack = () => {
        this.setState(prevState => ({ activeStep: prevState.activeStep - 1 }));
    };
    handleNext = () => {
        this.setState(prevState => {

            return ({ activeStep: prevState.activeStep + 1 })
        });
    };
    handleReset = () => {
        this.setState({ activeStep: 0 });
    };

    renderSteps = () => (
        this.state.steps.map((step, index) => {
            return (
                <Step key={index} completed={step.isCompleted}>
                    <StepLabel >{step.title}</StepLabel>
                </Step>
            );
        })
    );
    renderReset = () => (
        <div className="text-center">
            <Typography className='instructions'>
                Youre Order has been Completed!
            </Typography>
            <Link to='/#store'>
                <Button
                    variant="contained"
                    color="primary"
                    className='button ml-3'
                >View More items</Button>
            </Link>
        </div>
    );

    renderStepContent = () => (
        <div className="site-section">
            <div className="container">
                {this.getStepContent(this.state.activeStep)}
            </div>
        </div>
    );

    renderStepper = () => {
        let items;
        if (this.state.activeStep === this.state.steps.length) {
            items = this.renderReset()
        } else {
            items = this.renderStepContent()
        }

        return (
            <>
                <Stepper activeStep={this.state.activeStep}>
                    {this.renderSteps()}
                </Stepper>
                {items}
            </>)
    }
    
    render() {
        console.log(this.props)
        return (
            <div>
                {
                    // (this.props.cart.length > 0)
                    //     ?
                        this.renderStepper()
                        // : <>
                        //     <div className="jumbotron text-center">
                        //         <h2>Your Cart is currently empty.</h2>
                        //         <h4>Check out these rentals you might be intrested in!</h4>
                        //     </div>

                        //     <ProductStore />
                        // </>
                }
            </div>
        );
    }

}
// Context = useContext(Context);
Checkout.contextType = Context;

export default Checkout;