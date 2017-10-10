/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import any from '@travi/any';

const label = any.string();

storiesOf('Props/Button', module)
  .add('labelled', () => <input type="button" value={label} />)
  .add('disabled', () => <input type="button" value={label} disabled />);
