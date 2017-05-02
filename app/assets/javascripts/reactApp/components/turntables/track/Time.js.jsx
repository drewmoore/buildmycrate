import React, { Component } from 'react';
import { timeDisplay }      from '../../../containers/helpers/tracks.js.es6';
import TrackSchema          from '../../../schemas/track.js.es6';
import TrackElapsedTimer    from '../../../timers/track/elapsed.js.es6';

class TurntablesTrackTime extends Component {
  constructor(props) {
    super(props);
    // Attach the timer for track time elapsed to the component, since not used globally.
    // Dispatching time updates superfluous.
    this.timer = new TrackElapsedTimer(() => this.updateTimeElapsed());
    this.state = { timeElapsed: 0 };
  }

  componentWillReceiveProps(nextProps) {
    // Start or stop the track time elapsed timer based on whether or not the
    // track is playing.
    this.timer.startOrStop(nextProps.isPlaying);
  }

  componentWillUnmount() {
    // Clear the timer on unmounting component.
    this.timer.stop();
  }

  updateTimeElapsed() {
    // Update the time display by getting the audio element for the turntable, getting
    // the current time, and converting those milliseconds to seconds. Set this in
    // the component's internal state, separate from the store.
    const audio = document.getElementById(`audio-for-turntable-${this.props.turntableId}`);
    if (!audio) { return; }
    this.setState({ timeElapsed: audio.currentTime * 1000 });
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 text-right">
          {this.props.playable &&
            <div>
              <small data-hook="time-elapsed">{timeDisplay(this.state.timeElapsed)} </small>
              <small> | </small>
              <small> {this.props.timeDurationDisplay}</small>
            </div>
          }
        </div>
      </div>
    );
  }
}

TurntablesTrackTime.propTypes    = TrackSchema.PropTypes.isRequired;
TurntablesTrackTime.defaultProps = TrackSchema.Defaults;

export default TurntablesTrackTime;
