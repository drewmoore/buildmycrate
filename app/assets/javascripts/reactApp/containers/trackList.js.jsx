import { connect } from 'react-redux';
import TrackList   from '../components/trackList.js.jsx';

const mapStateToProps = state => ({
  tracks:     Object.values(state.tracks.items),
  search:     state.search,
  isFetching: state.tracks.isFetching
});

const TrackListContainer = connect(mapStateToProps)(TrackList);

export default TrackListContainer;
