import React from 'react';
import { Route } from "react-router-dom";
import { useProtectedRoute } from '@hooks';

export default ({onAuthenticated, ...props}) => (
  useProtectedRoute(isAuthenticated => (
    onAuthenticated && isAuthenticated ?
      onAuthenticated(props) :
      <Route {...props} />
  ))
)