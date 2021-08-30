const { cartActionTypes } = require('./cart.actionTypes');

export const toggleCartDropDown = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItemToCart = (cartItem) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: cartItem,
});

export const clearCartItem = (cartItemId) => ({
  type: cartActionTypes.CLEAR_ITEM,
  payload: { id: cartItemId },
});

export const removeCartItem = (cartItem) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: cartItem,
});
