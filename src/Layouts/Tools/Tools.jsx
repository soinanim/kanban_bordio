import React from 'react';

import { StyledTools, StyledH3, StyledUl, StyledLi, StyledImg } from './styles';

const LI_ITEMS = [
  { title: 'Roadmap' },
  { title: 'Schedule', status: 'active' },
  { title: 'Tasks' },
  { title: 'Notes' },
  { title: 'Files' },
];

export default function Tools() {
  return (
    <StyledTools>
      <StyledH3>Tools</StyledH3>
      <StyledUl>
        {LI_ITEMS.map((item) => (
          <StyledLi className={`${item.status}`}>
            <StyledImg src={`../icons/${item.title}.svg`} alt={item.title} />
            {item.title}
          </StyledLi>
        ))}
      </StyledUl>
    </StyledTools>
  );
}
