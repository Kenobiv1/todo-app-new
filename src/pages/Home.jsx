// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

const Home = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <AddTodo />
        <TodoList />
      </main>
    </div>
  );
};

export default Home;
