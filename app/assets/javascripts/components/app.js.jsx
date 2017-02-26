import React    from 'react';
import ReactDom from 'react-dom';
import TestThis from './testThis.js.es6';

export default class App {
  static render() {
    ReactDom.render(
      <h1>{TestThis.shout()}</h1>,
      document.getElementById('root')
    );
  }
}
