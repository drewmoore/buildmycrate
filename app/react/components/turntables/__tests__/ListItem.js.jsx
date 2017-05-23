/* globals describe test expect */
import React              from 'react';
import { Provider }       from 'react-redux';
import renderer           from 'react-test-renderer';
import TurntablesListItem from '../ListItem.js.jsx';
import store              from '../../../__tests__/helpers/store.js.es6';
import '../../../__tests__/helpers/initialize.js.es6';

describe('TurntablesListItem', () => {
  const props = { track: { audioUrl: 'http://www.noiseaddicts.com/samples_1w72b820/4932.mp3' } };
  const template = (<Provider store={store}><TurntablesListItem {...props} /></Provider>);

  describe('DOM Snapshot', () => {
    const tree = renderer.create(template).toJSON();

    test('should match snapshot', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
