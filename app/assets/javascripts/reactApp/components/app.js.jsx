import React                 from 'react';
import Header                from '../containers/header.js.jsx';
import SearchResultTrackList from '../containers/searchResultTrackList.js.jsx';
import Search                from '../containers/search.js.jsx';

const App = () => (
  <div>
    <Header />
    <SearchResultTrackList />
    <Search />
  </div>
);

export default App;
