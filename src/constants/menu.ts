import { IRoute } from '@/router/innerRouter'

export const mainAppMenus: IRoute[] = [
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
      {
        name: 'otherRegexp',
        title: '正则',
        path: '/other/regexp',
      },
      {
        name: 'otherFile',
        title: '文件',
        path: '/other/file',
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

const menus: IRoute[] = [
  ...mainAppMenus,
  // vue2 子应用
  {
    name: 'qiankun-micro-vue2',
    title: '子应用Vue2',
    path: '/micro1',
    icon: 'menuBlank',
    children: [
      {
        name: 'home',
        title: '主页',
        path: '/micro1/home',
      },
      {
        name: 'about',
        title: '关于',
        path: '/micro1/about',
      },
      {
        name: 'formMix',
        title: '复杂表单',
        path: '/micro1/form-mix',
      },
    ],
  },
]

export default menus
