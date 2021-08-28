import CustomButton from "components/custom-button/custom-button.component";
import React from "react";
import "./cart-dropdown.styles.scss";

function CartDropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>GO CHECKOUT</CustomButton>
    </div>
  );
}

export default CartDropdown;
