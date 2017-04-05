import { configure, addDecorator } from '@kadira/storybook';
import React from 'react';
import Theme from '../imports/components/Theme';
import { AppWrapper } from '../imports/components/App';

const req = require.context('../imports/components', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => <Theme><AppWrapper>{story()}</AppWrapper></Theme>);

configure(loadStories, module);
