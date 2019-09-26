import React from "react";
import ProductCard from "../components/ProductCard";
import Jumbotron from '../components/Jumbotron';
import { products } from '../data/bikerentals.json';
import ProductStore from '../components/ProductStore';
const Bicycles = () => (
    <>
        <Jumbotron />
        <ProductStore />
    </>

);



export default Bicycles;