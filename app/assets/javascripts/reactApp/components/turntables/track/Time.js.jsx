import React       from 'react';
import TrackSchema from '../../../schemas/track.js.es6';

const TurntablesTrackTime = ({ playable, timeElapsedDisplay, timeDurationDisplay }) => (
  <div className="row">
    <div className="col-xs-12 text-right">
      {playable &&
        <div>
          <small data-hook="time-elapsed">{timeElapsedDisplay} </small>
          <small> | </small>
          <small> {timeDurationDisplay}</small>
        </div>
      }
    </div>
  </div>
);

TurntablesTrackTime.propTypes    = TrackSchema.PropTypes.isRequired;
TurntablesTrackTime.defaultProps = TrackSchema.Defaults;

export default TurntablesTrackTime;
