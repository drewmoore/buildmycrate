/* globals describe test expect */
import React         from 'react';
import renderer      from 'react-test-renderer';
import SearchResults from '../Form.js.jsx';
import '../../../__tests__/helpers/initialize.js.es6';

describe('SearchResults', () => {
  const template = (<SearchResults />);

  describe('DOM Snapshot', () => {
    const tree = renderer.create(template).toJSON();

    test('should match snapshot', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
