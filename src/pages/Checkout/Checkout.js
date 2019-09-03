import React from 'react';

import './Checkout.scss';
import image from '../../assets/adidas-yeezy-boost-350-white.png';


const Checkout = () => (
<section className="content-area checkout-page">
    <div className="container">
        <div className="box-container">
            <h1>Check Out</h1>
            <hr />
            <div className="checkout-grid">
            <div className="forms">
                <h3>Shipping Information</h3>
                <form>
                <div className="form-group">
                    <label for="fname">First Name</label>
                    <input id="fname" type="text" name="fname"></input>
                </div>
                <div className="form-group">
                    <label for="lname">Last Name</label>
                    <input id="lname" type="text" name="lname"></input>
                </div>
                <div className="form-group">
                    <label for="address1">Address #1</label>
                    <input id="address1" type="text" name="address1"></input>
                </div>
                <div className="form-group">
                    <label for="address2">Address #2</label>
                    <input id="address2" type="text" name="address2"></input>
                </div>
                <div className="form-group">
                    <label for="city">City</label>
                    <input id="city" type="text" name="city"></input>
                </div>
                <div className="form-group">
                    <label for="zipcode">Zipcode</label>
                    <input id="zipcode" type="text" name="zipcode"></input>
                </div>
                <div className="form-group">
                    <label for="country">Country</label>
                    <input id="country" type="text" name="country"></input>
                </div>
                </form>

                <h3>Billing Information</h3>
                <form>
                <div className="form-group">
                    <label for="fname">First Name</label>
                    <input id="fname" type="text" name="fname"></input>
                </div>
                <div className="form-group">
                    <label for="lname">Last Name</label>
                    <input id="lname" type="text" name="lname"></input>
                </div>
                <div className="form-group">
                    <label for="address1">Address #1</label>
                    <input id="address1" type="text" name="address1"></input>
                </div>
                <div className="form-group">
                    <label for="address2">Address #2</label>
                    <input id="address2" type="text" name="address2"></input>
                </div>
                <div className="form-group">
                    <label for="city">City</label>
                    <input id="city" type="text" name="city"></input>
                </div>
                <div className="form-group">
                    <label for="zipcode">Zipcode</label>
                    <input id="zipcode" type="text" name="zipcode"></input>
                </div>
                <div className="form-group">
                    <label for="country">Country</label>
                    <input id="country" type="text" name="country"></input>
                </div>
                </form>
            </div>
            <div className="totals">
                <div className="items">
                <span>Items:</span>10
                </div>
                <div className="tax">
                <span>Tax:</span>$8
                </div>
                <div className="shipping">
                <span>Shipping:</span>$10
                </div>
                <div className="price">
                <span>Total Price:</span>$2400
                </div>
            </div>
            </div>
        </div>
    </div>
</section>
);



export default Checkout;