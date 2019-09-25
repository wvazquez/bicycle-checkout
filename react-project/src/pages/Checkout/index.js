// import React from 'react';

// const Checkout = ()=> (<p>This is the checkout page</p>);

// export default Checkout;


import React, {Component} from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './style.css'

function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

class Checkout extends Component{
    state = {
        activeStep: 0,
        steps : [
            {
                title: 'Customer Info',
                active: true,
                isCompleted: false,
            },
            {
                title: 'Shipping Info',
                active: false,
                isCompleted: false,
            },
            {
                title: 'Payment Selection',
                active: false,
                isCompleted: false,
            },
        ]
    }

    getStepContent = (step) => {
        switch (step) {
          case 0:
            return 'Select campaign settings...';
          case 1:
            return 'What is an ad group anyways?';
          case 2:
            return 'This is the bit I really care about!';
          default:
            return 'Unknown step';
        }
    }
    handleBack = () => {
        this.setState(prevState => ({activeStep: prevState.activeStep - 1}));
    };
    handleNext = () => {
        this.setState(prevState => {

            return ({activeStep: prevState.activeStep + 1})
        });
      };
    handleReset = () => {
        this.setState({activeStep : 0});
      };
    render(){

        return (
            <div className='root'>
              <Stepper activeStep={this.state.activeStep}>
                {this.state.steps.map((step, index) => {
                  return (
                    <Step key={index} completed={step.isCompleted}>
                      <StepLabel >{step.title}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              <div>
                {this.state.activeStep === this.state.steps.length ? (
                  <div>
                    <Typography className='instructions'>
                      All steps completed - you&apos;re finished
                    </Typography>
                    <Button onClick={this.handleReset} className='button'>
                      Reset
                    </Button>
                  </div>
                ) : (
                  <div>
                    <Typography className='instructions'>{this.getStepContent(this.state.activeStep)}</Typography>
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
                )}
              </div>
            </div>
          );
    }
}

export default Checkout;