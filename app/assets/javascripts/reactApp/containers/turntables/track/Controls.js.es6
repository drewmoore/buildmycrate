import { connect } from 'react-redux';
import TurntablesTrackControls from '../../../components/turntables/track/Controls.js.jsx';
import { mapTrackToProps, mapTrackToDispatch } from '../../helpers/tracks.js.es6';

const turntableAudio = ownProps => document.getElementById(`audio-for-turntable-${ownProps.turntableId}`);

const mapStateToProps = (state, ownProps) => { return mapTrackToProps(ownProps); };

// TODO: use dispatcher with events to set further properties on track instances.
const mapDispatchToProps = (dispatch, ownProps) => (
  Object.assign(
    mapTrackToDispatch(dispatch, ownProps),
    {
      play() {
        const audio = turntableAudio(ownProps);
        if (audio) { audio.play(); }
      },
      pause() {
        const audio = turntableAudio(ownProps);
        if (audio) { audio.pause(); }
      }
    }
  )
);

const TurntablesTrackControlsContainer = connect(mapStateToProps, mapDispatchToProps)(TurntablesTrackControls);

export default TurntablesTrackControlsContainer;
