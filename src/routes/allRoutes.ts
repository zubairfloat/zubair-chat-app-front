import React from 'react';
import Login from '../pages/Authentication/login';
import Dashboard from '../pages/Dashboard/index';
import Root from '../pages/Root/index';


interface RouteProps {
    path: string;
    component?: any;
    exact?: boolean
}

const publicRoutes: Array<RouteProps> = [
    {path: '/auth-login' , component: Login}
]

const privateRoutes: Array<RouteProps> = [
    {path: '/dashboard' , component: Dashboard},
    {path: '/', exact: true , component: Root}
]

export {publicRoutes , privateRoutes}