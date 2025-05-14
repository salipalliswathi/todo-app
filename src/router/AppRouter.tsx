import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('../pages/HomePage'));
const Counter = lazy(() => import('../components/Counter'));
const UserDetailsForm = lazy(() => import('../components/UserDetailsForm'));
const TodoApp = lazy(() => import('../components/TodoApp'));

const AppRouter = () => {
  return (
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/count" element={<Counter />} />
          <Route path="/user-form" element={<UserDetailsForm />} />
          <Route path="/todo" element={<TodoApp />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default AppRouter; 