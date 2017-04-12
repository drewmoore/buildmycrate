import TurntablesActions from '../actions/turntables.js.es6';

// Initialize two turnatables.
const defaultState  = { items: { 0: { id: 0 }, 1: { id: 1 } } };
const findTurntable = (state, action) => (state.items[action.turntableId]);

const associateTrack = (state, action) => {
  const newState = Object.assign({}, state);
  findTurntable(newState, action).trackId = action.trackId;
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
