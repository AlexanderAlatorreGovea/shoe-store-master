import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './PopUp.scss';

const PopUp = ({ toggleCart, cartItems, itemCount, toggleCartHandler, history }) => {
    return (
        <div
            id="cart-popup"
            className={`${toggleCart && 'active'}`}
            >
                <div className="cart-title">
                    <div className="title">My Cart</div>
                </div>
                <div className="cart-items">
                {cartItems.length ? (
                    cartItems.map(cartItem => (
                        <div className="item-container">
                            <div className="item">
                                <img src={cartItem.image} />
                                <div className="delete-btn">
                                    <div className="circle">X</div>
                                </div>
                            </div>
                        </div>
                    ))
                    ) : (
                    <span className="empty-message">Your cart is empty</span>
                )}
                </div>
                <div className="product-total">
                    <div className="inside-container">
                        <div className="title">Total</div>
                        <div className="number">x{itemCount}</div>
                    </div>
                </div>
                <div className="price-total">
                    <div className="inside-container">
                        <div className="title">Total</div>
                        <div className="number"> $3,000</div>
                    </div>
                </div>
                    <div onClick={toggleCartHandler} className="checkout">
                        <div className="title">
                            <Link
                             to={{ 
                                pathname: '/checkout', 
                                state: itemCount
                              }}
                            onClick={() => history.push('/checkout')} 
                            style={{ color: 'black', textDecoration: 'none' }} 
                            >
                            Checkout
                            </Link>
                        </div>
                        <i className="arrow down cart icon" ></i>
                    </div>
            </div>
    )
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});


export default withRouter(connect(mapStateToProps)(PopUp));