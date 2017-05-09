import update           from 'immutability-helper';
import { toCollection } from './helpers/index.js.es6';
import TracksActions    from '../actions/tracks.js.es6';

// Defaults for tracks state.
const defaultState = {
  isFetching: false,
  items:      {}
};

const fetchTracksState = (state, action) => {
  let newState;
  // Defaults for track item in collection.
  const defaultTrackState = { isFetching: false };
  switch (action.status) {
    case 'success':
      newState = {
        isFetching: false,
        items:      toCollection(action.tracks, defaultTrackState),
      };
      break;
    default:
      newState = { isFetching: true };
  }
  return update(state, { $merge: newState });
};

const fetchAudioState = (state, action) => {
  let updatedTrack;
  switch (action.status) {
    case 'success':
      updatedTrack = { isFetching: false, audioUrl: action.audioUrl };
      break;
    default:
      updatedTrack = { isFetching: true };
      break;
  }
  return update(state, { items: { [action.trackId]: { $merge: updatedTrack } } });
};

const tracks = (state = defaultState, action = {}) => {
  switch (action.type) {
    case TracksActions.FETCH_TRACKS:
      return fetchTracksState(state, action);
    case TracksActions.FETCH_AUDIO:
      return fetchAudioState(state, action);
    default:
      return state;
  }
};

export default tracks;
