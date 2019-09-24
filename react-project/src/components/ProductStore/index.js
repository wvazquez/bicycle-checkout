import React from 'react';

import ProductCard from '../ProductCard';
import './style.css';

const ProductStore = () => (

  <div id="store" className="store py-5">
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-sm-6 text-center">
          <h1 className="text-capitalize">Bicycle <strong className="banner-title ">Rentals</strong></h1>
        </div>
      </div>

      <div className="store-items row" id="store-items">
          <ProductCard image="/bicycles/mountainbike.jpg" />
          <ProductCard image="/bicycles/roadbike.jpg" />
          <ProductCard image="/bicycles/tandembike.jpg" />
          <ProductCard image="/bicycles/kidsbike.jpg" />
          <ProductCard image="/bicycles/hybridbike.jpg" />
          <ProductCard image="/bicycles/beachcruiserbike.jpeg" />
        </div>
    </div>
  </div>
);

export default ProductStore;