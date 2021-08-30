import CustomButton from 'components/custom-button/custom-button.component';
import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from 'redux/cart/cart.actions';
import './collection-item.styles.scss';

const CollectionItem = ({ item, addCartItemAction }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="wrapper">
        <div
          className="image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton onClick={() => addCartItemAction(item)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addCartItemAction: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
