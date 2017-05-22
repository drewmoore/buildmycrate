/* globals describe test expect */
import React          from 'react';
import { Provider }   from 'react-redux';
import renderer       from 'react-test-renderer';
import { mount }      from 'enzyme';
import TurntablesList from '../List.js.jsx';
import store          from '../../../__tests__/helpers/store.js.es6';
import '../../../__tests__/helpers/initialize.js.es6';

describe('TurntablesList', () => {
  const props    = { turntables: [{ id: 0, trackId: null }, { id: 1, trackId: null }] };
  const template = (<Provider store={store}><TurntablesList {...props} /></Provider>);

  describe('DOM Snapshot', () => {
    const tree = renderer.create(template).toJSON();

    test('should match snapshot', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Rendering Props', () => {
    const icon = mount(template);

    test('should render components for each turntable', () => {
      const elements = icon.find('[data-hook="turntable-container"]');
      expect(elements).toHaveLength(props.turntables.length);
    });
  });
});
