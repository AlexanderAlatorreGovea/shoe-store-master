import React from 'react';

import './Checkout.scss';
import image from '../../assets/adidas-yeezy-boost-350-white.png';


const Checkout = () => (
<section class="content-area checkout-page">
    <div class="container">
        <div class="box-container">
            <h1>Check Out</h1>
            <hr />
            <div class="checkout-grid">
            <div class="forms">
                <h3>Shipping Information</h3>
                <form>
                <div class="form-group">
                    <label for="fname">First Name</label>
                    <input id="fname" type="text" name="fname"></input>
                </div>
                <div class="form-group">
                    <label for="lname">Last Name</label>
                    <input id="lname" type="text" name="lname"></input>
                </div>
                <div class="form-group">
                    <label for="address1">Address #1</label>
                    <input id="address1" type="text" name="address1"></input>
                </div>
                <div class="form-group">
                    <label for="address2">Address #2</label>
                    <input id="address2" type="text" name="address2"></input>
                </div>
                <div class="form-group">
                    <label for="city">City</label>
                    <input id="city" type="text" name="city"></input>
                </div>
                <div class="form-group">
                    <label for="zipcode">Zipcode</label>
                    <input id="zipcode" type="text" name="zipcode"></input>
                </div>
                <div class="form-group">
                    <label for="country">Country</label>
                    <input id="country" type="text" name="country"></input>
                </div>
                </form>

                <h3>Billing Information</h3>
                <form>
                <div class="form-group">
                    <label for="fname">First Name</label>
                    <input id="fname" type="text" name="fname"></input>
                </div>
                <div class="form-group">
                    <label for="lname">Last Name</label>
                    <input id="lname" type="text" name="lname"></input>
                </div>
                <div class="form-group">
                    <label for="address1">Address #1</label>
                    <input id="address1" type="text" name="address1"></input>
                </div>
                <div class="form-group">
                    <label for="address2">Address #2</label>
                    <input id="address2" type="text" name="address2"></input>
                </div>
                <div class="form-group">
                    <label for="city">City</label>
                    <input id="city" type="text" name="city"></input>
                </div>
                <div class="form-group">
                    <label for="zipcode">Zipcode</label>
                    <input id="zipcode" type="text" name="zipcode"></input>
                </div>
                <div class="form-group">
                    <label for="country">Country</label>
                    <input id="country" type="text" name="country"></input>
                </div>
                </form>
            </div>
            <div class="totals">
                <div class="items">
                <span>Items:</span>10
                </div>
                <div class="tax">
                <span>Tax:</span>$8
                </div>
                <div class="shipping">
                <span>Shipping:</span>$10
                </div>
                <div class="price">
                <span>Total Price:</span>$2400
                </div>
            </div>
            </div>
        </div>
    </div>
</section>
);



export default Checkout;