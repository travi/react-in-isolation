/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf, action} from '@storybook/react';
import any from '@travi/any';
import Button from '../props/button';

const label = any.string();

storiesOf('Handlers/Button', module)
  .add('input w/ click handler', () => <input type="button" value={label} onClick={action('button input clicked')} />)
  .add('button w/ click handler', () => <button onClick={action('button clicked')}>{label}</button>)
  .add('component', () => <Button label={label} onClick={action('button component clicked')} />);
