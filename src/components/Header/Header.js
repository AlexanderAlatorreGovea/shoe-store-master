import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PopUp from '../PopUp/PopUp';
import { selectCartItemsCount, selectCartTotal } from '../../redux/cart/cart-selectors';

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
        const { itemCount, total } = this.props;
        return (
            <div>
                <header> 
                    <div className="logo">
                        <Link to="/">freshgear</Link>
                    </div>
                    <div className="menu">
                        <Link to="about">About</Link>
                        <Link to="products">New Arrivals</Link>
                        <Link to="new-arrivals">All Products</Link>
                        <Link to="login">Sign In</Link>
                        <div onClick={this.toggleCart} className="cart-link">Cart<span>{itemCount}</span></div>
                    </div>
                </header>
                <PopUp 
                 toggleCart={toggleCart}
                 itemCount={itemCount}
                 toggleCartHandler={this.toggleCart}
                 total={total}
                />
            </div>
        );
    }
};

const mapStateToProps = createStructuredSelector({
    total: selectCartTotal,
    itemCount: selectCartItemsCount
});
  

export default connect(mapStateToProps)(Header);


