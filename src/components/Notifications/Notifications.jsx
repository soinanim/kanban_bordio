import React from 'react';

import { StyledNotifications, StyledBadge } from './styles';

export default function Notifications({ img, quantity }) {
  return (
    <StyledNotifications>
      {img}
      <StyledBadge>{quantity}</StyledBadge>
    </StyledNotifications>
  );
}
