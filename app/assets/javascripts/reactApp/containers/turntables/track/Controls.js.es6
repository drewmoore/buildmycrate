import { connect } from 'react-redux';
import TurntablesTrackControls from '../../../components/turntables/track/Controls.js.jsx';
import TurntablesActions       from '../../../actions/turntables.js.es6';
import { mapTrackToProps, mapTrackToDispatch } from '../../helpers/tracks.js.es6';

const mapStateToProps = (state, ownProps) => mapTrackToProps(ownProps);

const mapDispatchToProps = (dispatch, ownProps) => (
  Object.assign(
    mapTrackToDispatch(dispatch, ownProps),
    {
      play() {
        dispatch(TurntablesActions.play({ id: ownProps.turntableId, audio: ownProps.audio }));
      },
      pause() {
        dispatch(TurntablesActions.pause({ id: ownProps.turntableId, audio: ownProps.audio }));
      }
    }
  )
);

const TurntablesTrackControlsContainer = connect(
  mapStateToProps, mapDispatchToProps
)(TurntablesTrackControls);

export default TurntablesTrackControlsContainer;
