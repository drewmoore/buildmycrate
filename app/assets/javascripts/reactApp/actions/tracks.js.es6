export default class TracksActions {
  static FETCH_TRACKS() { return 'FETCH_TRACKS'; }

  static fetch(search = {}) {
    const self   = this;
    const action = { type: self.FETCH_TRACKS, search };
    return (dispatch) => {
      dispatch(action);
      // TODO: Replace hardcoded URL:
      const url = '/tracks.json';
      return $.ajax(url, search).success(data =>
        dispatch(self.receive(search, data))
      );
    };
  }

  static receive(search, data) {
    const self = this;
    const action = {
      type:       self.FETCH_TRACKS,
      search,
      status:     'success',
      tracks:     data.tracks,
      receivedAt: Date.now()
    };
    return action;
  }
}
