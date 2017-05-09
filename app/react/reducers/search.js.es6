import SearchActions from '../actions/search.js.es6';

const search = (state = {}, action = {}) => {
  switch (action.type) {
    case SearchActions.UPDATE_SEARCH:
      return action.search;
    case '@@router/LOCATION_CHANGE':
      // TODO: switch to permitted params
      return action.payload.query;
    default:
      return state;
  }
};

export default search;
