import { IRoute } from '@/router/innerRouter'

const menus: IRoute[] = [
  {
    name: 'dashboard',
    title: '首页',
    path: '/dashboard',
    icon: 'menuBlank',
  },
  {
    name: 'other',
    title: '其他',
    path: '/other',
    icon: 'menuChart',
    children: [
      {
        name: 'animation',
        title: '动画',
        path: '/other/animation',
      },
      {
        name: 'gallery',
        title: '画廊',
        path: '/other/gallery',
      },
    ],
  },
  {
    name: 'permission',
    title: '权限',
    path: '/permission',
    icon: 'menuBlank',
    children: [
      {
        name: 'test',
        title: '测试页',
        path: '/permission/test',
      },
    ],
  },
]

export default menus
