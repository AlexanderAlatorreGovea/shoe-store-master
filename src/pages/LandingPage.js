import React from 'react';

import './LandingPage.scss';
import image from '../assets/adidas-yeezy-boost-350-white.png';

const LandingPage = () => (
    <div>
    <section id="CartPopupRoot" className="active">
        <div>
            <div className="title">My Cart</div>
        </div>
        <div className="cart-items">
            <div className="item">
                <img src={image} />
                <div className="delete-btn">
                    <div className="circle">X</div>
                </div>
            </div>
        </div>
        <div className="product-total">
            <div className="title">Total</div>
            <div className="number">x4</div>
        </div>
        <div className="price-total">
            <div className="title">Total</div>
            <div className="number">$3,000</div>
        </div>
        <div className="checkout">Checkout</div>
    </section>
    
    <section class="content-area home-page">
        <div class="top-section">
            <div class="product">
            <div class="circle">
                <img src={image} />
            </div>
            </div>
            <div class="titles">
            <h3>Yeezy</h3>
            <h1>Boost 350</h1>
            </div>
        </div>
    </section>
  </div>
);



export default LandingPage;