import { lazy } from 'react'

import IRoute from '../IRoute'

const OtherColor = lazy(() => import('@/views/Other/color'))
const OtherFile = lazy(() => import('@/views/Other/file'))
const OtherVirtual = lazy(() => import('@/views/Other/virtual')) // 虚拟列表、表格
const OtherHoc = lazy(() => import('@/views/Other/hoc')) // 高阶组件
const OtherVideo = lazy(() => import('@/views/Other/video'))
const OtherAnimation = lazy(() => import('@/views/Other/animation'))
const BatteryAnimation = lazy(() => import('@/views/Other/animation/battery'))
const BulletChatAnimation = lazy(() => import('@/views/Other/animation/bulletChat'))
const BannerAnimation = lazy(() => import('@/views/Other/animation/banner'))
const OtherHook = lazy(() => import('@/views/Other/hook')) // 常用hook
const OtherRegExp = lazy(() => import('@/views/Other/regexp'))
const OtherTest = lazy(() => import('@/views/Other/test')) // 测试页面

const routes: IRoute = {
  name: 'other',
  title: '其他',
  path: '/other',
  children: [
    {
      name: 'color',
      title: '色彩',
      path: '/other/color',
      exact: true,
      component: OtherColor,
    },
    {
      name: 'otherFile',
      title: '文件',
      path: '/other/file',
      exact: true,
      component: OtherFile,
    },
    {
      name: 'virtual',
      title: '虚拟列表',
      path: '/other/virtual',
      exact: true,
      component: OtherVirtual,
    },
    {
      name: 'otherHoc',
      title: '高阶组件',
      path: '/other/hoc',
      exact: true,
      component: OtherHoc,
    },
    {
      name: 'otherVideo',
      title: '视频',
      path: '/other/video',
      exact: true,
      component: OtherVideo,
    },
    {
      name: 'animation',
      title: '动画',
      path: '/other/animation',
      exact: true,
      component: OtherAnimation,
    },
    {
      name: 'batteryAnimation',
      title: '充电动画',
      path: '/other/animation/battery',
      exact: true,
      component: BatteryAnimation,
    },
    {
      name: 'bulletChatAnimation',
      title: '弹幕效果',
      path: '/other/animation/bullet',
      exact: true,
      component: BulletChatAnimation,
    },
    {
      name: 'bannerAnimation',
      title: '轮播',
      path: '/other/animation/banner',
      exact: true,
      component: BannerAnimation,
    },
    {
      name: 'otherHook',
      title: '常用hook',
      path: '/other/hook',
      exact: true,
      component: OtherHook,
    },
    {
      name: 'otherRegexp',
      title: '正则',
      path: '/other/regexp',
      exact: true,
      component: OtherRegExp,
    },
    {
      name: 'otherTest',
      title: '测试',
      path: '/other/test',
      exact: true,
      component: OtherTest,
    },
  ],
}

export default routes
