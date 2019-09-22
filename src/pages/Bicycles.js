import React from "react";
import ProductCard from "../components/ProductCard";
import { MDBCardGroup, MDBRow, MDBCol } from 'mdbreact';


// import Tandem from "../../public/bicycles/tandembike.jpg";

const Bicycles = ()=> (
    <MDBCardGroup>
    
        <ProductCard image={'/bicycles/tandembike.jpg'}/>
        <ProductCard image={'/bicycles/beachcruiserbike.jpeg'}/>
        <ProductCard image={'/bicycles/kidsbike.jpg'}/>
        <ProductCard image={'/bicycles/mountainbike.jpg'}/>
        <ProductCard image={'/bicycles/roadbike.jpg'}/>

        </MDBCardGroup>

);

export default Bicycles;