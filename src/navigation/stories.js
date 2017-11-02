/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import {linkTo} from '@storybook/addon-links';

storiesOf('Navigation/Pagination/linkTo', module)
  .add('first page', () => (
    <ol>
      <li><button onClick={linkTo('Navigation/Pagination/linkTo', 'middle page')}>Next</button></li>
    </ol>
  ))
  .add('middle page', () => (
    <ol>
      <li><button onClick={linkTo('Navigation/Pagination/linkTo', 'first page')}>Previous</button></li>
      <li><button onClick={linkTo('Navigation/Pagination/linkTo', 'last page')}>Next</button></li>
    </ol>
  ))
  .add('last page', () => (
    <ol>
      <li><button onClick={linkTo('Navigation/Pagination/linkTo', 'middle page')}>Previous</button></li>
    </ol>
  ));
