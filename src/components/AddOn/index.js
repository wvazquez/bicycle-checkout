import React, { Component } from 'react';

class AddOn extends Component{

    state = {
        isChecked: false
    }
    componentDidMount(){
        console.log(this.props)
    }

    render(){
        return(
            <input checked={this.state.isChecked} onChange={this.handleCheckChange} className='mr-1' type="checkbox" value="1" id={this.props.id} />
        );
    }

    handleCheckChange = () => {
        this.setState( prevState => ({isChecked : !prevState.isChecked}));
    }
}

export default AddOn;