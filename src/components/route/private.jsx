import React from 'react';
import { Redirect, Route } from "react-router-dom";
import { useProtectedRoute } from '@hooks';

export default ({ onUnauthorized, hasAuthority, ...props}) => {

  const redirectTo = pathname => (
    <Redirect to={{ pathname, state: { from: props.location.pathname }}} />
  )

  return (
    useProtectedRoute( (isAuthenticated, isAuthorized) => {
      if( isAuthenticated ){
        if( isAuthorized ){
          return <Route {...props} />
        }
        if( onUnauthorized ){
          return onUnauthorized(props)
        }
        return redirectTo("/unauthorized")
      }
      return redirectTo("/login")
    }, hasAuthority)
  )
}