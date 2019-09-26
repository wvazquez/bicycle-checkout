import React from 'react';
import ZoomIcon from '@material-ui/icons/ZoomIn';

import {Link} from 'react-router-dom';
import './style.css';


const formatMoney = (number) => number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

export default function ProductCard(props) {

  return (
  
    <Link to={`/bicycles/${props.id}`} className="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item sweets">
          <div className="card">
            <div className="img-container">
              <img src={props.image} className="card-img-top store-img" alt={props.name}/>
              <span className="store-item-icon">
                <ZoomIcon/>
              </span>
            </div>
            <div className="card-body">
              <div className="card-text text-center text-capitalize">
                <h5 id="store-item-name">{props.name}</h5>
                <h5 className="store-item-value"><strong id="store-item-price" className="font-weight-bold">{formatMoney(props.price)}</strong></h5>
              </div>
            </div>
          </div>
        </Link>
  );
}