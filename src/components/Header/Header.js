import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PopUp from '../PopUp/PopUp';

import './Header.scss';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          toggleCart: false
        };
    }

    toggleCart = () => {
        this.setState({
            toggleCart: !this.state.toggleCart
        })
    }

    render() {
        const { toggleCart } = this.state;
        return (
            <div>
                <header>
                    <div class="logo">
                        <Link to="/">freshgear</Link>
                    </div>
                    <div class="menu">
                        <Link to="about">About</Link>
                        <Link to="products">New Arrivals</Link>
                        <Link to="new-arrivals">All Products</Link>
                        <Link to="login">Sign In</Link>
                        <Link onClick={this.toggleCart} className="cart-link">Cart<span>4</span></Link>
                    </div>
                </header>
                <PopUp
                 toggleCart={toggleCart}
                 />
            </div>
        );
    }
}

export default Header;


