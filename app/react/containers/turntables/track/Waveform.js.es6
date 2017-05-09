import { connect }             from 'react-redux';
import { mapTrackToProps }     from '../../helpers/tracks.js.es6';
import TurntablesTrackWaveform from '../../../components/turntables/track/Waveform.js.jsx';
import TurntablesActions       from '../../../actions/turntables.js.es6';

const mapStateToProps = (state, ownProps) => mapTrackToProps(ownProps);

// Handle the user clicking the waveform. This allows the audio position to be
// adjusted manually.
const mapDispatchToProps = (dispatch, ownProps) => ({
  waveformClick(event) {
    const $waveform     = $(event.target);
    const audio         = ownProps.audio;
    const positionRatio = event.nativeEvent.offsetX / $waveform.width();
    const newTime       = audio.duration * positionRatio;
    dispatch(TurntablesActions.setBasePosition({ id: ownProps.turntableId, newTime, audio }));
  }
});

const TurntablesTrackWaveformContainer = connect(
  mapStateToProps, mapDispatchToProps
)(TurntablesTrackWaveform);

export default TurntablesTrackWaveformContainer;
