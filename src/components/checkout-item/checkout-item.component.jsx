import React from 'react';
import { connect } from 'react-redux';

import {
  addItemToCart,
  clearCartItem,
  removeCartItem,
} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({
  cartItem,
  addItemToCartAction,
  clearCartItemAction,
  removeCartItemAction,
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeCartItemAction(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCartAction(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => clearCartItemAction(cartItem.id)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearCartItemAction: (itemId) => dispatch(clearCartItem(itemId)),
  addItemToCartAction: (item) => dispatch(addItemToCart(item)),
  removeCartItemAction: (item) => dispatch(removeCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
