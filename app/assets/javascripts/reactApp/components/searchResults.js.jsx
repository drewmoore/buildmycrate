import React                   from 'react';
import TracksListContainer     from '../containers/tracks/List.js.jsx';
import TurntablesListContainer from '../containers/turntables/List.js.jsx';

const SearchResults = () => (
  <div>
    <TracksListContainer />
    <TurntablesListContainer />
  </div>
);

export default SearchResults;
