import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import Presentational from '../../src/presentational';

suite('presentational', () => {
  test('that the text renders', () => {
    const wrapper = shallow(<Presentational />);

    assert.equal(wrapper.text(), 'Hello World');
  });
});
