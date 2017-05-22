/* globals describe test expect */
import React          from 'react';
import renderer       from 'react-test-renderer';
import { mount }      from 'enzyme';
import TurntablesIcon from '../Icon.js.jsx';
import Images         from '../../../helpers/images.js.es6';
import '../../../__tests__/helpers/initialize.js.es6';

describe('TurntablesIcon', () => {
  const props = {
    side:          'left',
    loadTurntable: () => {}
  };
  const template = (<TurntablesIcon {...props} />);

  describe('DOM Snapshot', () => {
    const tree = renderer.create(template).toJSON();

    test('should match snapshot', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Rendering Props', () => {
    const icon = mount(template);

    test('should display left turntable image for prop side with value left', () => {
      const imageUrl = icon.find('[data-hook="turntable-icon"]').getDOMNode().src;
      expect(imageUrl).toEqual(Images.turntableLeft());
    });

    test('should display right turntable image for prop side with value right', () => {
      const newProps  = Object.assign({}, props, { side: 'right' });
      const otherIcon = mount(<TurntablesIcon {...newProps} />);
      const imageUrl  = otherIcon.find('[data-hook="turntable-icon"]').getDOMNode().src;
      expect(imageUrl).toEqual(Images.turntableRight());
    });
  });
});
