import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverviewContainer from "../../components/collection-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";
import { fetchCollectionStart } from "../../redux/shop/shop.actions";

const ShopPage = ({ fetchCollectionStart, match }) => {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);
  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispachToProps = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
});
export default connect(
  null,
  mapDispachToProps
)(ShopPage);
