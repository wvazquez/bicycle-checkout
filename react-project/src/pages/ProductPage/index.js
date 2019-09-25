import React, { Component } from 'react';

import { products } from '../../data/bikerentals.json';
import QuantityControls from '../../components/QuantityControls';
import Reviews from '../../components/Reviews';

import './style.css';

class ProductPage extends Component {


    state = {
        name: '',
        price: '',
        image: '',
        quantity: 1,
    }
    handleQuantity = (event) => {
        const action = event.currentTarget.getAttribute('name');
        if(action === 'decrease'){
            if(this.checkQuantity()){
                this.setState({quantity: this.state.quantity - 1});
            }
            return;
        }else{
            this.setState({quantity: this.state.quantity + 1});
        }
    }
    checkQuantity = () => {
        
        if (this.state.quantity > 0) {
            return true
        }
    }

    componentDidMount() {
        const id = parseInt(this.props.match.params.id);
        const { name, price, image } = products.find(element => {
            if (element.id === id) {
                return element;
            }
        });
        this.setState({ name, price, image });
    }

    render() {
        

        return (
            <div>
                
                <img src={this.state.image} alt={this.state.name} />
                <p>{this.state.name}</p>
                <p>{this.state.price}</p>
                

                <div className="site-section mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <img className="d-block w-100" src="/bicycles/beachcruiserbike.jpeg" alt="First slide" />
                            </div>
                            <div className="col-lg-5 ml-auto">
                                <h2 className="text-primary">Bike Details</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non eos inventore aspernatur voluptatibus ratione odit molestias molestiae, illum et impedit veniam modi sunt quas nam mollitia earum perferendis, dolorem. Magni.</p>

                                <QuantityControls handleQuantity={this.handleQuantity} quantity={this.state.quantity}/>

                                <p><span className="buy-now btn btn-sm height-auto px-4 py-3 btn-primary" onClick={() => this.props.addToCart(this.state)}>Add To Cart</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <Reviews/>

            </div>
        );
    }
}



export default ProductPage;