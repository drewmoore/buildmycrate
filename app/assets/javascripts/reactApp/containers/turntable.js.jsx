import React       from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  track: state.tracks.items[ownProps.trackId] || {}
});

const Turntable = connect(mapStateToProps)(({ track }) => (
  <div>
    {track.title}
  </div>
));

export default Turntable;
