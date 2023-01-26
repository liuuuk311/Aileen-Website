import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import media from '../utils/style';
import styled from 'styled-components';

const StyledTypist = styled(TypeAnimation)`
  color: #000;
  letter-spacing: 17px;
  margin: 0 auto;
  font-size: 72px;
  line-height: 80px;
  font-weight: 200;
  text-transform: uppercase;
  font-family: 'Prompt', sans-serif;
  ${media.xs`
    font-size:38px;
    line-height: 44px;
    letter-spacing: 8px;
  `}

  color: #fff;

  strong {
    font-weight: 800;
  }
`;

function HeroText(props) {
  return (
    <StyledTypist
      sequence={[
        'Welcome to my website',
        500,
        'I am Aileen',
        1000,
        'I am a Marine Scientist',
        1000,
        'Keep scrolling to get to know me!'
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}>
    </StyledTypist>
  );
}

export default HeroText;
