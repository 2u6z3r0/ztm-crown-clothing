import CollectionPreview from 'components/collection-preview/collection-preview.component';
import React from 'react';
import { connect } from 'react-redux';
import selectCollections from 'redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';

const ShopPage = ({ collections }) => {
  return (
    <div className="preview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

// INFO createStructuredSelector automatically passes state to all selectors
const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
