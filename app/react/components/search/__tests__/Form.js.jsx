/* globals describe test expect */
import React      from 'react';
import renderer   from 'react-test-renderer';
import { mount }  from 'enzyme';
import SearchForm from '../Form.js.jsx';
import '../../../__tests__/helpers/initialize.js.es6';

describe('SearchForm', () => {
  const props = {
    bpmMin:       130,
    bpmMax:       140,
    keySignature: 'cmaj',
    isFetching:   false,
    isSpinning:   false,
    submitForm:   () => {}
  };
  const template = (<SearchForm {...props} />);

  describe('DOM Snapshot', () => {
    const tree = renderer.create(template).toJSON();

    test('should match snapshot', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Rendering Props', () => {
    const form = mount(template);

    test('Form input for bpm_min defaults to value in props', () => {
      expect(form.find('[name="bpm_min"]').get(0).value).toEqual(props.bpmMin.toString());
    });

    test('Form input for bpm_max defaults to value in props', () => {
      expect(form.find('[name="bpm_max"]').get(0).value).toEqual(props.bpmMax.toString());
    });

    test('Form input for key_signature defaults to value in props', () => {
      expect(form.find('[name="key_signature"]').get(0).value).toEqual(props.keySignature.toString());
    });
  });
});
