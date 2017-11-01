import React from 'react';
import {assert} from 'chai';
import {shallow} from 'enzyme';
import any from '@travi/any';
import Input from '../../../src/inputs/controlled-text';

suite('controlled input', () => {
  test('that the value is empty by default', () => {
    const wrapper = shallow(<Input />);
    const input = wrapper.find('input');

    assert.equal(input.prop('type'), 'text');
    assert.equal(input.prop('value'), '');
  });

  test('that the value is updated when the change even fires', () => {
    const updatedValue = any.string();

    const wrapper = shallow(<Input />);

    wrapper.find('input').simulate('change', {target: {value: updatedValue}});

    assert.equal(wrapper.find('input').prop('value'), updatedValue);
  });
});
