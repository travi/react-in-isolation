import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import Presentational from '../../../src/functional/string';

suite('string return (React 16)', () => {
  test('that the text renders', () => {
    const wrapper = shallow(<Presentational />);

    assert.equal(wrapper.text(), 'Hello World');
  });
});
