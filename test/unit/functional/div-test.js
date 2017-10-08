import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import Presentational from '../../../src/functional/div';

suite('div wrapper', () => {
  test('that the text renders', () => {
    const wrapper = shallow(<Presentational />);

    assert.equal(wrapper.text(), 'Hello World');
  });
});
