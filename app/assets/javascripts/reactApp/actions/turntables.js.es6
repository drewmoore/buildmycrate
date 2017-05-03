export default class TurntablesActions {
  static get ASSOCIATE_TRACK() { return 'ASSOCIATE_TRACK_TO_TURNTABLE'; }
  static get PLAY()            { return 'PLAY_TURNTABLE'; }
  static get PAUSE()           { return 'PAUSE_TURNTABLE'; }

  static associateTrack({ turntableId, trackId }) {
    return {
      type: this.ASSOCIATE_TRACK,
      turntableId,
      trackId
    };
  }

  static play({ id, audio }) {
    if (audio) { audio.play(); }
    return {
      type: this.PLAY,
      id
    };
  }

  static pause({ id, audio }) {
    if (audio) { audio.pause(); }
    return {
      type: this.PAUSE,
      id
    };
  }
}
