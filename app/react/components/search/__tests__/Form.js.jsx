import React    from 'react';
import renderer from 'react-test-renderer';
import jquery   from 'jquery';
import Form     from '../Form.js.jsx';

window.$ = jquery;

test('should match snapshot', () => {
  const props = {
    bpm_min: 120, bpm_max: 130, key_signature: 'cmaj',
    isFetching: false, isSpinning: false, submitForm: () => {}
  };
  const component = renderer.create(<Form {...props} />);
  const tree      = component.toJSON();
  expect(tree).toMatchSnapshot();
});
