/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import {configure, addDecorator} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {withPropsTable} from 'storybook-addon-react-docgen';

function loadStories() {
  const req = require.context('../src', true, /.stories.js$/);
  req.keys().forEach(filename => req(filename));
}

addDecorator(withInfo);
addDecorator(withPropsTable);

configure(loadStories, module);
