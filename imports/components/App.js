import React from 'react';
import styled from 'styled-components';
import Theme from './Theme';
import Header from './Header';

const App = () => (
  <Theme>
    <AppWrapper><Header animationCompleted /></AppWrapper>
  </Theme>
);

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export default App;
