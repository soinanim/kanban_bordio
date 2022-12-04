import React, { useEffect, useState } from 'react';

import TaskService from '../../api/TaskService';
import ColumnTasks from '../../components/ColumnTasks';
import ColumnStatuses from '../../components/ColumnStatuses';

import { StyledWorkSpace } from './styles';

export default function WorkSpace() {
  const [tasks, setTasks] = useState([]);

  const getTasks = () =>
    TaskService.getTasks().then((res) => setTasks(res.data));

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <StyledWorkSpace>
      {tasks.map((col, index) => (
        <ColumnTasks column={col} index={index} />
      ))}
      <ColumnStatuses />
    </StyledWorkSpace>
  );
}
