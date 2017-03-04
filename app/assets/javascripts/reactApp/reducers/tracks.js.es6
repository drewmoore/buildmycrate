import TracksActions from '../actions/tracks.js.es6';

const defaultState = {
  isFetching: false,
  items:      []
};

let id = 1;

const assignId = (track) => {
  id += 1;
  return Object.assign(track, { id });
};

const fetchTrackState = (state, action) => {
  let newState;
  switch (action.status) {
    case 'success':
      newState = {
        isFetching:  false,
        items:       action.tracks.map(assignId),
        lastUpdated: action.receivedAt
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
