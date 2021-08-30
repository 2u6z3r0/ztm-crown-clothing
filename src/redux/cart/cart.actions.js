const { cartActionTypes } = require('./cart.actionTypes');

export const toggleCartDropDown = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItemToCart = (cartItem) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: cartItem,
});

export const removeCartItem = (cartItemId) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: { id: cartItemId },
});
