import TurntablesActions from '../actions/turntables.js.es6';

// Initialize two turnatables.
const defaultState = { items: { 0: { id: 0 }, 1: { id: 1 } } };

const associateTrack = (state, action) => {
  const newState = Object.assign({}, state);
  newState.items[action.turntableId].trackId = action.trackId;
  return newState;
};

const turntables = (state = defaultState, action = {}) => {
  switch (action.type) {
    case TurntablesActions.ASSOCIATE_TRACK:
      return associateTrack(state, action);
    default:
      return state;
  }
};

export default turntables;
