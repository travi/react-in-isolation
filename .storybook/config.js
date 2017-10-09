/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import {configure} from '@storybook/react';

function loadStories() {
  const req = require.context('../src', true, /.stories.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
