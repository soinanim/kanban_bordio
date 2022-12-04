import React from 'react';

import Header from '../Header';
import WorkSpace from '../WorkSpace';

import { StyledMain } from './styles';

export default function Main() {
  return (
    <StyledMain>
      <Header />
      <WorkSpace />
    </StyledMain>
  );
}
