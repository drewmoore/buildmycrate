export default class TurntablesActions {
  static get ASSOCIATE_TRACK() { return 'ASSOCIATE_TRACK_TO_TURNTABLE'; }

  static associateTrack({ turntableId, trackId }) {
    return {
      type: this.ASSOCIATE_TRACK,
      turntableId,
      trackId
    };
  }
}
