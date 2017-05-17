import React  from 'react';
import Images from '../helpers/images.js.es6';

const Spinner = ({ isSpinning, optionalClasses = '' }) => (
  <img
    src={Images.spinner()}
    className={`spinner ${optionalClasses} ${isSpinning ? 'spinning' : ''}`}
    alt="Loading Indicator"
  />
);

export default Spinner;
