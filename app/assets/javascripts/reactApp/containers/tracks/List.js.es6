import { connect } from 'react-redux';
import TracksList   from '../../components/tracks/List.js.jsx';

const mapStateToProps = state => ({
  tracks:     Object.values(state.tracks.items),
  search:     state.search,
  isFetching: state.tracks.isFetching
});

const TracksListContainer = connect(mapStateToProps)(TracksList);

export default TracksListContainer;
