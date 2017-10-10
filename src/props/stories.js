/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import any from '@travi/any';
import Button from './button';

const label = any.string();

storiesOf('Props/Button', module)
  .add('labelled', () => <input type="button" value={label} />)
  .add('disabled', () => <input type="button" value={label} disabled />)
  .add('component', () => <Button label={label} />)
  .add('disabled component', () => <Button label={label} disabled />);
