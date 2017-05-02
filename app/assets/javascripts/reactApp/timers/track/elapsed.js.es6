/*
 * Class for managing the timer that displays seconds elapsed in a track while
 * the track is playing.
 */
export default class TrackElapsedTimer {
  constructor(method) {
    this.clock    = null;
    this.interval = 1000;
    this.method   = method;
  }

  start() {
    clearInterval(this.clock);
    this.clock = setInterval(this.method, this.interval);
  }

  stop() {
    clearInterval(this.clock);
    this.clock = null;
  }

  startOrStop(isPlaying) {
    // Temporary
    if (!this.clock && isPlaying) {
      this.start();
    } else if (this.clock && !isPlaying) {
      this.stop();
    }
  }
}
