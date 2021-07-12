import { lazy } from 'react'

import IRoute from '../IRoute'

const PermissionTest = lazy(() => import('@/views/Permission/test'))

const routes: IRoute = {
  name: '',
  title: '',
  path: '/permission',
  children: [
    {
      name: 'test',
      title: '测试页',
      path: '/permission/test',
      exact: true,
      component: PermissionTest,
    },
  ],
}

export default routes
