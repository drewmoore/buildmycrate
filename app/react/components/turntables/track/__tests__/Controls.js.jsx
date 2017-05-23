/* globals describe test expect */
import React                   from 'react';
import renderer                from 'react-test-renderer';
import { mount }               from 'enzyme';
import TurntablesTrackControls from '../Controls.js.jsx';
import Fixtures                from '../../../../__tests__/helpers/fixtures.js.es6';
import '../../../../__tests__/helpers/initialize.js.es6';

describe('TurntablesTrackControls', () => {
  const props = {
    playable: true,
    play:     () => {},
    pause:    () => {},
    download: () => {}
  };
  Object.assign(props, Fixtures.tracks.fortySixAndTwo);
  const template = (<TurntablesTrackControls {...props} />);

  describe('DOM Snapshot', () => {
    const tree = renderer.create(template).toJSON();

    test('should match snapshot', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Rendering Props', () => {
    const listItem  = mount(template);

    test('displays play button if playable', () => {
      expect(listItem.find('[data-hook="track-button-play"]')).toHaveLength(1);
    });

    test('displays pause button if playable', () => {
      expect(listItem.find('[data-hook="track-button-pause"]')).toHaveLength(1);
    });

    test('displays download button if downloadable', () => {
      expect(listItem.find('[data-hook="track-button-download"]')).toHaveLength(1);
    });

    test('displays purchase button if purchaseable', () => {
      expect(listItem.find('[data-hook="track-button-purchase"]')).toHaveLength(1);
    });
  });
});
