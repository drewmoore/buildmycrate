import React from 'react';
import renderer from 'react-test-renderer';
import Form from '../Form.js.jsx';

test('bpm_min should have a default value', () => {
  const search    = { bpm_min: 120, bpm_max: 130, key_signature: 'cmaj' };
  const component = renderer.create(<Form {...search} />);
  const tree      = component.toJSON();

  expect(tree).toMatchSnapshot();
  
});
