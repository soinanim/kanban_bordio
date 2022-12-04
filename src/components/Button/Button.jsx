import React from 'react';

import { StyledButton } from './styles';

export default function Button({ img, text }) {
  return (
    <StyledButton>
      {img}
      {text}
    </StyledButton>
  );
}
