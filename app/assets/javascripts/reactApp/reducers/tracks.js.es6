import { toCollection } from './helpers/index.js.es6';
import TracksActions    from '../actions/tracks.js.es6';

const defaultState = {
  isFetching: false,
  items:      {}
};

const findTrack = (state, action) => (state.items[action.trackId]);

const fetchTrackState = (state, action) => {
  let newState;
  switch (action.status) {
    case 'success':
      newState = {
        isFetching: false,
        items:      toCollection(action.tracks),
      };
      break;
    default:
      newState = { isFetching: true };
  }
  return Object.assign({}, state, newState);
};

const fetchAudioState = (state, action) => {
  const newState  = Object.assign({}, state);
  const track     = findTrack(newState, action);
  switch (action.status) {
    case 'success':
      track.isFetching = false;
      track.audioUrl   = action.audioUrl;
      break;
    default:
      track.isFetching = true;
      break;
  }
  return newState;
};

const tracks = (state = defaultState, action = {}) => {
  switch (action.type) {
    case TracksActions.FETCH_TRACKS:
      return fetchTrackState(state, action);
    case TracksActions.FETCH_AUDIO:
      return fetchAudioState(state, action);
    default:
      return state;
  }
};

export default tracks;
