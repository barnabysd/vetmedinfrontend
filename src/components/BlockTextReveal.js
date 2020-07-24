import React from 'react';
import BlockRevealAnimation from 'react-block-reveal-animation'
import theme, { sm, md, lg, xl } from '../theme'
import styled from 'styled-components'

// theme.overrides.MuiTypography.h1.fontFamily

const HeadlLineText = styled.span`
    font-size: 5.5rem;
    line-height: 5.7rem;
    font-family: ${theme.overrides.MuiTypography.h1.fontFamily};
    font-weight: 700;
    @media (max-width: ${sm}px) {
      font-size: 3.5rem;
       line-height: 3.7rem;
    }
`

const BlockTextReveal = ({textLabel, colour, revealColour = "#ffffff"}) => (
  <div>
    <BlockRevealAnimation delay={0} duration={1.5} color={colour}>
      <HeadlLineText style={{color: colour }}>{textLabel}</HeadlLineText>
    </BlockRevealAnimation>
  </div>
);

export default BlockTextReveal;