import React, { PropTypes } from 'react';
import TurntablesListItemContainer from '../../containers/turntables/ListItem.js.jsx';
import TurntableSchema      from '../../schemas/turntable.js.es6';

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

TurntablesList.propTypes = {
  turntables: PropTypes.arrayOf(TurntableSchema.PropTypes.isRequired).isRequired
};

export default TurntablesList;
