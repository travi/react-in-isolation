import React from 'react';
import {assert} from 'chai';
import {shallow} from 'enzyme';
import any from '@travi/any';
import sinon from 'sinon';
import Input from '../../../src/inputs/controlled-text';

suite('controlled input', () => {
  test('that the value is empty by default', () => {
    const wrapper = shallow(<Input />);
    const input = wrapper.find('input');

    assert.equal(input.prop('type'), 'text');
    assert.equal(input.prop('value'), '');
  });

  test('that the value is updated when the change event fires', () => {
    const updatedValue = any.string();

    const changeHandler = () => undefined;
    const wrapper = shallow(<Input onChange={changeHandler} />);

    wrapper.find('input').simulate('change', {target: {value: updatedValue}});

    assert.equal(wrapper.find('input').prop('value'), updatedValue);
  });

  test('that the value is passed to the provided handler when the change event fires', () => {
    const changeHandler = sinon.spy();
    const updatedValue = any.string();
    const event = {target: {value: updatedValue}};

    const wrapper = shallow(<Input onChange={changeHandler} />);

    wrapper.find('input').simulate('change', event);

    assert.calledWith(changeHandler, event, updatedValue);
  });
});
