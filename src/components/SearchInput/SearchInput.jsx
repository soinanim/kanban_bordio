import React from 'react';

import { StyledSearch, StyledInput, StyledButton } from './styles';

export default function SearchInput({
  darkMode,
  width,
  padding,
  maxWidthInput,
}) {
  return (
    <StyledSearch darkMode={darkMode} width={width} padding={padding}>
      <StyledInput
        type='search'
        placeholder='Search...'
        disabled
        maxWidthInput={maxWidthInput}
      />
      <StyledButton>
        <img src='../icons/search.svg' alt='search' />
      </StyledButton>
    </StyledSearch>
  );
}
