import { connect } from 'react-redux';
import Turntable   from '../components/turntable.js.jsx';

const mapStateToProps = (state, ownProps) => ({
  track: state.tracks.items[ownProps.trackId] || {}
});

const TurntableContainer = connect(mapStateToProps)(Turntable);

export default TurntableContainer;
