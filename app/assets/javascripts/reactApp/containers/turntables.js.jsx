import React       from 'react';
import { connect } from 'react-redux';
import Turntable   from './turntable.js.jsx';

const mapStateToProps = state => ({
  turntables: Object.values(state.turntables.items)
});

const Turntables = connect(mapStateToProps)(({ turntables }) => (
  <div>
    {turntables.map(turntable => (
      <Turntable key={turntable.id} {...turntable} />
    ))}
  </div>
));

export default Turntables;
