import React from 'react';

import image from '../../assets/adidas-yeezy-boost-350-white.png';

import './PopUp.scss';

const PopUp = () => (
    <section
    id="cart-popup"
    className="active"
    >
        <div className="cart-title">
            <div className="title">My Cart</div>
        </div>
        <div className="cart-items">
            <div className="item-container">
                <div className="item">
                    <img src={image} />
                    <div className="delete-btn">
                        <div className="circle">X</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="product-total">
            <div className="inside-container">
                <div className="title">Total</div>
                <div className="number"> x4</div>
            </div>
        </div>
        <div className="price-total">
            <div className="inside-container">
                <div className="title">Total</div>
                <div className="number"> $3,000</div>
            </div>
        </div>
        <div className="checkout">
            <div className="title">Checkout</div>
            <span className="ti-shopping-cart" />
        </div>
    </section>
);

export default PopUp;