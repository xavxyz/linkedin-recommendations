import { storiesOf } from '@kadira/storybook';
import React from 'react';
import Header from './Header';

storiesOf('Header', module)
  .add('initial position', () => <Header />)
  .add('completed position', () => <Header animationCompleted />)
  .add('completed position with text', () => <Header animationCompleted withText />);
