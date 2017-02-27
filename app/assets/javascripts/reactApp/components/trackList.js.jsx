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
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      id:           PropTypes.number.isRequired,
      title:        PropTypes.string,
      bpm:          PropTypes.number,
      keySignature: PropTypes.string
    }).isRequired
  ).isRequired
};

export default TrackList;
