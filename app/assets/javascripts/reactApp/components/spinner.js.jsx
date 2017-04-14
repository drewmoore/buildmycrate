import React, { PropTypes } from 'react';
import Images               from '../helpers/images.js.es6';

const Spinner = ({ isSpinning, optionalClasses = '' }) => (
  <img
    src={Images.spinner()}
    className={`spinner ${optionalClasses} ${isSpinning ? 'spinning' : ''}`}
    alt="Loading Indicator"
  />
);

Spinner.propTypes = {
  isSpinning:      PropTypes.bool.isRequired,
  optionalClasses: PropTypes.string
};

Spinner.defaultProps = {
  optionalClasses: ''
};

export default Spinner;
