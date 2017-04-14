import { connect } from 'react-redux';
import Turntable   from '../components/turntable.js.jsx';

const mapStateToProps = (state, ownProps) => ({
  track:           state.tracks.items[ownProps.trackId] || {},
  // Set classes to override bootstrap padding to make container elements flush with track list.
  optionalClasses: (ownProps.id === 0 ? 'alpha' : 'omega')
});

const TurntableContainer = connect(mapStateToProps)(Turntable);

export default TurntableContainer;
