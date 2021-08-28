const { cartActionTypes } = require("./cart.actionTypes");

export const toggleCartDropDown = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});
