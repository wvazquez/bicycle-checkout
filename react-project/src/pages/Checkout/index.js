


import React, { Component } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import BillingForm from '../../components/BillingForm';
import OrderForm from '../../components/OrderForm';
import CouponForm from '../../components/CouponForm';
import DevileryForm from '../../components/DeliveryForm';
import './style.css'
import DeliveryForm from '../../components/DeliveryForm';


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
                        <BillingForm />
                        <OrderForm />
                    </div>
                )
            case 1:
                return (
                    <div className='row justify-content-center'>
                        <DeliveryForm />
                        <OrderForm />
                    </div>
                )
            case 2:
                return (<CouponForm />);
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
                    <div>
                        <Button disabled={this.state.activeStep === 0} onClick={this.handleBack} className='button'>
                            Back
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleNext}
                            className='button'
                        >
                            {this.state.activeStep === this.state.steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </div>
                </div>

            </div>
    );
    render() {

        return (
            <div>
                <Stepper activeStep={this.state.activeStep}>
                    {this.renderSteps()}
                </Stepper>
                    {this.state.activeStep === this.state.steps.length ? (
                        this.renderReset()
                    ) : (
                        this.renderStepContent()
                    )}
            </div>
        );
    }

}

export default Checkout;