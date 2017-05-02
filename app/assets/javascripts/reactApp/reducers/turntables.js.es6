import update            from 'immutability-helper';
import TurntablesActions from '../actions/turntables.js.es6';
import { toCollection }  from './helpers/index.js.es6';

// Initialize two turnatables.
const defaultState  = { items: toCollection([{ isPlaying: false }, { isPlaying: false }]) };

const updateTurnTable = (id, state, newState) => (
  update(state, { items: { [id]: { $merge: newState } } })
);

const associateTrack = (state, action) => (
  updateTurnTable(action.turntableId, state, { trackId: action.trackId })
);

const play = (state, action) => (
  updateTurnTable(action.id, state, { isPlaying: true })
);

const pause = (state, action) => (
  updateTurnTable(action.id, state, { isPlaying: false })
);

const turntables = (state = defaultState, action = {}) => {
  switch (action.type) {
    case TurntablesActions.ASSOCIATE_TRACK:
      return associateTrack(state, action);
    case TurntablesActions.PLAY:
      return play(state, action);
    case TurntablesActions.PAUSE:
      return pause(state, action);
    default:
      return state;
  }
};

export default turntables;
