/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import {linkTo} from '@storybook/addon-links';
import {Link} from 'react-router';
import storyRouter from 'storybook-router';

const paginationContainerStyles = {display: 'flex', justifyContent: 'space-between', padding: 0, listStyleType: 'none'};

storiesOf('Navigation/Pagination/linkTo', module)
  .add('first page', () => (
    <ol style={paginationContainerStyles}>
      <li>&nbsp;</li>
      <li><button onClick={linkTo('Navigation/Pagination/linkTo', 'middle page')}>Next</button></li>
    </ol>
  ))
  .add('middle page', () => (
    <ol style={paginationContainerStyles}>
      <li><button onClick={linkTo('Navigation/Pagination/linkTo', 'first page')}>Previous</button></li>
      <li><button onClick={linkTo('Navigation/Pagination/linkTo', 'last page')}>Next</button></li>
    </ol>
  ))
  .add('last page', () => (
    <ol style={paginationContainerStyles}>
      <li><button onClick={linkTo('Navigation/Pagination/linkTo', 'middle page')}>Previous</button></li>
      <li>&nbsp;</li>
    </ol>
  ));

storiesOf('Navigation/Pagination/router', module)
  .addDecorator(storyRouter({
    '/first': linkTo('Navigation/Pagination/router', 'first page'),
    '/middle': linkTo('Navigation/Pagination/router', 'middle page'),
    '/last': linkTo('Navigation/Pagination/router', 'last page')
  }))
  .add('first page', () => (
    <ol style={paginationContainerStyles}>
      <li>&nbsp;</li>
      <li><Link to="/middle">Next</Link></li>
    </ol>
  ))
  .add('middle page', () => (
    <ol style={paginationContainerStyles}>
      <li><Link to="/first">Previous</Link></li>
      <li><Link to="/last">Next</Link></li>
    </ol>
  ))
  .add('last page', () => (
    <ol style={paginationContainerStyles}>
      <li><Link to="/middle">Previous</Link></li>
      <li>&nbsp;</li>
    </ol>
  ));
