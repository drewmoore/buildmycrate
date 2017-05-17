/* globals expect test */
import React     from 'react';
import renderer  from 'react-test-renderer';
import { mount } from 'enzyme';
import jquery    from 'jquery';
import Form      from '../Form.js.jsx';

// jQuery is defined as a global in Rails. In testing front-end without Rails,
// jQuery must be imported and defined as a global to prevent error.
window.$ = jquery;

const props = {
  bpmMin:       130,
  bpmMax:       140,
  keySignature: 'cmaj',
  isFetching:   false,
  isSpinning:   false,
  submitForm:   () => {}
};
const component = renderer.create(<Form {...props} />);
const tree      = component.toJSON();
const form      = mount(<Form {...props} />);

test('should match snapshot', () => {
  expect(tree).toMatchSnapshot();
});

test('Form input for bpm_min defaults to value in props', () => {
  expect(form.find('[name="bpm_min"]').get(0).value).toEqual(props.bpmMin.toString());
});

test('Form input for bpm_max defaults to value in props', () => {
  expect(form.find('[name="bpm_max"]').get(0).value).toEqual(props.bpmMax.toString());
});

test('Form input for key_signature defaults to value in props', () => {
  expect(form.find('[name="key_signature"]').get(0).value).toEqual(props.keySignature.toString());
});
