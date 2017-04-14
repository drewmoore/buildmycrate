import { connect }             from 'react-redux';
import { mapTrackToProps }     from '../../helpers/tracks.js.es6';
import TurntablesTrackWaveform from '../../../components/turntables/track/Waveform.js.jsx';

const mapStateToProps = (state, ownProps) => mapTrackToProps(ownProps);

const TurntablesTrackWaveformContainer = connect(mapStateToProps)(TurntablesTrackWaveform);

export default TurntablesTrackWaveformContainer;
