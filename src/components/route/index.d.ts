import * as React from 'react'
import { RouteProps, RouteComponentProps } from 'react-router-dom'

interface PrivateRouteProps extends React.Component<RouteProps>{
    onUnauthorized?: (props: RouteComponentProps<any>) => React.ReactNode
    hasAuthority?: string | Array
}

export const PrivateRoute: React.FunctionComponent<PrivateRouteProps>

interface PublicRouteProps extends React.Component<RouteProps>{
    onAuthenticated?:  (props: RouteComponentProps<any>) => React.ReactNode
}

export const PublicRoute: React.FunctionComponent<PublicRouteProps>

interface SwitchProps{
    routes: Array
}

export const Switch: React.FunctionComponent<SwitchProps>