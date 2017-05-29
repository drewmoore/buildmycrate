/* globals describe test expect */
import React                   from 'react';
import renderer                from 'react-test-renderer';
import TurntablesTrackDisplay  from '../Display.js.jsx';
import Fixtures                from '../../../../__tests__/helpers/fixtures.js.es6';
import '../../../../__tests__/helpers/initialize.js.es6';

describe('TurntablesTrackDisplay', () => {
  const track = Fixtures.tracks.fortySixAndTwo;
  const props = {
    imageDisplay: track.artworkUrl,
    bpmDisplay:   'BPM: 120',
    keyDisplay:   'Key: dmin'
  };
  Object.assign(props, track);
  const template = (<TurntablesTrackDisplay {...props} />);

  describe('DOM Snapshot', () => {
    const tree = renderer.create(template).toJSON();

    test('should match snapshot', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
