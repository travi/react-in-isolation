/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import any from '@travi/any';
import Input from './controlled-text';

const inputChangeHandler = action('input value changed');

storiesOf('Inputs', module)
  .add('empty & uncontrolled', () => <input type="text" onChange={inputChangeHandler} />)
  .add('empty', () => <input type="text" value="" onChange={inputChangeHandler} />)
  .add('w/ value', () => <input type="text" value={any.string()} />)
  .add('controlled text input', () => <Input onChange={inputChangeHandler} />);
