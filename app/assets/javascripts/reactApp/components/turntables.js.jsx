import React, { PropTypes } from 'react';
import TurntableContainer   from '../containers/turntable.js.jsx';
import TurntableSchema      from '../schemas/turntable.js.es6';

const Turntables = ({ turntables }) => (
  <div className="row">
    <div className="col-xs-12 col-lg-offset-1 col-lg-10">
      <div className="row">
        {turntables.map(turntable => (
          <TurntableContainer key={turntable.id} {...turntable} />
        ))}
      </div>
    </div>
  </div>
);

Turntables.propTypes = {
  turntables: PropTypes.arrayOf(TurntableSchema.PropTypes.isRequired).isRequired
};

export default Turntables;
