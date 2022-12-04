import React from 'react';
import styled from 'styled-components';

import List from './List';

export default function Menu() {
  return (
    <StyledNav>
      <List />
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  padding-top: 20px;
`;
