export const addItemToCart = (cartItems, cartItemToAdd) => {
  // check if item already in the cart
  const itemAlreadyExists = cartItems.find(
    (item) => item.id === cartItemToAdd.id
  );
  if (itemAlreadyExists) {
    return cartItems.map((item) => {
      if (item.id === cartItemToAdd.id) {
        item.qty += 1;
      }
      return item;
    });
  }
  return [...cartItems, { ...cartItemToAdd, qty: 1 }];
};
