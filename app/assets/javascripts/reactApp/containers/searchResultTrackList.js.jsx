import { connect } from 'react-redux';
import TrackList   from '../components/trackList.js.jsx';

const mapStateToProps = state => ({
  tracks:     state.tracks.items,
  search:     state.search,
  isFetching: state.tracks.isFetching
});
const SearchResultTrackList = connect(mapStateToProps, null)(TrackList);

export default SearchResultTrackList;
