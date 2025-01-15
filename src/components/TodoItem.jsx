// src/components/TodoItem.jsx
import React from 'react';

const TodoItem = ({ todo }) => {
  return (
    <li className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded">
      <span>{todo.title}</span>
      <span className="text-sm text-gray-600">{todo.due_date}</span>
    </li>
  );
};

export default TodoItem;
