import React                   from 'react';
import TurntableTrackContainer from '../../containers/turntableTrack.js.es6';
import TurntableSchema         from '../../schemas/turntable.js.es6';

const TurntablesListItem = ({ id, track, optionalClasses }) => (
  <div className="col-xs-12 col-md-6">
    <div className={`row turntable-container ${optionalClasses}`}>
      <div className="col-xs-12 section console">
        <TurntableTrackContainer turntableId={id} {...track} />
      </div>
    </div>
  </div>
);

TurntablesListItem.propTypes    = TurntableSchema.PropTypes.isRequired;
TurntablesListItem.defaultProps = TurntableSchema.Defaults;

export default TurntablesListItem;
