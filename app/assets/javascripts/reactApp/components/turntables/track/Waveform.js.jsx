import React, { Component } from 'react';
import TrackSchema          from '../../../schemas/track.js.es6';
import TrackProgressTimer   from '../../../timers/track/progress.js.es6';

// The component that displays a "progress bar" as a turntable's audio plays.
class TurntablesTrackWaveform extends Component {
  constructor(props) {
    super(props);
    // Define selectors for the waveform container and progress indicator. These
    // are used in template and in progress timer's internal methods.
    this.containerId = `waveform-container-for-${this.props.turntableId}`;
    this.indicatorId = `waveform-progress-for-${this.props.turntableId}`;
  }

  componentWillReceiveProps(nextProps) {
    // Start or stop the track time elapsed timer based on whether or not the
    // track is playing.
    if (this.timer) { this.timer.startOrStop(nextProps.isPlaying); }
  }

  // After the component updates, check if there is a new audio source. If so,
  // initialize a new timer to expand the track progress indicator as the audio
  // plays. This must occur after component renders, since the timer's initialization
  // requires a container element's width to determine the progress interval.
  // The timer is set as a property on the component, as it is not used globally.
  componentDidUpdate(prevProps) {
    if (
      this.props.audioUrl     !== prevProps.audioUrl ||
      this.props.basePosition !== prevProps.basePosition
    ) {
      this.timer = new TrackProgressTimer(this.containerId, this.indicatorId, this.props.audio);
    }
  }

  componentWillUnmount() {
    // Clear the timer on unmounting component.
    if (this.timer) { this.timer.stop(); }
  }

  render() {
    return (
      <div className="row">
        <div
          id={this.containerId}
          className="col-xs-12 waveform-container"
        >
          {this.props.playable &&
            <div className="relative">
              <div
                id={this.indicatorId}
                className="turntable-waveform-progress"
              />
              <img
                className="turntable-track-waveform-image"
                alt="Track Waveform"
                src={this.props.waveformUrl}
                onClick={e => this.props.waveformClick(e)}
              />
            </div>
          }
        </div>
      </div>
    );
  }
}

TurntablesTrackWaveform.propTypes    = TrackSchema.PropTypes.isRequired;
TurntablesTrackWaveform.defaultProps = TrackSchema.Defaults;

export default TurntablesTrackWaveform;
