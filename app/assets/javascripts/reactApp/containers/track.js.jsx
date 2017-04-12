import { connect }         from 'react-redux';
import Track               from '../components/track.js.jsx';
import { mapTrackToProps, mapTrackToDispatch } from './helpers/tracks.js.es6';

const mapStateToProps = (state, ownProps) => {
  const props = {
    turntables: Object.values(state.turntables.items),
  };
  return Object.assign(props, mapTrackToProps(ownProps));
};

const mapDispatchToProps = (dispatch, ownProps) => mapTrackToDispatch(dispatch, ownProps);

const TrackContainer = connect(mapStateToProps, mapDispatchToProps)(Track);

export default TrackContainer;
