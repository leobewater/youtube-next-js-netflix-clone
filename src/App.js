import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ErrorScreen from './screens/ErrorScreen';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <HomeScreen />, errorElement: <ErrorScreen /> },
  { path: '/profile', element: <HomeScreen /> },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
