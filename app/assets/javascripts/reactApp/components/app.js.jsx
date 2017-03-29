import React                 from 'react';
import { Route }             from 'react-router';
import Header                from '../containers/header.js.jsx';
import SearchResultTrackList from '../containers/searchResultTrackList.js.jsx';
import Search                from '../containers/search.js.jsx';

const App = () => (
  <div>
    <Route exact path="/react"  component={Header} />
    <Route exact path="/react"  component={Search} />
    <Route exact path="/search" component={SearchResultTrackList} />
  </div>
);

export default App;
