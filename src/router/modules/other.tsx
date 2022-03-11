import React from 'react'

import OtherColor from '@/views/Other/color'
import OtherFile from '@/views/Other/file'
import OtherVirtual from '@/views/Other/virtual'
import OtherHoc from '@/views/Other/hoc'
import OtherVideo from '@/views/Other/video'
import OtherAnimation from '@/views/Other/animation'
import BatteryAnimation from '@/views/Other/animation/battery'
import BulletChatAnimation from '@/views/Other/animation/bulletChat'
import BannerAnimation from '@/views/Other/animation/banner'
import OtherHook from '@/views/Other/hook'
import OtherRegExp from '@/views/Other/regexp'
import OtherTest from '@/views/Other/test'

const routes = [
  {
    name: 'other',
    title: '其他',
    path: '/other',
    children: [
      {
        name: 'color',
        title: '色彩',
        path: '/other/color',
        element: <OtherColor />,
      },
      {
        name: 'otherFile',
        title: '文件',
        path: '/other/file',
        element: <OtherFile />,
      },
      {
        name: 'virtual',
        title: '虚拟列表',
        path: '/other/virtual',
        element: <OtherVirtual />,
      },
      {
        name: 'otherHoc',
        title: '高阶组件',
        path: '/other/hoc',
        element: <OtherHoc />,
      },
      {
        name: 'otherVideo',
        title: '视频',
        path: '/other/video',
        element: <OtherVideo />,
      },
      {
        name: 'animation',
        title: '动画',
        path: '/other/animation',
        element: <OtherAnimation />,
      },
      {
        name: 'batteryAnimation',
        title: '充电动画',
        path: '/other/animation/battery',
        element: <BatteryAnimation />,
      },
      {
        name: 'bulletChatAnimation',
        title: '弹幕效果',
        path: '/other/animation/bullet',
        element: <BulletChatAnimation />,
      },
      {
        name: 'bannerAnimation',
        title: '轮播',
        path: '/other/animation/banner',
        element: <BannerAnimation />,
      },
      {
        name: 'otherHook',
        title: '常用hook',
        path: '/other/hook',
        element: <OtherHook />,
      },
      {
        name: 'otherRegexp',
        title: '正则',
        path: '/other/regexp',
        element: <OtherRegExp />,
      },
      {
        name: 'otherTest',
        title: '测试',
        path: '/other/test',
        element: <OtherTest />,
      },
    ],
  },
]

export default routes
