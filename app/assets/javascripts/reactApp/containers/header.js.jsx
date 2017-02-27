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
  <div>
    <h1 className="search-header text-center">
      {searchIsEmpty(search) ? 'Build My Crate' : ''}
    </h1>
  </div>
));

export default Header;
