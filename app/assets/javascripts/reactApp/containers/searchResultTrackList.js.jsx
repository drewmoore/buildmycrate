import { connect } from 'react-redux';
import TrackList   from '../components/trackList.js.jsx';

const mapStateToProps       = state => ({ tracks: state.tracks.items });
const SearchResultTrackList = connect(mapStateToProps, null)(TrackList);

export default SearchResultTrackList;
