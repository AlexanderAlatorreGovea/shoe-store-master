import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart-actions';

import './ProductPage.scss';

const ProductPage = (props) => {
    const { item }  = props.location.state;
    const { addItem } = props;
    return (
        <div className="content-area product-single-page">
            <div className="product-imgs">
                <div className="product">
                <div className="circle">
                    <img src={item.image} />
                </div>
                </div>
            </div>
            <div className="product-detail" >
                <div className="titles">
                <div className="brand">
                    {item.brand}
                </div>
                <div className="product">
                    {item.alternative_title}
                </div>
                </div>
                <div className="details">
                    <p>{item.description}</p>
                <div id="ProductAddToCartRoot"></div>

                <div className="detail-section">
                    <div className="detail">
                    <input type="checkbox" id="delivery-dropdown" className="toggle" ></input>
                    <label className="title" for="delivery-dropdown">Delivery</label>
                    <div className="content">
                    <p className="">
                        The speeds that show are dependent on those made available by the seller.  

                        Standard -  Should arrive 3 to 10 business days after shipment
                        Expedited - Should arrive 3 to 6 business days after shipment
                        Second Day -  Should arrive 2 business days after shipment
                        Next Day - Should arrive by the end of business the day after shipment
                        Pick up - Pick up at our Doral Warehouse facility.
                    </p>
                    </div>
                </div>
                </div>

                <div className="detail-section">
                    <div className="detail">
                        <input type="checkbox" id="refund-dropdown" className="toggle"></input>
                        <label className="title" for="refund-dropdown">Refund</label>
                        <div className="content">
                        <p className="">
                            NEW! Accepting Returns
                            We accept returns for store credit, within 3 business days of receipt. Items must be tagged and in new/unworn condition. Read more here.

                            100% Authenticity, Guaranteed
                            We carefully inspect every shoe with a fine toothed comb, twice, to validate its authenticity, and to check for conditional/manufacturing issues to ensure all of our items are pristine . We stand behind every item we sell, so you can feel safe about buying. Learn more about our policies here.
                        </p>
                    </div>
                </div>
                </div>
                <button onClick={() => addItem(item)} className="add-to-cart-btn">
                    add to cart
                </button>
            </div>
        </div>
     </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});


export default connect(null, mapDispatchToProps)(ProductPage);

