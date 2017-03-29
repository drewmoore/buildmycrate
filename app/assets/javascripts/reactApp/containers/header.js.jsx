import React       from 'react';
import { connect } from 'react-redux';

const Header = connect(state => state)(() => (
  <div className="row section">
    <div className="col-xs-12 col-lg-offset-2 col-lg-8">
      <h1 className="search-header text-center">Build My Crate</h1>
    </div>
  </div>
));

export default Header;
