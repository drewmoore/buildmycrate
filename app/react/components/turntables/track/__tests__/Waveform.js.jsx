/* globals describe test expect */
import React                   from 'react';
import renderer                from 'react-test-renderer';
import { mount }               from 'enzyme';
import TurntablesTrackWaveform from '../Waveform.js.jsx';
import Fixtures                from '../../../../__tests__/helpers/fixtures.js.es6';
import '../../../../__tests__/helpers/initialize.js.es6';

describe('TurntablesTrackWaveform', () => {
  const props = {
    turntableId: 1,
    playable:    true
  };
  Object.assign(props, Fixtures.tracks.fortySixAndTwo);
  const template = (<TurntablesTrackWaveform {...props} />);

  describe('DOM Snapshot', () => {
    const tree = renderer.create(template).toJSON();

    test('should match snapshot', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Rendering Props', () => {
    const waveFormDisplay = mount(template);

    test('should display track progress indicator', () => {
      const indicatorId = `waveform-progress-for-${props.turntableId}`;
      expect(waveFormDisplay.find(`#${indicatorId}`)).toHaveLength(1);
    });
  });
});
