import CartItem from 'components/cart-item/cart-item.component';
import CustomButton from 'components/custom-button/custom-button.component';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleCartDropDown } from 'redux/cart/cart.actions';
import { selectCartItems } from 'redux/cart/cart.selectors';
import './cart-dropdown.styles.scss';

// dispatch is being passed by connect as we haven't supplied mapDispatchToProps
function CartDropdown({ cartItems, history, dispatch }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your Cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          dispatch(toggleCartDropDown());
          history.push('/checkout');
        }}
      >
        GO CHECKOUT
      </CustomButton>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
