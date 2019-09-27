import React from 'react'
import './style.css';

const Loader = () => (
    <div className="loader-container show-flex">
        <img className="loader" src="/images/icons/loader.svg" alt="loader image" />
    </div>
);

const Success = ()=> (
            <div className="success-container show-flex">
                <div className="success">
                    <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" /><path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
                    <p>Added to Cart</p>
                </div>
            </div>
);

export {
    Loader,
    Success
}