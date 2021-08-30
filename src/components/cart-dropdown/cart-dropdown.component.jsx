import CartItem from 'components/cart-item/cart-item.component';
import CustomButton from 'components/custom-button/custom-button.component';
import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from 'redux/cart/cart.selectors';
import './cart-dropdown.styles.scss';

function CartDropdown({ cartItems }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>GO CHECKOUT</CustomButton>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
