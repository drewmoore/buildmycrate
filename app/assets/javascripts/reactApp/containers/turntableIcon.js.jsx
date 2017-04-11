import { connect }       from 'react-redux';
import TurntableIcon     from '../components/turntableIcon.js.jsx';
import TurntablesActions from '../actions/turntables.js.es6';

const mapStateToProps = (state, ownProps) => ({
  side: ownProps.id % 2 === 0 ? 'left' : 'right'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadTurntable() {
    const association = {
      turntable: ownProps,
      track:     { id: ownProps.trackId, streamUrl: ownProps.trackStreamUrl }
    };
    dispatch(TurntablesActions.associateTrack(association));
    dispatch(TurntablesActions.fetchAudio(association));
  }
});

const TurntableIconContainer = connect(mapStateToProps, mapDispatchToProps)(TurntableIcon);

export default TurntableIconContainer;
