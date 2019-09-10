import React from 'react'
import { Switch } from 'react-router-dom'
import { PrivateRoute, PublicRoute } from '.';

export default ({ routes }) => (
    <Switch>
        {routes.map(({ private: isPrivateRoute, ...routeProps }) => isPrivateRoute ?
            <PrivateRoute {...routeProps} /> :
            <PublicRoute {...routeProps} />
        )}
    </Switch>
)