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
  return Object.assign({}, state, newState);
};

const tracks = (state = defaultState, action = {}) => {
  switch (action.type) {
    case TracksActions.FETCH_TRACKS:
      return fetchTrackState(state, action);
    default:
      return state;
  }
};

export default tracks;
