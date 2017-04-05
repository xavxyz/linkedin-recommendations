import React from 'react';
import styled from 'styled-components';

const App = () => <AppWrapper>Yay!</AppWrapper>;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #fcfcfc;
`;

export default App;
