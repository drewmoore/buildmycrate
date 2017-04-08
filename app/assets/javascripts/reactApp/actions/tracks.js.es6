import fetch  from 'isomorphic-fetch';
import Routes from '../routes.js.es6';

export default class TracksActions {
  static FETCH_TRACKS() { return 'FETCH_TRACKS'; }

  static fetch(search = {}) {
    const self   = this;
    const action = { type: self.FETCH_TRACKS };
    return (dispatch) => {
      dispatch(action);
      // TODO: merge tracks#index and search
      return fetch(Routes.tracks.index({ search }))
        .then(response => response.json())
        .then(json => dispatch(self.receive(json)));
    };
  }

  // TODO: enable better error handling.
  static receive(data) {
    const self = this;
    const action = {
      type:   self.FETCH_TRACKS,
      status: 'success',
      tracks: data.tracks || []
    };
    return action;
  }
}
