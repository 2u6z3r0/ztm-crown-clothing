import React from 'react';
import { connect } from 'react-redux';

import { removeCartItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, removeCartItemAction }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => removeCartItemAction(cartItem.id)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeCartItemAction: (itemId) => dispatch(removeCartItem(itemId)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
