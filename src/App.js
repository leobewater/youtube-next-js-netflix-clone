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
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    // listen to user login/logout when loads
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // logged in
        // console.log('userAuth:', userAuth);
        // dispatch event to store for login
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // logged out
        dispatch(logout);
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
    { path: '/profile', element: user && <ProfileScreen /> },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
