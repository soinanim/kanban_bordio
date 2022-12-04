import React from 'react';
import {
  StyledNewStatus,
  StyledImg,
  StyledSpan,
  StyledHeader,
  StyledHorizontalDiv,
} from './styles.js';

export default function Statuses() {
  return (
    <StyledNewStatus>
      <StyledHeader>
        <StyledImg src='../icons/plus-gray.svg' alt='add status' />
        <StyledSpan>Create status</StyledSpan>
      </StyledHeader>

      <StyledHorizontalDiv />
    </StyledNewStatus>
  );
}
