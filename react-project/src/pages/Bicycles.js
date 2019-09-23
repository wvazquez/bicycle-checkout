import React from "react";
import ProductCard from "../components/ProductCard";
import {products} from '../data/bikerentals.json';
const Bicycles = ()=> (
    <>
        {
            products.map(product => {
                let {id,name,image,product_type} = product;
                let price = formatMoney(product.price);
                if(product_type === 'bike'){
                    return (
                        <ProductCard price={price} name={name} key={id} id={id} image={image}/>
                    );
                }
            })
        }
        

</>

);

const formatMoney = (number) => number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });


export default Bicycles;