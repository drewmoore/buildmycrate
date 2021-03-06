/* globals describe test expect */
import React          from 'react';
import { Provider }   from 'react-redux';
import renderer       from 'react-test-renderer';
import { mount }      from 'enzyme';
import TracksListItem from '../ListItem.js.jsx';
import Fixtures       from '../../../__tests__/helpers/fixtures.js.es6';
import store          from '../../../__tests__/helpers/store.js.es6';
import '../../../__tests__/helpers/initialize.js.es6';

describe('TracksListItem', () => {
  const props = {
    download: () => {}
  };
  Object.assign(props, Fixtures.tracks.fortySixAndTwo);
  const template = (<Provider store={store}><TracksListItem {...props} /></Provider>);

  describe('DOM Snapshot', () => {
    const tree = renderer.create(template).toJSON();

    test('should match snapshot', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Rendering Props', () => {
    const listItem  = mount(template);

    test('displays title', () => {
      expect(listItem.html()).toMatch(props.title);
    });

    test('displays user.username', () => {
      expect(listItem.html()).toMatch(props.user.username);
    });

    test('displays bpm', () => {
      expect(listItem.html()).toMatch(props.bpm.toString());
    });

    test('displays keySignature', () => {
      expect(listItem.html()).toMatch(props.keySignature);
    });

    test('displays puchase link', () => {
      expect(listItem.find('.purchase-link').getDOMNode().href).toMatch(props.purchaseUrl);
    });

    test('renders buttons for streaming track', () => {
      expect(listItem.find('[data-hook="turntable-icon"]')).toHaveLength(props.turntables.length);
    });
  });
});
