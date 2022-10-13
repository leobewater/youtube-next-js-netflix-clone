import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/LoginScreen';
import ErrorScreen from './screens/ErrorScreen';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  onAuthStateChanged,
  // signOut,
} from 'firebase/auth';
import { auth } from './firebase';

function App() {
  const user = null;

  useEffect(() => {
    // listen to user login/logout when loads
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // logged in
        console.log("userAuth:", userAuth);
      } else {
        // logged out
      }
    });

    // clean up for performance
    return unsubscribe;
  }, []);

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
