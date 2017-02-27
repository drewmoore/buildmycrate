import React, { PropTypes } from 'react';

const Track = ({ title, bpm, keySignature }) => (
  <li>{title}: {bpm}, {keySignature}</li>
);

Track.propTypes = {
  title:        PropTypes.string,
  bpm:          PropTypes.number,
  keySignature: PropTypes.string
};

export default Track;
