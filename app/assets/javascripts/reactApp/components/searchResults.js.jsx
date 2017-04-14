import React                   from 'react';
import TracksListContainer     from '../containers/tracks/List.js.es6';
import TurntablesListContainer from '../containers/turntables/List.js.es6';

const SearchResults = () => (
  <div>
    <TracksListContainer />
    <TurntablesListContainer />
  </div>
);

export default SearchResults;
