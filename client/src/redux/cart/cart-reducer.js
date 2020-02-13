import CartActionTypes from './cart-types';
import { addItemToCart, removeItemFromCart, removeSize } from './cart-utils';

const INITIAL_STATE = {
  cartItems: []
}; 
 
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return { 
        ...state, 
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CartActionTypes.REMOVE_ITEM:
      return { 
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case CartActionTypes.REMOVE_SIZE:
      return { 
        ...state,
        cartItems: removeSize(state.cartItems, action.payload, action.payload_two, action.payload_three)
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem._id !== action.payload._id
        )
      };
    default:
      return state;
  }
};

export default cartReducer;