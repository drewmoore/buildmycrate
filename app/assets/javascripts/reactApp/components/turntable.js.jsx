import React           from 'react';
import TurntableSchema from '../schemas/turntable.js.es6';

const Turntable = ({ track }) => (
  <div>
    {track.title}
  </div>
);

Turntable.propTypes    = TurntableSchema.PropTypes.isRequired;
Turntable.defaultProps = TurntableSchema.Defaults;

export default Turntable;
