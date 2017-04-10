import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  turntables: Object.values(state.turntables.items)
});

const Turntables = connect(mapStateToProps)(() => (
  <div />
));

export default Turntables;
