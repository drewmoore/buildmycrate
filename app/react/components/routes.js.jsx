/*
 * Client-side routes and corresponding components defined. These paths must match
 * routes defined on the server. This component must be a direct child of Provider.
 * Ignore linter requiring specific props definition for `history` object.
 */
/* eslint-disable react/forbid-prop-types */
import React, { PropTypes }          from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Home                          from './home.js.jsx';
import SearchResults                 from './search/Results.js.jsx';

const Routes = ({ history }) => (
  <Router history={history}>
    <Route path="/">
      <IndexRoute component={Home} />
      <Route path="search" component={SearchResults} />
    </Route>
  </Router>
);

Routes.propTypes = {
  history: PropTypes.object.isRequired
};

export default Routes;
