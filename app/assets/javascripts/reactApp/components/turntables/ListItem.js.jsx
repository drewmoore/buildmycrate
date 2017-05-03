import React, { Component }             from 'react';
import TurntablesTrackDisplayContainer  from '../../containers/turntables/track/Display.js.es6';
import TurntablesTrackTimeContainer     from '../../containers/turntables/track/Time.js.es6';
import TurntablesTrackWaveformContainer from '../../containers/turntables/track/Waveform.js.es6';
import TurntablesTrackControlsContainer from '../../containers/turntables/track/Controls.js.es6';
import TurntableSchema                  from '../../schemas/turntable.js.es6';

const newAudioElement = (url) => {
  const $audio  = $('<audio>');
  $audio.attr('src', url);
  return $audio[0];
};

class TurntablesListItem extends Component {
  componentWillReceiveProps(nextProps) {
    // Conditionally initialize or update an audio element to be attached to
    // component. This cannot be a prop or it will be overwritten and playback
    // interrupted.
    if (!this.audio && nextProps.track.audioUrl) {
      this.audio = newAudioElement(this.props.track.audioUrl);
    }
    if (this.audio && this.audio.src !== nextProps.track.audioUrl) {
      this.audio.src = nextProps.track.audioUrl;
      this.audio.load();
    }
  }

  render() {
    return (
      <div className="col-xs-12 col-md-6">
        <div className={`row turntable-container ${this.props.optionalClasses}`}>
          <div className="col-xs-12 section console">
            <TurntablesTrackDisplayContainer  {...this.props.track} />
            <TurntablesTrackTimeContainer     {...this.props.track} turntableId={this.props.id} isPlaying={this.props.isPlaying} audio={this.audio} />
            <TurntablesTrackWaveformContainer {...this.props.track} />
            <TurntablesTrackControlsContainer {...this.props.track} turntableId={this.props.id} audio={this.audio} />
          </div>
        </div>
      </div>
    );
  }
}

TurntablesListItem.propTypes    = TurntableSchema.PropTypes.isRequired;
TurntablesListItem.defaultProps = TurntableSchema.Defaults;

export default TurntablesListItem;
