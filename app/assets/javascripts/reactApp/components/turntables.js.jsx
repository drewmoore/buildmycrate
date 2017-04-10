import React, { PropTypes } from 'react';
import TurntableContainer   from '../containers/turntable.js.jsx';
import TurntableSchema      from '../schemas/turntable.js.es6';

const Turntables = ({ turntables }) => (
  <div>
    {turntables.map(turntable => (
      <TurntableContainer key={turntable.id} {...turntable} />
    ))}
  </div>
);

Turntables.propTypes = {
  turntables: PropTypes.arrayOf(TurntableSchema.PropTypes.isRequired).isRequired
};

export default Turntables;
