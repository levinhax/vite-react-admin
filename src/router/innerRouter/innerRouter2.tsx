import React, { lazy, Suspense } from 'react'
import { Routes, Route, RouteProps } from 'react-router-dom'

import PageLoading from '@/components/page-loading/pageLoading'

import IRoute from './IRoute'

// const Home = lazy(() => import('@/views/Home'))
const Dashboard = lazy(() => import('@/views/Dashboard'))
const OtherAnimation = lazy(() => import('@/views/Other/animation'))
const OtherColor = lazy(() => import('@/views/Other/color'))

// const routes: RouteProps[] = [
//   {
//     path: '/dashboard',
//     element: Dashboard,
//   },
//   {
//     path: '/home',
//     element: Home,
//   },
// ]

export const routes: IRoute[] = [
  {
    name: 'dashboard',
    title: '首页',
    path: '/dashboard',
    element: Dashboard,
  },
  {
    name: 'otherAnimation',
    title: '动画',
    path: '/other/animation',
    element: OtherAnimation,
  },
  {
    name: 'otherColor',
    title: '色彩',
    path: '/other/color',
    element: OtherColor,
  },
]

const InnerRouter = () => (
  <Suspense fallback={<PageLoading />}>
    <Routes>
      {routes.map((route: RouteProps) => (
        <Route key={route.path + ''} path={route.path} element={route.element} />
      ))}
    </Routes>
  </Suspense>
)

export default InnerRouter
