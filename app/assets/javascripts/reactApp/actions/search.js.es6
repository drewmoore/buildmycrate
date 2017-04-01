import { push } from 'react-router-redux';

export default class SearchActions {
  static UPDATE_SEARCH() { return 'UPDATE_SEARCH'; }

  static update(search = {}) {
    const self   = this;
    const action = { type: self.UPDATE_SEARCH, search };
    return (dispatch) => {
      // TODO: replace hardcoded url. Move to a path helper for params.
      dispatch(push(`/search?${$.param(search)}`));
      return action;
    };
  }
}
