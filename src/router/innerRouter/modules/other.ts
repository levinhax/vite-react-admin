import { lazy } from 'react'

import IRoute from '../IRoute'

const OtherAnimation = lazy(() => import('@/views/Other/animation'))
const OtherGallery = lazy(() => import('@/views/Other/gallery'))
const OtherRegExp = lazy(() => import('@/views/Other/regexp'))

const routes: IRoute = {
  name: 'other',
  title: '其他',
  path: '/other',
  children: [
    {
      name: 'animation',
      title: '动画',
      path: '/other/animation',
      exact: true,
      component: OtherAnimation,
    },
    {
      name: 'gallery',
      title: '画廊',
      path: '/other/gallery',
      exact: true,
      component: OtherGallery,
    },
    {
      name: 'otherRegexp',
      title: '正则',
      path: '/other/regexp',
      exact: true,
      component: OtherRegExp,
    },
  ],
}

export default routes
