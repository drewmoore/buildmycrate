import { toCollection }  from './helpers/index.js.es6';
import TracksActions     from '../actions/tracks.js.es6';
import TurntablesActions from '../actions/turntables.js.es6';

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
        items:      toCollection(action.tracks, { turntableIds: [] }),
      };
      break;
    default:
      newState = { isFetching: true };
  }
  return Object.assign({}, state, newState);
};

const associateTurntable = (state, action) => {
  const newState = Object.assign({}, state);
  const track    = newState.items[action.trackId];
  if (track.turntableIds.indexOf(action.turntableId) === -1) {
    track.turntableIds.push(action.turntableId);
  }
  return newState;
};

const tracks = (state = defaultState, action = {}) => {
  switch (action.type) {
    case TracksActions.FETCH_TRACKS:
      return fetchTrackState(state, action);
    case TurntablesActions.ASSOCIATE_TRACK:
      return associateTurntable(state, action);
    default:
      return state;
  }
};

export default tracks;
