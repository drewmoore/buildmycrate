/*
 * Class for managing the timer that expands a visual progress bar while
 * the track is playing.
 */
export default class TrackProgressTimer {
  constructor(containerId, indicatorId, audio) {
    this.containerWidth = $(`#${containerId}`).width();
    this.$indicator     = $(`#${indicatorId}`);
    this.audio          = audio;
    this.clock          = null;
    // The '$indicator' element is essentially a visual representation of this timer,
    // therefore reset its width on new initialization.
    this.updateProgress();
  }

  get interval() {
    return parseInt(this.containerWidth / this.audio.duration, 10);
  }

  start() {
    clearInterval(this.clock);
    this.clock = setInterval(() => this.updateProgress(), this.interval);
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

  updateProgress() {
    // Update the DOM. Expand width of 'progress bar' relative to the current
    // position in the track audio.
    const progressRatio = this.audio.currentTime / this.audio.duration;
    this.$indicator.width(this.containerWidth * progressRatio);
  }
}
