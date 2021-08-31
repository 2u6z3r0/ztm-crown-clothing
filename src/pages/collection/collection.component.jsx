import './collection.styles.scss';

import React from 'react';
// import { useParams } from 'react-router-dom';
import { selectCollection } from 'redux/shop/shop.selectors';
import { connect } from 'react-redux';
import CollectionItem from 'components/collection-item/collection-item.component';

const CollectionPage = ({ collection }) => {
  // INFO we can access params using 'useParams' or match.params
  // we can use userParams like below are we can access match.params
  // const { category } = useParams();
  // const { collection } = match.params;
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// INFO ownProps are components props
// INFO selectCollection selector is using concept currying
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collection)(state),
});

export default connect(mapStateToProps)(CollectionPage);
