import './collection-overview.styles.scss';

import React from 'react';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from 'redux/shop/shop.selectors';
import CollectionPreview from 'components/collection-preview/collection-preview.component';
import { connect } from 'react-redux';

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

// INFO createStructuredSelector automatically passes state to all selectors
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
