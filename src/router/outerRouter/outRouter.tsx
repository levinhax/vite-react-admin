import React, { lazy, Suspense } from 'react'
import { Routes, Route, RouteProps } from 'react-router-dom'

import PageLoading from '@/components/page-loading/pageLoading'

const Login = lazy(() => import('@/views/account/login'))
const Register = lazy(() => import('@/views/account/register'))

const routes: RouteProps[] = [
  {
    path: '/account/login',
    element: Login,
  },
  {
    path: '/account/register',
    element: Register,
  },
]

const OterRouter = () => (
  <Suspense fallback={<PageLoading />}>
    <Routes>
      {routes.map((route: RouteProps) => (
        <Route key={route.path + ''} path={route.path} element={route.element} />
      ))}
    </Routes>
  </Suspense>
)

export default OterRouter
