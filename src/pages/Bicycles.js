import React from "react";
import ProductCard from "../components/ProductCard";
import { MDBCardGroup, MDBRow, MDBCol } from 'mdbreact';
import {products} from '../data/bikerentals.json';
const Bicycles = ()=> (
    <MDBCardGroup>
        {
            products.map(product => {
                let {id,name,image,product_type} = product;
                let price = formatMoney(product.price);
                if(product_type === 'bike'){
                    return (
                        <ProductCard price={price} name={name} key={id} image={image}/>
                    );
                }
            })
        }
        


        </MDBCardGroup>

);

const formatMoney = (number) => number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

export default Bicycles;