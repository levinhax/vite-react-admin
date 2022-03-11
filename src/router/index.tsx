import React, { lazy } from 'react'
// import { useRoutes } from 'react-router-dom'

const OuterLayout = lazy(() => import('@/layouts/outer-layout'))
// import OuterLayout from '@/layouts/outer-layout/outerLayout'
// const Login = lazy(() => import('@/views/account/login'))
// const Register = lazy(() => import('@/views/account/register'))

// const GetRoutes = () => {
//   const element = useRoutes([
//     {
//       path: '/',
//       element: OuterLayout,
//       children: [
//         {
//           path: '/login',
//           element: <div>111</div>,
//         },
//         {
//           path: '/Register',
//           element: <div>222</div>,
//         },
//       ],
//     },
//   ])
//   return <>{element}</>
// }

// export default GetRoutes

const routes = [
  {
    path: '/',
    element: <OuterLayout />,
    children: [
      {
        path: '/login',
        element: <div>111</div>,
      },
      {
        path: '/Register',
        element: <div>222</div>,
      },
    ],
  },

  // {
  //   path: '/login',
  //   element: <div>111</div>,
  // },
  // {
  //   path: '/Register',
  //   element: <div>222</div>,
  // },
]

export default routes
