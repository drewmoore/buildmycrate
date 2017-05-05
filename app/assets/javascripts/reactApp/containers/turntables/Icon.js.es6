import { connect }       from 'react-redux';
import TurntablesIcon    from '../../components/turntables/Icon.js.jsx';
import TracksActions     from '../../actions/tracks.js.es6';
import TurntablesActions from '../../actions/turntables.js.es6';

const mapStateToProps = (state, ownProps) => ({
  side: ownProps.id % 2 === 0 ? 'left' : 'right'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadTurntable() {
    const track = { id: ownProps.trackId, streamUrl: ownProps.trackStreamUrl };
    const association = {
      turntableId: ownProps.id,
      trackId:     track.id
    };
    dispatch(TracksActions.fetchAudio(track));
    dispatch(TurntablesActions.associateTrack(association));
  }
});

const TurntablesIconContainer = connect(mapStateToProps, mapDispatchToProps)(TurntablesIcon);

export default TurntablesIconContainer;
