import React from 'react';
import { TodoIcon } from '.';

function DeleteIcon({ onDelete }) {
  return (
    <TodoIcon
      type="delete"
      color="#454b66"
      onClick={onDelete}
    />
  );
}

export { DeleteIcon };