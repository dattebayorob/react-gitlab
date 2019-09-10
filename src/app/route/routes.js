import React from 'react'
import { Redirect } from 'react-router-dom'
import { Switch } from '@/components/route'
import { Home } from '@/views/home'
import { Login } from '@/views/login'

const redirectToRoot = () => <Redirect to="/" />

const routeEntries = [
    {
        path: '/',
        component: Home,
        private: true,
    },
    {
        path: '/login',
        component: Login,
        onAuthenticated: redirectToRoot
    }
]

export default () => (
    <Switch routes={routeEntries}/>
)