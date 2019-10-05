import React, { Component } from 'react';

import { products } from '../../data/bikerentals.json';
import QuantityControls from '../../components/QuantityControls';
import { Success } from "../../components/Loader";
import ProductStore from '../../components/ProductStore';
import { Context } from '../../components/CartProvider'
import './style.css';

class ProductPage extends Component {

    state = {
        id: 1,
        name: '',
        price: '',
        image: '',
        quantity: 1,
        product_type: "",
        animate: false
    }

    componentDidMount() {
        const urlID = parseInt(this.props.match.params.id);
        let { id, name, price, image, product_type } = products.find(element => (element.id === urlID));
        this.setState({ id: id, name: name, price: price, image: image, product_type: product_type });

        //need to eventually implement id's that are not found.
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutID);
    }

    render() {
        let { image, name, price, quantity } = this.state;
        return (
            <Context.Consumer>
                {
                    ({ formatMoney, addCartItem }) => (
                        <div>
                            <div className="site-section mt-5">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <img className="d-block w-100" src={image} alt={name} />
                                        </div>
                                        <div className="col-lg-5 ml-auto">

                                            <h2 className="text-primary">{name} - {formatMoney(price)}</h2>



                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non eos inventore aspernatur voluptatibus ratione odit molestias molestiae, illum et impedit veniam modi sunt quas nam mollitia earum perferendis, dolorem. Magni.</p>

                                            <QuantityControls handleQuantity={this.handleQuantity} quantity={quantity} />
                                            {
                                                !this.state.animate ?

                                                    <p><span onAnimationEnd={() => this.setState({ animate: false })} className="addCartItem-button btn btn-sm height-auto px-4 py-3 btn-primary" onClick={() => this.handleAddCartItem(addCartItem)}>Add To Cart</span></p>
                                                    :
                                                    <Success />
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ProductStore />
                        </div>
                    )}
            </Context.Consumer>
        );
    }

    handleQuantity = (event) => {
        const action = event.currentTarget.getAttribute('name');
        if (action === 'decrease') {
            if (this.checkQuantity()) {
                this.setState({ quantity: this.state.quantity - 1 });
            }
            return;
        } else {
            this.setState({ quantity: this.state.quantity + 1 });
        }
    }
    checkQuantity = () => {
        if (this.state.quantity > 0) {
            return true
        }
    }


    // Starts animation and add the item to the cart. 
    handleAddCartItem = (addCartItem) => {
        clearTimeout(this.timeoutID)
        this.setState({ 
            animate: true, 
            quantity: 1 
        });

        addCartItem(this.state);

        this.timeoutID = setTimeout(() => { 
            this.setState({ animate: false }) }, 
            2500
        );
    }




}



export default ProductPage;