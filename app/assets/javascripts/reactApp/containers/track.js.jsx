import { connect }         from 'react-redux';
import Track               from '../components/track.js.jsx';
import { mapTrackToProps } from './helpers/tracks.js.es6';

// Assign the track's id to the turntable in component for assignment on click.
const mapToTurntables = (state, ownProps) => (
  Object.values(state.turntables.items).map(item =>
    Object.assign({}, item, { trackId: ownProps.id })
  )
);

const mapStateToProps = (state, ownProps) => {
  const props = {
    turntables: mapToTurntables(state, ownProps),
  };
  return Object.assign(props, mapTrackToProps(ownProps));
};

const TrackContainer = connect(mapStateToProps)(Track);

export default TrackContainer;
