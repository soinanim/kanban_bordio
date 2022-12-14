import React from 'react';

import HeaderTasks from '../TasksHeader/HeaderTasks';
import Task from '../Task';

import { StyledTasks, StyledHorizontalLine, StyledTask } from './styles';

export default function Tasks({ column, index, length }) {
  const IS_FIRST_COLUMN = index === 0;
  const IS_PENULTIMATE_COLUMN = index === length - 1;

  return (
    <StyledTasks isPenultColumn={IS_PENULTIMATE_COLUMN}>
      <HeaderTasks
        isFirstColumn={IS_FIRST_COLUMN}
        columnName={column.columnName}
        tasksQuantity={column.tasks.length}
      />

      <StyledHorizontalLine />

      <StyledTask firstColumn={IS_FIRST_COLUMN}>
        {column.tasks.map((task) => (
          <Task
            color={task.color}
            isCompleted={task.completed}
            title={task.title}
            duration={task.duration}
            durationColor={task.durationColor}
          />
        ))}
      </StyledTask>
    </StyledTasks>
  );
}
