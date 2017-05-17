import React from 'react';

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

export default TurntablesTrackDisplay;
