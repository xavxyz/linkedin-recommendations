import React from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';

export const theme = {
  colors: {
    darkBlue: '#03243A',
    blue: '#007AB9',
    green: '#74C239',
    grey: '#C5C5C5',
    white: '#FCFCFC',
  },
  fonts: {
    big: '28px',
  },
};

injectGlobal`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  
  @import url('https://fonts.googleapis.com/css?family=Lato:700');
  
  body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    background: ${theme.colors.white}; 
    color: ${theme.colors.darkBlue};
  }
`;

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
