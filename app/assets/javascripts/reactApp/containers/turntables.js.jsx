import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  state
});

const Turntables = connect(mapStateToProps)(() => (
  <div />
));

export default Turntables;
