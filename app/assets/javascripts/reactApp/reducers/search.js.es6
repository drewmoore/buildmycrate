import SearchActions from '../actions/search.js.es6';

const search = (initialState = {}) => (
  (state = initialState.search || {}, action = {}) => {
    switch (action.type) {
      case SearchActions.UPDATE_SEARCH:
        return action.search;
      default:
        return state;
    }
  }
);

export default search;
