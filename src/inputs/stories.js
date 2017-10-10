/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import any from '@travi/any';
import Input from '../../src/inputs/controlled';

storiesOf('Inputs', module)
  .add('empty & uncontrolled', () => <input type="text" />)
  .add('empty', () => <input type="text" value="" />)
  .add('w/ value', () => <input type="text" value={any.string()} />)
  .add('controlled', () => <Input />);
