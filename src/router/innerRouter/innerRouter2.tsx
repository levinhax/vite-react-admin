import React, { lazy, Suspense } from 'react'
import { Route, RouteProps, Switch } from 'react-router-dom'

import PageLoading from '@/components/page-loading/pageLoading'

import IRoute from './IRoute'

// const Home = lazy(() => import('@/views/Home'))
const Dashboard = lazy(() => import('@/views/Dashboard'))
const OtherAnimation = lazy(() => import('@/views/Other/animation'))
const OtherColor = lazy(() => import('@/views/Other/color'))

// const routes: RouteProps[] = [
//   {
//     path: '/dashboard',
//     exact: true,
//     component: Dashboard,
//   },
//   {
//     path: '/home',
//     exact: true,
//     component: Home,
//   },
// ]

export const routes: IRoute[] = [
  {
    name: 'dashboard',
    title: '首页',
    path: '/dashboard',
    exact: true,
    component: Dashboard,
  },
  {
    name: 'otherAnimation',
    title: '动画',
    path: '/other/animation',
    exact: true,
    component: OtherAnimation,
  },
  {
    name: 'otherColor',
    title: '色彩',
    path: '/other/color',
    exact: true,
    component: OtherColor,
  },
]

const InnerRouter = () => (
  <Suspense fallback={<PageLoading />}>
    <Switch>
      {routes.map((route: RouteProps) => (
        <Route key={route.path + ''} path={route.path} exact={route.exact} component={route.component} />
      ))}
    </Switch>
  </Suspense>
)

export default InnerRouter
