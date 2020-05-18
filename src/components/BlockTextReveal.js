import React from 'react';
import BlockRevealAnimation from 'react-block-reveal-animation';

const BlockTextReveal = ({textLabel, colour, revealColour = "#ffffff"}) => (
  <div>
    <BlockRevealAnimation delay={0} duration={3} color={colour}>
      <span style={{fontSize: "5.5rem", lineHeight: '5.7rem', fontFamily: 'Oswald', fontWeight: '700',color: colour }}>{textLabel}</span>
    </BlockRevealAnimation>
  </div>
);

export default BlockTextReveal;