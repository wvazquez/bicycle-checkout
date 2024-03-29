import React from 'react';

import ProductCard from '../ProductCard';
import {products} from '../../data/bikerentals.json';

import './style.css';

const ProductStore = (props) => {
  // const placeholderImages = [
  //   '/bicycles/mountainbike.jpg',
  //   "/bicycles/roadbike.jpg",
  //   "/bicycles/tandembike.jpg",
  //   "/bicycles/kidsbike.jpg",
  //   "/bicycles/hybridbike.jpg",
  //   "/bicycles/beachcruiserbike.jpeg"
  // ];
  return (
  <div id="store" className="store py-5">
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-sm-6 text-center">
          <h1 className="text-capitalize section-title">{props.title}</h1>
        </div>
      </div>
      <div className="store-items row" id="store-items">
      {
            products.map((product, index) => {
                let {id,name,image,product_type, price} = product;
                if(product_type === 'bike'){
                    return (
                        <ProductCard price={price} name={name} key={id} id={id} image={image}/>
                    );
                }else{
                  return null;
                }
            })
        }
      </div>
    </div>
  </div>
)};

export default ProductStore;