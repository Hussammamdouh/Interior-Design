import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const RedirectIfLoggedIn = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn) {
    return <Navigate to="/" replace />; // Redirect to home page or dashboard
  }

  return children;
};

export default RedirectIfLoggedIn;
