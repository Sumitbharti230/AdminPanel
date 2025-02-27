import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('authToken');  // Get token from localStorage

  // If there's no token, redirect to login page
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
