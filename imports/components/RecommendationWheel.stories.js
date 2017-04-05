import React from 'react';
import { storiesOf } from '@kadira/storybook';
import RecommendationWheel from './RecommendationWheel';
import mocks from '../api/mocks';

const { Query } = mocks;
// note: query is a function as required by `graphql-tools` to execute it
const { recommendations } = Query();

storiesOf('Recommendation wheel').add('basic', () => (
  <RecommendationWheel data={recommendations} />
));
