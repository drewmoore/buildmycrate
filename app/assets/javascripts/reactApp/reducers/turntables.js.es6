import TurntablesActions from '../actions/turntables.js.es6';

// Initialize two turnatables.
const defaultState  = { items: { 0: { id: 0, isFetching: false, audioUrl: null }, 1: { id: 1, isFetching: false, audioUrl: null } } };
const findTurntable = (state, action) => (state.items[action.turntableId]);

const associateTrack = (state, action) => {
  const newState = Object.assign({}, state);
  findTurntable(newState, action).trackId = action.trackId;
  return newState;
};

const fetchAudioState = (state, action) => {
  const newState  = Object.assign({}, state);
  const turntable = findTurntable(newState, action);
  switch (action.status) {
    case 'success':
      turntable.isFetching = false;
      turntable.audioUrl   = action.audioUrl;
      break;
    default:
      turntable.isFetching = true;
      break;
  }
  return newState;
};

const turntables = (state = defaultState, action = {}) => {
  switch (action.type) {
    case TurntablesActions.ASSOCIATE_TRACK:
      return associateTrack(state, action);
    case TurntablesActions.FETCH_AUDIO:
      return fetchAudioState(state, action);
    default:
      return state;
  }
};

export default turntables;
