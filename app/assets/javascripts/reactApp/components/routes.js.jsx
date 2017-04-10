/*
 * Client-side routes and corresponding components defined. These paths must match
 * routes defined on the server. This component must be written as a class with a
 * `render` method, rather than as a pure function. The reason for this is that
 * the Router component must be a direct child of Provider. Being written as a class allows the
 * render function to be called directly so as not to render Routes as a child of Provider.
 *
 * Ignore linters requiring specific props definition for `history` object and for
 * component written as pure function.
 */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute }   from 'react-router';
import Home                            from './home.js.jsx';
import SearchResults                   from './searchResults.js.jsx';

export default class Routes extends Component {
  static get propTypes() {
    return { history: PropTypes.object.isRequired };
  }

  render() {
    return (
      <Router history={this.props.history}>
        <Route path="/">
          <IndexRoute component={Home} />
          <Route path="search" component={SearchResults} />
        </Route>
      </Router>
    );
  }
}
