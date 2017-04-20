import { configure } from '@kadira/storybook';
import '../styles';

const req = require.context('../components', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
