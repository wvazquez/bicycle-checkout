// This component require a setState function and quantity to be passed as props.

import React from 'react';


const QuantityControls = ({ setQuantity, quantity }) => {
    return (
        <div className="mb-5">
            <div className="input-group mb-3" style={{ maxWidth: "200px" }}>
                <div className="input-group-prepend" name='decrease' onClick={() => { (quantity > 0) ? setQuantity(quantity - 1) : setQuantity(quantity) }}>
                    <button className="btn btn-outline-primary js-btn-minus" type="button">&minus;</button>
                </div>
                <input readOnly type="text" className="form-control text-center border mr-0" value={quantity} placeholder=""
                    aria-label="Example text with button addon" aria-describedby="button-addon1" />

                <div className="input-group-append" name="increase" onClick={() => setQuantity(quantity + 1)}>
                    <button className="btn btn-outline-primary js-btn-plus" type="button">&#43;</button>
                </div>
            </div>
        </div>
    );
}

export default QuantityControls;