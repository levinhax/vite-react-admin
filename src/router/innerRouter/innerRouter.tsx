import React, { lazy, Suspense } from 'react'
import { Route, RouteProps, Switch } from 'react-router-dom'

import PageLoading from '@/components/page-loading/pageLoading'

const Home = lazy(() => import('@/views/Home'))
const Dashboard = lazy(() => import('@/views/Dashboard'))

const routes: RouteProps[] = [
  {
    path: '/dashboard',
    exact: true,
    component: Dashboard,
  },
  {
    path: '/home',
    exact: true,
    component: Home,
  },
]

const OterRouter = () => (
  <Suspense fallback={<PageLoading />}>
    <Switch>
      {routes.map((route: RouteProps) => (
        <Route key={route.path + ''} path={route.path} exact={route.exact} component={route.component} />
      ))}
    </Switch>
  </Suspense>
)

export default OterRouter
