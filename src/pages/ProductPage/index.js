import React, { Component } from 'react';

import { products } from '../../data/bikerentals.json';
import QuantityControls from '../../components/QuantityControls';
import Reviews from '../../components/Reviews';
import {Success} from "../../components/Loader";
import './style.css';
import ProductStore from '../../components/ProductStore/index.js';

class ProductPage extends Component {

    state = {
        id: 1,
        name: '',
        price: '',
        image: '',
        quantity: 1,
        animate: false
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
        this.setState((prevState,props) => {
            const id = parseInt(props.match.params.id);
            let { name, price, image } = products.find(element => {
                if (element.id === id) {
                    return element;
                }
            });

            return ({ id: id, name:name, price:price, image:image })
        });
    }

    handleAddToCart = ()=>{
        clearTimeout(this.timeoutID)
        this.setState({animate: true});
        this.props.addToCart(this.state, this.state.quantity)
        this.setState({ quantity: 1});
        this.timeoutID = setTimeout(()=>{ this.setState({animate: false}) }, 2500);
    }

    componentWillUnmount(){
        clearTimeout(this.timeoutID);
    }

    render() {
        return (
            <div>
                <div className="site-section mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <img className="d-block w-100" src={this.state.image} alt={this.state.name} />
                            </div>
                            <div className="col-lg-5 ml-auto">
                                <h2 className="text-primary">{this.state.name} - {this.props.formatMoney(this.state.price)}</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non eos inventore aspernatur voluptatibus ratione odit molestias molestiae, illum et impedit veniam modi sunt quas nam mollitia earum perferendis, dolorem. Magni.</p>

                                <QuantityControls handleQuantity={this.handleQuantity} quantity={this.state.quantity}/>
                                {
                                    !this.state.animate ? 

                                    <p><span onAnimationEnd={() => this.setState({ animate: false })} className="addToCart-button btn btn-sm height-auto px-4 py-3 btn-primary" onClick={() => this.handleAddToCart()}>Add To Cart</span></p>
                                    :
                                    <Success />
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default ProductPage;