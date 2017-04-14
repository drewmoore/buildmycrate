import update            from 'immutability-helper';
import TurntablesActions from '../actions/turntables.js.es6';
import { toCollection }  from './helpers/index.js.es6';

// Initialize two turnatables.
const defaultState  = { items: toCollection([{}, {}]) };

const associateTrack = (state, action) => {
  const newState = { trackId: action.trackId };
  return update(state, { items: { [action.turntableId]: { $merge: newState } } });
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
