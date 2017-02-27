import { connect } from 'react-redux';
import TrackList   from '../components/trackList.js.jsx';

// Replace with Ajax call and results, most likely.
const getTracks = (search = {}) => (
  [
    { keySignature: 'C',  bpm: 120, title: 'Friday Im in Love', id: 1 },
    { keySignature: 'C',  bpm: 120, title: 'Lateralus', id: 2 },
    { keySignature: 'Am', bpm: 120, title: 'Losing my Religion', id: 3 }
  ].filter(track => (
    track.keySignature === search.key_signature && track.bpm === parseInt(search.bpm, 10)
  ))
);
const mapStateToProps       = state => ({ tracks: getTracks(state.search) });
const SearchResultTrackList = connect(mapStateToProps, null)(TrackList);

export default SearchResultTrackList;
