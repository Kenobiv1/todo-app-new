// src/components/AddTodo.jsx
import React, { useState } from 'react';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for adding a new to-do
    console.log('New To-Do:', { title, dueDate });
    setTitle('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-200 rounded">
      <h2 className="text-lg mb-2">Add New To-Do</h2>
      <div className="mb-2">
        <label className="block mb-1">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Due Date:</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add To-Do
      </button>
    </form>
  );
};

export default AddTodo;
