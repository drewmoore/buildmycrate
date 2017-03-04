import React       from 'react';
import { connect } from 'react-redux';

const searchIsEmpty = (search = {}) => (
  !(Object.values(search).filter((value) => {
    switch (typeof value) {
      case 'string':
        return !!value.length;
      case 'object':
        return !!Object.keys(value).length;
      case 'number':
        return true;
      default:
        return false;
    }
  }).length)
);

const Header = connect(state => state)(({ search }) => (
  <div className="row section">
    <div className="col-xs-12 col-lg-offset-2 col-lg-8">
      <h1 className="search-header text-center">
        {searchIsEmpty(search) ? 'Build My Crate' : ''}
      </h1>
    </div>
  </div>
));

export default Header;
