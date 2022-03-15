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
        element: () => import('@/views/Other/color'),
      },
      {
        name: 'otherFile',
        title: '文件',
        path: '/other/file',
        element: () => import('@/views/Other/file'),
      },
      {
        name: 'virtual',
        title: '虚拟列表',
        path: '/other/virtual',
        element: () => import('@/views/Other/virtual'),
      },
      {
        name: 'otherHoc',
        title: '高阶组件',
        path: '/other/hoc',
        element: () => import('@/views/Other/hoc'),
      },
      {
        name: 'otherVideo',
        title: '视频',
        path: '/other/video',
        element: () => import('@/views/Other/video'),
      },
      {
        name: 'animation',
        title: '动画',
        path: '/other/animation',
        element: () => import('@/views/Other/animation'),
      },
      {
        name: 'batteryAnimation',
        title: '充电动画',
        path: '/other/animation/battery',
        element: () => import('@/views/Other/animation/battery'),
      },
      {
        name: 'bulletChatAnimation',
        title: '弹幕效果',
        path: '/other/animation/bullet',
        element: () => import('@/views/Other/animation/bulletChat'),
      },
      {
        name: 'bannerAnimation',
        title: '轮播',
        path: '/other/animation/banner',
        element: () => import('@/views/Other/animation/banner'),
      },
      {
        name: 'otherHook',
        title: '常用hook',
        path: '/other/hook',
        element: () => import('@/views/Other/hook'),
      },
      {
        name: 'otherRegexp',
        title: '正则',
        path: '/other/regexp',
        element: () => import('@/views/Other/regexp'),
      },
      {
        name: 'otherTest',
        title: '测试',
        path: '/other/test',
        element: () => import('@/views/Other/test'),
      },
    ],
  },
]

export default routes
