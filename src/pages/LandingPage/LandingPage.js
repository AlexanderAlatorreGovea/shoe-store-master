import React from 'react';

import './LandingPage.scss';
import image from '../../assets/adidas-yeezy-boost-350-white.png';

import PopUp from '../../components/PopUp/PopUp';

const LandingPage = () => (
    <div>
    <PopUp />
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