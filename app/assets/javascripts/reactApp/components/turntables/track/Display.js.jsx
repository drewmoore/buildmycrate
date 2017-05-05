import React       from 'react';
import TrackSchema from '../../../schemas/track.js.es6';

const TurntablesTrackDisplay = ({ imageDisplay, title, bpmDisplay, artist, keyDisplay }) => (
  <div className="row">
    <div className="col-xs-3">
      <img className="turntable-track-image" src={imageDisplay} alt="Track" />
    </div>
    <div className="col-xs-9">
      <div className="row">
        <div className="col-xs-9 fat-bottom">
          <span>{title}</span>
        </div>
        <div className="col-xs-3 fat-bottom text-right">
          <span>{bpmDisplay}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-9">
          <span>{artist}</span>
        </div>
        <div className="col-xs-3 text-right">
          <span>{keyDisplay}</span>
        </div>
      </div>
    </div>
  </div>
);

TurntablesTrackDisplay.propTypes    = TrackSchema.PropTypes.isRequired;
TurntablesTrackDisplay.defaultProps = TrackSchema.Defaults;

export default TurntablesTrackDisplay;
