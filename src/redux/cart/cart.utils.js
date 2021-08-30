export const addItemToCart = (cartItems, cartItemToAdd) => {
  // check if item already in the cart
  const itemAlreadyExists = cartItems.find(
    (item) => item.id === cartItemToAdd.id
  );
  if (itemAlreadyExists) {
    return cartItems.map((item) => {
      if (item.id === cartItemToAdd.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeCartItem = (cartItems, removeItem) => {
  const itemAlreadyExists = cartItems.find((item) => item.id === removeItem.id);
  console.log('exists', itemAlreadyExists);
  if (itemAlreadyExists) {
    if (itemAlreadyExists.quantity === 1) {
      return cartItems.filter((item) => item.id !== removeItem.id);
    }
    return cartItems.map((item) => {
      if (item.id === removeItem.id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
  }
};
