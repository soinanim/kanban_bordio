import React from 'react';

import Button from '../../components/Button';
import Notifications from '../../components/Notifications';
import SearchInput from '../../components/SearchInput';
import Select from '../../components/Select';
import UserAvatar from '../../components/UserAvatar';

import { StyledHeader, StyledWrapper } from './styles';

const NOTIFICATIONS_QUIANTITY_DEFAULT = 99;

export default function Header() {
  return (
    <StyledHeader>
      <StyledWrapper>
        <Button
          img={<img src='../icons/plus.svg' alt='add new' />}
          text={'Add new'}
        />
        <Select
          selectedOption={'Kanban'}
          options={[
            { value: 'board_view', label: 'Board view' },
            { value: 'table_view', label: 'Table view' },
            { value: 'kanban', label: 'Kanban' },
          ]}
        />
        <Select options={[{ value: 'filter', label: 'Filter' }]} />
      </StyledWrapper>
      <StyledWrapper right>
        <SearchInput width={'180px'} padding={'8px'} maxWidthInput={'85%'} />
        <Notifications
          img={<img src='../icons/bell.svg' alt='notifications' />}
          quantity={`${NOTIFICATIONS_QUIANTITY_DEFAULT}+`}
        />
        <UserAvatar />
      </StyledWrapper>
    </StyledHeader>
  );
}
