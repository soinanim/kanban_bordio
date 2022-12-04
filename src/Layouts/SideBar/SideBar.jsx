import React from 'react';

import Logo from '../../components/Logo';
import SearchInput from '../../components/SearchInput';
import Menu from '../Menu';

import { StyledSideBar } from './styles';

export default function SideBar() {
  return (
    <StyledSideBar>
      <Logo />
      <SearchInput
        darkMode={true}
        width={'187px'}
        padding={'2px'}
        maxWidthInput={'88%'}
      />
      <Menu />
    </StyledSideBar>
  );
}
