import styled from 'styled-components';
import '../styles';
import Header from '../components/Header';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export default () => <AppWrapper><Header animationCompleted /></AppWrapper>;
