const search = (state = {}, action = {}) => {
  switch (action.type) {
    case 'UPDATE_SEARCH':
      return action.search;
    default:
      return state;
  }
};

export default search;
