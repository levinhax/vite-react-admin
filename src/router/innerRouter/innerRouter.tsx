import React, { Suspense } from 'react'
import { Routes, Route, RouteProps } from 'react-router-dom'

import PageLoading from '@/components/page-loading/pageLoading'

import IRoute from './IRoute'

const InnerRouter = ({ routeMap }: any) => {
  // 根据路由配置生成路由
  const getRoutes = (routeMap: IRoute[]) => {
    // const routes: RouteProps[] = []
    const routes: IRoute[] = []
    const getRoute = (routeMap: IRoute[]) => {
      routeMap.forEach(config => {
        const { path, name, title, element, children } = config
        if (children) {
          getRoute(children)
        } else {
          routes.push({ path, name, title, element })
        }
      })
    }
    getRoute(routeMap)
    return routes
  }

  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        {getRoutes(routeMap).map((route: RouteProps) => (
          <Route key={route.path + ''} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Suspense>
  )
}

export default InnerRouter
