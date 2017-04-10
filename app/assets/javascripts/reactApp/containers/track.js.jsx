import { connect } from 'react-redux';
import Track       from '../components/track.js.jsx';

const mapStateToProps = (state, ownProps) => ({
  // Assign the track's id to the turntable in component for assignment on click.
  turntables: Object.values(state.turntables.items).map(item =>
    Object.assign({}, item, { trackId: ownProps.id })
  )
});

const TrackContainer = connect(mapStateToProps)(Track);

export default TrackContainer;
