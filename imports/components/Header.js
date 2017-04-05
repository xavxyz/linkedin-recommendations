import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Header = ({ animationCompleted, withText }) => (
  <HeaderWrapper animationCompleted={animationCompleted} withText={withText}>
    <ImageContainer profilePicture animationCompleted={animationCompleted}>
      <Image src="https://cl.ly/0Y3t303W153E/Me.png" title="Me" alt="Me" />
    </ImageContainer>
    <ImageContainer animationCompleted={animationCompleted}>
      <Image src="https://cl.ly/181t2d322O34/linkedin.png" title="Linkedin" alt="Linkedin" />
    </ImageContainer>
  </HeaderWrapper>
);

Header.propTypes = {
  animationCompleted: PropTypes.bool,
  withText: PropTypes.bool,
};

// return the initial or final position of the image depending on
// - is the animation completed or not? (bool)
// - is the image the profile picture or not? (bool)
const imagePositioner = ({ animationCompleted, profilePicture }) => {
  const position = {
    initial: profilePicture ? 0 : '80%',
    final: profilePicture ? '30%' : '45%',
  };

  return animationCompleted ? position.final : position.initial;
};

const HeaderWrapper = styled.div`
  width: 100vw;
  height: 20vh;
  position: relative;
  margin-top: 30px;
  
  ${props => props.withText && `
    &:after {
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      text-align: center;
      content: "Xavier's Linkedin recommendations";
      width: 100vw;
      position: absolute;
      bottom: -10rem;
    }
  `}
`;

const ImageContainer = styled.div`
  width: 20vw;
  height: 20vh;
  position: absolute;
  left: ${props => imagePositioner(props)};
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

export default Header;
