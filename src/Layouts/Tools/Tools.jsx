import React from 'react';

import { StyledTools, StyledH3, StyledUl, StyledLi, StyledImg } from './styles';

import { images } from './util';
import { LI_ITEMS } from './util';

export default function Tools() {
  return (
    <StyledTools>
      <StyledH3>Tools</StyledH3>
      <StyledUl>
        {LI_ITEMS.map((item) => (
          <StyledLi className={`${item.status}`}>
            <StyledImg src={images[item.title]} alt={item.title} />
            {item.title}
          </StyledLi>
        ))}
      </StyledUl>
    </StyledTools>
  );
}
