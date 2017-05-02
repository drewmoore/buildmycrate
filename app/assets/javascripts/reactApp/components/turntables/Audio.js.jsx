import React       from 'react';
import TrackSchema from '../../schemas/track.js.es6';

// Audio element used to hold audio data and for HTML audio API controls.
const TurntableAudio = ({ playable, turntableId, audioUrl }) => (
  <span>
    {playable &&
      <audio id={`audio-for-turntable-${turntableId}`} data-hook="track-audio">
        <source src={audioUrl} />
      </audio>
    }
  </span>
);

TurntableAudio.propTypes    = TrackSchema.PropTypes.isRequired;
TurntableAudio.defaultProps = TrackSchema.Defaults;

export default TurntableAudio;
