import CartActionTypes from './cart-types';

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item//{...item, chosenSize: [...chosenSize] }
}); 
 
export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const removeSize = (cartItem, item, idx) => ({
  type: CartActionTypes.REMOVE_SIZE,
  payload: cartItem,
  payload_two: item,
  payload_three: idx
});

export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});