import styled from 'styled-components';
import Wheel from '../components/Wheel';
import recommendations from '../assets/recommendations';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default () => (
  <AppWrapper>
    <Wheel recommendations={recommendations} />
  </AppWrapper>
);
