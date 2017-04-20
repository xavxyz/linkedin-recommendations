import React from 'react';
import { storiesOf } from '@kadira/storybook';
import RecommendationWheel from './RecommendationWheel';
import recommendations from '../assets/recommendations.json';

storiesOf('Recommendation wheel').add('basic', () => (
  <div style={{ height: '50vw', width: '50vw' }}>
    <RecommendationWheel data={recommendations} />
  </div>
));
