import React from 'react';

import { StyledTaskCard, StyledTaskTitle, StyledTaskDuration } from './styles';

const Task = ({ color, isCompleted, title, duration, durationColor }) => {
  return (
    <StyledTaskCard color={color} completed={isCompleted}>
      <StyledTaskTitle completed={isCompleted}> {title}</StyledTaskTitle>
      <StyledTaskDuration color={durationColor}>{duration}</StyledTaskDuration>
    </StyledTaskCard>
  );
};

export default Task;
