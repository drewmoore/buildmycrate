import React, { PropTypes } from 'react';
import Track                from './track.js.jsx';

const TrackList = ({ tracks }) => (
  <ul>
    {tracks.map(track =>
      <Track key={track.id} {...track} />
    )}
  </ul>
);

TrackList.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape(Track.propTypes).isRequired).isRequired
};

export default TrackList;
