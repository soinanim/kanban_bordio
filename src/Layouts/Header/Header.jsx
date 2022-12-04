import React from 'react';

import Button from '../../components/Button';
import Notifications from '../../components/Notifications';
import SearchInput from '../../components/SearchInput';
import Select from '../../components/Select';
import UserAvatar from '../../components/UserAvatar';

import { StyledHeader, StyledWrapper } from './styles';

export default function Header() {
  return (
    <StyledHeader>
      <StyledWrapper>
        <Button
          img={<img src='../icons/plus.svg' alt='add new' />}
          text={'Add new'}
        />
        <Select
          name={'view'}
          options={[{ value: 'kanban', label: 'Kanban' }]}
        />
        <Select
          name={'filter'}
          options={[{ value: 'filter', label: 'Filter' }]}
        />
      </StyledWrapper>
      <StyledWrapper right>
        <SearchInput width={'180px'} padding={'8px'} maxWidthInput={'85%'} />
        <Notifications
          img={<img src='../icons/bell.svg' alt='notifications' />}
          quantity={'99+'}
        />
        <UserAvatar />
      </StyledWrapper>
    </StyledHeader>
  );
}
