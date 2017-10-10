import React from 'react';
import {assert} from 'chai';
import {shallow} from 'enzyme';
import any from '@travi/any';
import Button from '../../../src/props/button';

suite('button', () => {
  const label = any.string();

  test('that props are passed to the DOM element', () => {
    const disabled = any.boolean();
    const clickHandler = () => undefined;

    const wrapper = shallow(<Button label={label} disabled={disabled} onClick={clickHandler} />);
    const button = wrapper.find('button');

    assert.equal(button.text(), label);
    assert.equal(button.prop('disabled'), disabled);
    assert.equal(button.prop('onClick'), clickHandler);
  });

  test('that the pointer cursor is used when active', () => {
    const wrapper = shallow(<Button label={label} disabled={false} />);
    const button = wrapper.find('button');

    assert.equal(button.prop('style').cursor, 'pointer');
  });

  test('that the not-allowed cursor is used when disabled', () => {
    const wrapper = shallow(<Button label={label} disabled={true} />);
    const button = wrapper.find('button');

    assert.equal(button.prop('style').cursor, 'not-allowed');
  });
});
