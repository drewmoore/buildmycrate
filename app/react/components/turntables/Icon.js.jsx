import React  from 'react';
import Images from '../../helpers/images.js.es6';

const TurntablesIcon = ({ side, loadTurntable }) => (
  <img
    src={side === 'left' ? Images.turntableLeft() : Images.turntableRight()}
    className="track-button clickable"
    alt={`Button to load ${side} turntable`}
    data-hook="turntable-icon"
    onClick={loadTurntable}
  />
);

export default TurntablesIcon;
