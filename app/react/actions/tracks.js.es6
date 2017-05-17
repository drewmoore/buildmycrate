/* global SC */ // Allow soundcloud's SDK as a global. It is loaded via the gem used by server.
import fetch       from 'isomorphic-fetch';
import RouteHelper from '../helpers/routes.js.es6';

export default class TracksActions {
  static get FETCH_TRACKS() { return 'TRACKS_FETCH_TRACKS'; }
  static get FETCH_AUDIO()  { return 'TRACKS_FETCH_AUDIO'; }

  // Fetch tracks from search API.
  static fetch(search = {}) {
    const self   = this;
    const action = { type: self.FETCH_TRACKS };
    return (dispatch) => {
      dispatch(action);
      return fetch(RouteHelper.tracks.searchJSON({ search }))
        .then(response => response.json())
        .then(json => dispatch(self.receiveTracks(json)));
    };
  }

  // Fetch the audio data for streaming a specific track.
  static fetchAudio(track) {
    const self      = this;
    const action    = { type: self.FETCH_AUDIO, trackId: track.id };
    const streamUrl = new URL(track.streamUrl).pathname;
    return (dispatch) => {
      dispatch(action);
      return new Promise(resolve => (
        SC.stream(streamUrl, data => resolve(data))
      ))
      .then(data => dispatch(self.receiveAudio(track.id, data)));
    };
  }

  // Handle receiving of tracks from server.
  // TODO: enable better error handling.
  static receiveTracks(data) {
    return {
      type:   this.FETCH_TRACKS,
      status: 'success',
      tracks: data.tracks || []
    };
  }

  // Handle receiving of audio data for a track.
  // TODO: enable better error handling.
  static receiveAudio(trackId, data) {
    return {
      type:     this.FETCH_AUDIO,
      status:   'success',
      audioUrl: data.url,
      trackId,
    };
  }
}
