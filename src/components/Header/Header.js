import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => (
    <div>
        <header>
            <div class="logo">
                <Link to="/">freshgear</Link>
            </div>
            <div class="menu">
                <Link to="about">About</Link>
                <Link to="products">New Arrival</Link>
                <Link to="new-arrivals">All Products</Link>
            <Link to="#" className="cart-link">Cart<span>4</span></Link>
            </div>
        </header>
  </div>
);

export default Header;