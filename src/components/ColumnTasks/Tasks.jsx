import React from 'react';

import HeaderTasks from '../TasksHeader/HeaderTasks';
import Task from '../Task';

import { StyledTasks, StyledHorizontalLine, StyledTask } from './styles';

export default function Tasks({ column, index }) {
  console.log(index);
  const IS_FIRST_COLUMN = index === 0;
  const IS_LAST_COLUMN = index === 3;

  return (
    <StyledTasks isLastColumn={IS_LAST_COLUMN}>
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
