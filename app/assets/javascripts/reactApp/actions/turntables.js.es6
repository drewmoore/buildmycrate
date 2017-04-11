/* global SC */ // Allow soundcloud's SDK as a global. It is loaded via the gem used by server.
export default class TurntablesActions {
  static get ASSOCIATE_TRACK() { return 'ASSOCIATE_TRACK_TO_TURNTABLE'; }
  static get FETCH_AUDIO()     { return 'TURNTABLE_FETCH_AUDIO'; }

  static associateTrack({ turntable, track }) {
    return {
      type:        this.ASSOCIATE_TRACK,
      turntableId: turntable.id,
      trackId:     track.id
    };
  }

  static fetchAudio({ turntable, track }) {
    const self      = this;
    const action    = { type: self.FETCH_AUDIO, turntableId: turntable.id };
    const streamUrl = new URL(track.streamUrl).pathname;
    return (dispatch) => {
      dispatch(action);
      return new Promise(resolve => (
        SC.stream(streamUrl, data => resolve(data))
      ))
      .then(data => dispatch(self.receiveAudio(data, action)));
    };
  }

  // TODO: enable better error handling.
  static receiveAudio(data, action) {
    return Object.assign(action, { status: 'success', audioUrl: data.url });
  }
}
