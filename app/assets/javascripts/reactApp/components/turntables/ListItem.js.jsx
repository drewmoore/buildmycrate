import React                            from 'react';
import TurntablesTrackDisplayContainer  from '../../containers/turntables/track/Display.js.es6';
import TurntablesTrackTimeContainer     from '../../containers/turntables/track/Time.js.es6';
import TurntablesTrackWaveformContainer from '../../containers/turntables/track/Waveform.js.es6';
import TurntablesTrackControlsContainer from '../../containers/turntables/track/Controls.js.es6';
import TurntableSchema                  from '../../schemas/turntable.js.es6';

const TurntablesListItem = ({ id, track, isPlaying, optionalClasses }) => (
  <div className="col-xs-12 col-md-6">
    <div className={`row turntable-container ${optionalClasses}`}>
      <div className="col-xs-12 section console">
        <TurntablesTrackDisplayContainer  {...track} />
        <TurntablesTrackTimeContainer     {...track} turntableId={id} isPlaying={isPlaying} />
        <TurntablesTrackWaveformContainer {...track} />
        <TurntablesTrackControlsContainer {...track} turntableId={id} />
      </div>
    </div>
  </div>
);

TurntablesListItem.propTypes    = TurntableSchema.PropTypes.isRequired;
TurntablesListItem.defaultProps = TurntableSchema.Defaults;

export default TurntablesListItem;
