// src/components/TodoList.jsx
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  // Temporary static data for testing
  const todos = [
    { id: 1, title: 'Sample To-Do', due_date: '2025-01-20' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-lg mb-2">Your To-Dos</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
