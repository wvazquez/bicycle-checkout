import React, { Component } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import BillingForm from '../../components/BillingForm';
import OrderForm from '../../components/OrderForm';
import DeliveryForm from '../../components/DeliveryForm';
import CreditCardForm from '../../components/CreditCardForm';
import ProductStore from '../../components/ProductStore';
import './style.css'


class Checkout extends Component {
    state = {
        activeStep: 0,
        steps: [
            {
                title: 'Customer Info',
                active: true,
                isCompleted: false,
            },
            {
                title: 'Devilery Info',
                active: false,
                isCompleted: false,
            },
            {
                title: 'Review',
                active: false,
                isCompleted: false,
            },
        ]
    }

    getStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <div className='row justify-content-center'>
                        <BillingForm formatMoney={this.props.formatMoney} />
                        <OrderForm formatMoney={this.props.formatMoney} cart={this.props.cart} activeStep={this.state.activeStep} handleBack={this.handleBack} handleNext={this.handleNext} stepLength={this.state.steps.length} />
                    </div>
                )
            case 1:
                return (
                    <div className='row justify-content-center'>
                        <DeliveryForm formatMoney={this.props.formatMoney} />
                        <OrderForm formatMoney={this.props.formatMoney} cart={this.props.cart} activeStep={this.state.activeStep} handleBack={this.handleBack} handleNext={this.handleNext} stepLength={this.state.steps.length} />
                    </div>
                )
            case 2:
                return (
                    <div className='row justify-content-center'>
                        <CreditCardForm formatMoney={this.props.formatMoney} />
                        <OrderForm formatMoney={this.props.formatMoney} cart={this.props.cart} activeStep={this.state.activeStep} handleBack={this.handleBack} handleNext={this.handleNext} stepLength={this.state.steps.length} />
                    </div>
                );
            default:
                return 'Unknown step';
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
        <div>
            <Typography className='instructions'>
                All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={this.handleReset} className='button'>
                Reset
            </Button>
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

        return (
            <div>
                {
                    (this.props.cart.length > 0)
                        ?
                        this.renderStepper()
                        : <>
                            <div className="jumbotron text-center">
                                <h2>Your Cart is currently empty.</h2>
                                <h4>Check out these rentals you might be intrested in!</h4>
                            </div>

                            <ProductStore />
                        </>
                }
            </div>
        );
    }

}

export default Checkout;