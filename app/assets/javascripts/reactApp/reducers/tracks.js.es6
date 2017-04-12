import update           from 'immutability-helper';
import { toCollection } from './helpers/index.js.es6';
import TracksActions    from '../actions/tracks.js.es6';

const defaultState = {
  isFetching: false,
  items:      {}
};

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
      return fetchTrackState(state, action);
    case TracksActions.FETCH_AUDIO:
      return fetchAudioState(state, action);
    default:
      return state;
  }
};

export default tracks;
