import { ReactComponent as ShoppingIcon } from "assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

import React from "react";
import { connect } from "react-redux";
import { toggleCartDropDown } from "redux/cart/cart.actions";

function CartIcon({ toggleCartDropDownAction }) {
  return (
    <div className="cart-icon" onClick={toggleCartDropDownAction}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropDownAction: () => dispatch(toggleCartDropDown()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
