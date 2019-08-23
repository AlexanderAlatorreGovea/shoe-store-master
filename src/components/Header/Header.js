import React from 'react';
import './Header.scss';

const Header = () => (
    <div>
        <header>
            <div class="logo">
                <a href="/">freshgear</a>
            </div>
            <div class="menu">
                <a href="/about">About</a>
                <a href="/products/new-arrivals">New Arrival</a>
                <a href="/products">All Products</a>
            <a href="#" className="cart-link">Cart<span>4</span></a>
            </div>
        </header>
  </div>
);

export default Header;