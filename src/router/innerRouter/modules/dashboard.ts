import { lazy } from 'react'

import IRoute from '../IRoute'

const Dashboard = lazy(() => import('@/views/Dashboard'))

const route: IRoute = {
  name: 'dashboard',
  title: '首页',
  path: '/dashboard',
  element: Dashboard,
}

export default route
