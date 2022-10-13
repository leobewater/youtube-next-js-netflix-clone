import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/LoginScreen';
import ErrorScreen from './screens/ErrorScreen';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

function App() {
  const user = null;

  const router = createBrowserRouter([
    {
      path: '/',
      element: !user ? <Login /> : <HomeScreen />,
      errorElement: <ErrorScreen />,
    },
    { path: '/profile', element: user && <HomeScreen /> },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
