import React from 'react';
import BlockRevealAnimation from 'react-block-reveal-animation'
import theme, { sm, md, lg, xl } from '../theme'
// theme.overrides.MuiTypography.h1.fontFamily
const BlockTextReveal = ({textLabel, colour, revealColour = "#ffffff"}) => (
  <div>
    <BlockRevealAnimation delay={0} duration={1.5} color={colour}>
      <span style={{fontSize: "5.5rem", lineHeight: '5.7rem', fontFamily: theme.overrides.MuiTypography.h1.fontFamily, fontWeight: '700',color: colour }}>{textLabel}</span>
    </BlockRevealAnimation>
  </div>
);

export default BlockTextReveal;