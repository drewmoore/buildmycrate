import React, { PropTypes } from 'react';
import Images               from '../helpers/images.js.es6';

const TurntableIcon = ({ side, loadTurntable }) => (
  <img
    src={side === 'left' ? Images.turntableLeft() : Images.turntableRight()}
    className="track-button"
    alt={`Button to load ${side} turntable`}
    onClick={loadTurntable}
  />
);

TurntableIcon.propTypes = {
  side:          PropTypes.string.isRequired,
  loadTurntable: PropTypes.func.isRequired
};

export default TurntableIcon;
