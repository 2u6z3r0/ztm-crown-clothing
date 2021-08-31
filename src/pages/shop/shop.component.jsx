import CollectionOverview from 'components/collection-overview/collection-overview.component';
import CollectionPage from 'pages/collection/collection.component';
import React from 'react';
import { Route } from 'react-router-dom';

// INFO we get match, location,history props passed to shopPage by Route in appPage
const ShopPage = ({ match }) => {
  return (
    <div className="preview">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route
        exact
        path={`${match.path}/:collection`}
        component={CollectionPage}
      />
    </div>
  );
};

export default ShopPage;
