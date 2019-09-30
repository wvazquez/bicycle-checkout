import React from "react";
import {  HashLink as Link } from 'react-router-hash-link';
import './style.css';

const Jumbotron = ()=>(
    <div className="jumbotron jumbotron-fluid jumbotron-bicycle">
      <div className="container">
        <h1 className="text-capitalize">Reserve. Pick-up.<strong className="jumbotron-title ">Explore!</strong></h1>
        <Link smooth={true} to="/#store" className="btn jumbotron-link text-uppercase my-2">View rentals</Link>
      </div>
    </div>
);

export default Jumbotron;