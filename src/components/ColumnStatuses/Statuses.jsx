import React from 'react';
import {
  StyledNewStatus,
  StyledImg,
  StyledSpan,
  StyledHeader,
  StyledHorizontalDiv,
} from './styles.js';
import plus_gray from '../../icons/plus-gray.svg';

export default function Statuses() {
  return (
    <StyledNewStatus>
      <StyledHeader>
        <StyledImg src={plus_gray} alt='add status' />
        <StyledSpan>Create status</StyledSpan>
      </StyledHeader>

      <StyledHorizontalDiv />
    </StyledNewStatus>
  );
}
