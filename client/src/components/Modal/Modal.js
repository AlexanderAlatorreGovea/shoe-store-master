import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import './Modal.scss';

import { clearItemFromCart } from '../../redux/cart/cart-actions';

const Modal = ({ hideModal, open, cartItem, clearItem }) => open ? ReactDOM.createPortal(
  <React.Fragment>
    <div id={ open ? 'is-visible' : '' } className="cd-popup" role="alert">
        <div className="cd-popup-container">
            <p>Are you sure you want to delete all sizes?</p>
            <ul className="cd-buttons">
                <li><a onClick={() => {clearItem(cartItem); hideModal(); }} href="#0">Yes</a></li>
                <li><a onClick={hideModal} href="#0">No</a></li>
            </ul>
            <a href="#0" onClick={hideModal} className="cd-popup-close img-replace">Close</a>
        </div> 
    </div> 
  </React.Fragment>, document.body
) : null;

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item))
});

export default connect(
  null,
  mapDispatchToProps
)(Modal);
