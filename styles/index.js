import { injectGlobal } from 'styled-components';
import colors from './colors';

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
    background: ${colors.white}; 
    color: ${colors.darkBlue};
  }
`;
