import React       from 'react';
import TrackSchema from '../../../schemas/track.js.es6';

const TurntablesTrackWaveform = ({ playable, waveformUrl }) => (
  <div className="row">
    <div className="col-xs-12 waveform-container">
      {playable &&
        <div className="relative">
          <div
            className="turntable-waveform-progress"
            data-hook="turntable-waveform-progress"
          />
          <img
            className="turntable-track-waveform-image"
            src={waveformUrl} alt="Track Waveform"
            data-hook="turntable-track-waveform"
          />
        </div>
      }
    </div>
  </div>
);

TurntablesTrackWaveform.propTypes    = TrackSchema.PropTypes.isRequired;
TurntablesTrackWaveform.defaultProps = TrackSchema.Defaults;

export default TurntablesTrackWaveform;
