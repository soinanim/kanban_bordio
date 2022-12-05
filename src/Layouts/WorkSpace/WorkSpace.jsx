import React, { useEffect, useState } from 'react';

import TaskService from '../../api/TaskService';
import ColumnTasks from '../../components/ColumnTasks';
import ColumnStatuses from '../../components/ColumnStatuses';

import { StyledWorkSpace } from './styles';

export default function WorkSpace() {
  const [columns, setColumns] = useState([]);

  const getColumns = () =>
    TaskService.getColumns().then((res) => setColumns(res.data));

  useEffect(() => {
    getColumns();
  }, []);

  return (
    <StyledWorkSpace>
      {columns.map((col, index) => (
        <ColumnTasks column={col} index={index} length={columns.length} />
      ))}
      <ColumnStatuses />
    </StyledWorkSpace>
  );
}
