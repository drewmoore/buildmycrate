import React, { Component }             from 'react';
import TurntablesTrackDisplayContainer  from '../../containers/turntables/track/Display.js.es6';
import TurntablesTrackTimeContainer     from '../../containers/turntables/track/Time.js.es6';
import TurntablesTrackWaveformContainer from '../../containers/turntables/track/Waveform.js.es6';
import TurntablesTrackControlsContainer from '../../containers/turntables/track/Controls.js.es6';

const newAudioElement = (url) => {
  const audio = document.createElement('audio');
  audio.attributes.src = url;
  return audio;
};

class TurntablesListItem extends Component {
  // Conditionally initialize or update an audio element to be attached to
  // component. This cannot be a prop or part of the state or it will be overwritten and playback
  // interrupted. State must be immutable. Audio elements must be mutable.
  componentWillReceiveProps(nextProps) {
    // New audio element.
    if (!this.audio && nextProps.track.audioUrl) {
      this.audio = newAudioElement(this.props.track.audioUrl);
    }
    // Update audio src and reload.
    if (this.audio && this.audio.src !== nextProps.track.audioUrl) {
      this.audio.src = nextProps.track.audioUrl;
      this.audio.load();
    }
  }

  componentWillUnmount() {
    // Reset audio to stop playing.
    if (this.audio) { this.audio.load(); }
  }

  render() {
    return (
      <div className="col-xs-12 col-md-6">
        <div className={`row turntable-container ${this.props.optionalClasses}`}>
          <div className="col-xs-12 section console">
            <TurntablesTrackDisplayContainer  {...this.props.track} />
            <TurntablesTrackTimeContainer
              {...this.props.track} turntableId={this.props.id} audio={this.audio}
              isPlaying={this.props.isPlaying} basePosition={this.props.basePosition}
            />
            <TurntablesTrackWaveformContainer
              {...this.props.track} turntableId={this.props.id} audio={this.audio}
              isPlaying={this.props.isPlaying} basePosition={this.props.basePosition}
            />
            <TurntablesTrackControlsContainer
              {...this.props.track} turntableId={this.props.id} audio={this.audio}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TurntablesListItem;
