import React from "react";
import ProductCard from "../components/ProductCard";
import { MDBCol } from 'mdbreact';


// import Tandem from "../../public/bicycles/tandembike.jpg";

const Bicycles = ()=> (
    <MDBCol>

    <ProductCard image={'/bicycles/tandembike.jpg'}/>
    <ProductCard image={'/bicycles/beachcruiserbike.jpeg'}/>
    <ProductCard image={'/bicycles/kidsbike.jpg'}/>
    <ProductCard image={'/bicycles/mountainbike.jpg'}/>
    <ProductCard image={'/bicycles/roadbike.jpg'}/>
    </MDBCol>

);

export default Bicycles;