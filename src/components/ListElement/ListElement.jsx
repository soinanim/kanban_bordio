import React from 'react';

import { StyledLi, StyledWrapper, StyledSpan, StyledSubLi } from './styles';

export default function ListElement({ className, img, spanText, subLiArray }) {
  return (
    <StyledLi className={className}>
      <StyledWrapper>
        {img}
        <StyledSpan>{spanText}</StyledSpan>
      </StyledWrapper>
      {subLiArray?.length > 0 && (
        <ul>
          {subLiArray.map((element) => (
            <StyledSubLi>{element}</StyledSubLi>
          ))}
        </ul>
      )}
    </StyledLi>
  );
}
