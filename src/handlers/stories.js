/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf, action} from '@storybook/react';
import any from '@travi/any';
import Button from '../props/button';

const label = any.string();

storiesOf('Handlers/Button', module)
  .add('click hander', () => <input type="button" value={label} onClick={action('button clicked')} />)
  .add('component', () => <Button label={label} onClick={action('button component clicked')} />);
