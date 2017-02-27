import React                 from 'react';
import Header                from '../containers/header.js.jsx';
import SearchResultTrackList from '../containers/searchResultTrackList.js.jsx';
import Search                from '../containers/search.js.jsx';

const App = () => (
  <div className="row section">
    <div className="col-xs-12 col-lg-offset-2 col-lg-8">
      <Header />
      <SearchResultTrackList />
      <Search />
    </div>
  </div>
);

export default App;
