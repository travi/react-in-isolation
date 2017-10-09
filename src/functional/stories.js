/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import CreateElement from './create-element';
import Div from './div';
import String from './string';

storiesOf('Functional', module)
  .add('Create Element', () => <CreateElement />)
  .add('Div', () => <Div />)
  .add('String', () => <String />);
