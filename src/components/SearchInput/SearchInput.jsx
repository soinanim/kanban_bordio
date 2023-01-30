import React from 'react';

import { StyledSearch, StyledInput, StyledButton } from './styles';
import search from '../../icons/search.svg';

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
        <img src={search} alt='search' />
      </StyledButton>
    </StyledSearch>
  );
}
