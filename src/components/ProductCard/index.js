import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';

import './style.css';

const CardExample = (props) => {
  return (
    <MDBCard className="card-container">
        <MDBCardImage src={props.image} alt="MDBCard image cap" className="img-fluid card-image" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">{props.name} - {props.price}</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up
            the bulk of the card's content.
          </MDBCardText>
          <MDBBtn color="primary" size="md">
            add to cart
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
  )
}

export default CardExample;