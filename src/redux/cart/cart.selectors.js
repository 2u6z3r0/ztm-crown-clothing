// INFO
// Selectors are composable. They can be used as input to other selectors
import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

// INFO
// when we can below selector it will internally call the dependancy selectors
// in this case selectCartItemsCount -> selectCartItem -> selectCart
// that is why we pass 'state' to selectCartItemsCount(state)
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((count, item) => count + item.quantity, 0)
);
