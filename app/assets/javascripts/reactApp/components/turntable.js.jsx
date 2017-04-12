import React                   from 'react';
import TurntableTrackContainer from '../containers/turntableTrack.js.es6';
import TurntableSchema         from '../schemas/turntable.js.es6';

const Turntable = ({ id, track }) => (
  <div className="col-xs-12 col-md-6">
    <div className={`row turntable-container ${id === 0 ? 'alpha' : 'omega'}`}>
      <div className="col-xs-12 section console">
        <TurntableTrackContainer turntableId={id} {...track} />
      </div>
    </div>
  </div>
);

Turntable.propTypes    = TurntableSchema.PropTypes.isRequired;
Turntable.defaultProps = TurntableSchema.Defaults;

export default Turntable;
