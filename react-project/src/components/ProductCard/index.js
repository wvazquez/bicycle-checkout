import React from 'react';

import {Link} from 'react-router-dom';
import './style.css';



export default function ProductCard(props) {

  return (
    <Link to={`/bicycles/${props.id}`} className="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item sweets">
          <div className="card">
            <div className="img-container">
              <img src={props.image} className="card-img-top store-img" alt={props.name}/>
              <span className="store-item-icon">
                <i className="fas fa-shopping-cart"></i>
              </span>
            </div>
            <div className="card-body">
              <div className="card-text d-flex justify-content-between text-capitalize">
                <h5 id="store-item-name">{props.name}</h5>
                <h5 className="store-item-value">$ <strong id="store-item-price" className="font-weight-bold">{props.price}</strong></h5>
              </div>
            </div>
          </div>
        </Link>
  );
}