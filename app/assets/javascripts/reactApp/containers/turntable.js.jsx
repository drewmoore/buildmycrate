import { connect } from 'react-redux';
import { mapTrackToProps, timeDisplay } from './helpers/tracks.js.es6';
import Images      from '../helpers/images.js.es6';
import Turntable   from '../components/turntable.js.jsx';

const mapStateToProps = (state, ownProps) => {
  const track = state.tracks.items[ownProps.trackId] || {};
  const props = {
    imageDisplay:        track.image || Images.trackDefault(),
    keyDisplay:          !track.key ? '' : `Key: ${track.key}`,
    timeElapsedDisplay:  timeDisplay(),
    timeDurationDisplay: timeDisplay(track.duration)
  };
  return Object.assign(props, mapTrackToProps(track));
};

const TurntableContainer = connect(mapStateToProps)(Turntable);

export default TurntableContainer;
