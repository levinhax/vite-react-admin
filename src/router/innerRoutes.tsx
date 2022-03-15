import React, { Suspense, lazy } from 'react'
import PageLoading from '../components/page-loading/pageLoading'
import otherRoutes from './modules/other'

import InnerLayout from '@/layouts/inner-layout'
const Dashboard = () => import('@/views/Dashboard')
const PermissionTest = () => import('@/views/Permission/test')

const routes = [
  {
    path: '/',
    element: <InnerLayout />,
    children: [
      {
        path: '/dashboard',
        // element: () => import('@/views/Dashboard'),
        element: Dashboard,
      },
      {
        path: '/permission',
        children: [
          {
            path: '/permission/test',
            // element: () => import('@/views/Permission/test'),
            element: PermissionTest,
          },
        ],
      },
      ...otherRoutes,
    ],
  },
]

function LazyElement(props: any) {
  const { importFunc } = props
  const LazyComponent = lazy(importFunc)
  return (
    <Suspense fallback={<PageLoading />}>
      <LazyComponent />
    </Suspense>
  )
}

// 处理routes 如果element是懒加载，要包裹Suspense，v6中，Suspense要放在路由的element上
function lazyRoutes(routesArr: any) {
  if (routesArr && Array.isArray(routesArr) && routesArr.length > 0) {
    routesArr.forEach(route => {
      if (route.element && typeof route.element === 'function') {
        const importFunc = route.element
        route.element = <LazyElement importFunc={importFunc} />
      }
      if (route.children) {
        lazyRoutes(route.children)
      }
    })
  }
}
lazyRoutes(routes)

export default routes
