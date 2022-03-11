import React from 'react'
import otherRoutes from './modules/other'

import InnerLayout from '@/layouts/inner-layout'
import Dashboard from '@/views/Dashboard'
import PermissionTest from '@/views/Permission/test'

const routes = [
  {
    path: '/',
    element: <InnerLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/permission',
        children: [
          {
            path: '/permission/test',
            element: <PermissionTest />,
          },
        ],
      },
      ...otherRoutes,
    ],
  },
]

export default routes
