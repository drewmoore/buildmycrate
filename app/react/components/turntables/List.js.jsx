import React                       from 'react';
import TurntablesListItemContainer from '../../containers/turntables/ListItem.js.es6';

const TurntablesList = ({ turntables }) => (
  <div className="row">
    <div className="col-xs-12 col-lg-offset-1 col-lg-10">
      <div className="row">
        {turntables.map(turntable => (
          <TurntablesListItemContainer key={turntable.id} {...turntable} />
        ))}
      </div>
    </div>
  </div>
);

export default TurntablesList;
