import SearchActions from '../actions/search.js.es6';

const search = (state = {}, action = {}) => {
  switch (action.type) {
    case SearchActions.UPDATE_SEARCH:
      return action.search;
    default:
      return state;
  }
};

export default search;
