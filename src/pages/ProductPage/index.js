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


        /**
         * DESCRIPTION: Refs provide a way to access DOM nodes or React elements created in the render method. 
         * Creates a Ref so we can later access the instance of quantity controls state and methods.
         */
        this.quantityControl = React.createRef();

        //need to eventually implement id's that are not found.
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutID);
    }

    // Starts animation and add the item to the cart. 
    handleAddCartItem = async () => {
        let { addCartItem } = this.context;
        let quantity = this.quantityControl.current.state.quantity
        

        await this.setState({ quantity: quantity });
        addCartItem(this.state);
        this.buttonAnimate();
        this.quantityControl.current.resetQuantity();
    }

    buttonAnimate = () => {
        clearTimeout(this.timeoutID)
        this.setState(prevState => ({ animate: !prevState.animate }));
        this.timeoutID = setTimeout(() => {
            this.setState(prevState => ({ animate: !prevState.animate }));;
        },
            2500
        );
    }


    render() {
        let { image, name, price, quantity } = this.state;
        let { cart } = this.context.state;
        let { formatMoney } = this.context;
        return (
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

                                {/**
                                    Passes the ref to quantity controls to access current instance state and methods.
                                */}
                                <QuantityControls ref={this.quantityControl} />
                                {
                                    !this.state.animate ?

                                        <p><span className="addCartItem-button btn btn-sm height-auto px-4 py-3 btn-primary" onClick={this.handleAddCartItem}>Add To Cart</span></p>
                                        :
                                        <Success />
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <ProductStore />
            </div>
        )

    }
}

ProductPage.contextType = Context;

export default ProductPage;