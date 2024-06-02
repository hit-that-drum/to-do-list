import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ACalculator from './pages/ACalculator';
import Landing from './pages/Landing';
import Login from './pages/Login';
import ToDoList from './pages/ToDoList';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/to-do-list" element={<ToDoList />} />
        <Route path="/a-calculator" element={<ACalculator />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
