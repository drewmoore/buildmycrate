import React               from 'react';
import TracksListContainer from '../containers/tracks/List.js.jsx';
import TurntablesContainer from '../containers/turntables.js.jsx';

const SearchResults = () => (
  <div>
    <TracksListContainer />
    <TurntablesContainer />
  </div>
);

export default SearchResults;
