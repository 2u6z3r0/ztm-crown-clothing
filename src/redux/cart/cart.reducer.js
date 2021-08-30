import { addItemToCart } from './cart.utils';

const { cartActionTypes } = require('./cart.actionTypes');

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};
const cartReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...currentState,
        hidden: !currentState.hidden,
      };

    case cartActionTypes.ADD_ITEM:
      return {
        ...currentState,
        cartItems: addItemToCart(currentState.cartItems, action.payload),
      };

    default:
      return currentState;
  }
};

export default cartReducer;
