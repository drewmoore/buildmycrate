/* globals describe test expect */
import React                   from 'react';
import renderer                from 'react-test-renderer';
import { mount }               from 'enzyme';
import TurntablesTrackTime     from '../Time.js.jsx';
import Fixtures                from '../../../../__tests__/helpers/fixtures.js.es6';
import '../../../../__tests__/helpers/initialize.js.es6';

describe('TurntablesTrackTime', () => {
  const audio = global.document.createElement('audio');
  const props = {
    playable:     true,
    audioUrl:     'http://example.com/nothing',
    basePosition: 0,
    audio
  };
  Object.assign(props, Fixtures.tracks.fortySixAndTwo);
  const template = (<TurntablesTrackTime {...props} />);

  describe('DOM Snapshot', () => {
    const tree = renderer.create(template).toJSON();

    test('should match snapshot', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Rendering Time', () => {
    const timeDisplay = mount(template);

    test('displays the initial track time in human-readable format', () => {
      expect(timeDisplay.find('[data-hook="time-elapsed"]').html()).toMatch('00 : 00');
    });

    test('displays the current track time in human-readable format', () => {
      // Manually adjust the track's current time and force the component to
      // update. Test that change in track time is displayed to user.
      audio.currentTime = 90;
      timeDisplay.setProps({ audio, basePosition: audio.currentTime });
      expect(timeDisplay.find('[data-hook="time-elapsed"]').html()).toMatch('1 : 30');
    });
  });
});
