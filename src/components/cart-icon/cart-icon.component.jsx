import { ReactComponent as ShoppingIcon } from 'assets/shopping-bag.svg';
import './cart-icon.styles.scss';

import React from 'react';
import { connect } from 'react-redux';
import { toggleCartDropDown } from 'redux/cart/cart.actions';
import { selectCartItemsCount } from 'redux/cart/cart.selectors';

function CartIcon({ toggleCartDropDownAction, itemCount }) {
  console.log(`I have to render again , itemcount${itemCount}`);
  return (
    <div className="cart-icon" onClick={toggleCartDropDownAction}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropDownAction: () => dispatch(toggleCartDropDown()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
