import React from 'react';

import { StyledWrapper, StyledSelect } from './styles';

export default function Select({ name, options }) {
  return (
    <StyledWrapper>
      <StyledSelect name={name}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </StyledSelect>
      <img src='../icons/arrows-gray.svg' alt='add new' />
    </StyledWrapper>
  );
}
