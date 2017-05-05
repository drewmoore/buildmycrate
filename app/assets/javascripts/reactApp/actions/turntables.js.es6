export default class TurntablesActions {
  static get ASSOCIATE_TRACK()   { return 'ASSOCIATE_TRACK_TO_TURNTABLE'; }
  static get PLAY()              { return 'PLAY_TURNTABLE'; }
  static get PAUSE()             { return 'PAUSE_TURNTABLE'; }
  static get SET_BASE_POSITION() { return 'TURNTABLE_SET_BASE_POSITION'; }

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

  // For a user adjusting the track position or current time.
  static setBasePosition({ id, newTime, audio }) {
    if (audio) { audio.currentTime = newTime; }
    return {
      type: this.SET_BASE_POSITION,
      id,
      newTime
    };
  }
}
