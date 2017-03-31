export default class TracksActions {
  static FETCH_TRACKS() { return 'FETCH_TRACKS'; }

  static fetch(search = {}) {
    const self   = this;
    const action = { type: self.FETCH_TRACKS };
    return (dispatch) => {
      dispatch(action);
      // TODO: Replace hardcoded URL:
      const url = '/tracks.json';
      return $.ajax(url, { data: search }).success(data =>
        dispatch(self.receive(data))
      );
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
