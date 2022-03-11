import React, { lazy } from 'react'
// import { useRoutes } from 'react-router-dom'

const OuterLayout = lazy(() => import('@/layouts/outer-layout'))
const Login = lazy(() => import('@/views/account/login'))
const Register = lazy(() => import('@/views/account/register'))

const routes = [
  {
    path: '/account',
    element: <OuterLayout />,
    children: [
      {
        path: '/account/login',
        element: <Login />,
      },
      {
        path: '/account/Register',
        element: <Register />,
      },
    ],
  },
]

export default routes
