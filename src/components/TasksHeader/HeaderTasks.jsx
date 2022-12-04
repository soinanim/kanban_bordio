import React from 'react';

import { StyledTitle, StyledH5, StyledQuantity } from './styles';

export default function HeaderTasks({
  columnName,
  tasksQuantity,
  isFirstColumn,
}) {
  return (
    <StyledTitle isFirstColumn={isFirstColumn}>
      <StyledH5>{columnName}</StyledH5>
      <StyledQuantity>{tasksQuantity}</StyledQuantity>
    </StyledTitle>
  );
}
