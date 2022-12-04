import React from 'react';

import { StyledSearchInput, StyledInput, StyledSearchButton } from './styles';

export default function SearchInput({
  darkMode,
  width,
  padding,
  maxWidthInput,
}) {
  return (
    <StyledSearchInput darkMode={darkMode} width={width} padding={padding}>
      <StyledInput
        type='search'
        placeholder='Search...'
        disabled
        maxWidthInput={maxWidthInput}
      />
      <StyledSearchButton>
        <img src='../icons/search.svg' alt='search' />
      </StyledSearchButton>
    </StyledSearchInput>
  );
}
