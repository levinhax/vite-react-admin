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
        name: 'batteryAnimation',
        title: '电池动画',
        path: '/other/animation/battery',
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
      {
        name: 'otherHoc',
        title: '高阶组件',
        path: '/other/hoc',
      },
      {
        name: 'otherHook',
        title: '常用hook',
        path: '/other/hook',
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

export const microVueMenus: IRoute[] = [
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
        name: 'form',
        title: '表单',
        path: '/micro1/form',
        children: [
          {
            name: 'formMix',
            title: '复杂表单',
            path: '/micro1/form-mix',
          },
        ],
      },
      {
        name: 'table',
        title: '表格',
        path: '/micro1/table',
        children: [
          {
            name: 'scrollTable',
            title: '滚动表格',
            path: '/micro1/scroll-table',
          },
          {
            name: 'pageTable',
            title: '表格分页',
            path: '/micro1/page-table',
          },
        ],
      },
      {
        name: 'chart',
        title: '图表',
        path: '/micro1/chart',
        children: [
          {
            name: 'lineChart',
            title: '折线图',
            path: '/micro1/line-chart',
          },
        ],
      },
    ],
  },
]

export const microReactMenus: IRoute[] = [
  {
    name: 'qiankun-micro-react',
    title: '子应用React',
    path: '/micro2',
    icon: 'menuBlank',
    children: [
      {
        name: 'home',
        title: '主页',
        path: '/micro2/home',
      },
      {
        name: 'about',
        title: '关于',
        path: '/micro2/about',
      },
      {
        name: 'charts',
        title: '图表',
        path: '/micro2/charts',
        children: [
          {
            name: 'lineChart',
            title: '折线图',
            path: '/micro2/charts/lineChart',
          },
          {
            name: 'ringRatioBarChart',
            title: '同比环比柱状图',
            path: '/micro2/charts/ringRatioBarChart',
          },
          {
            name: 'threeDimensionalCylinder',
            title: '立体柱图',
            path: '/micro2/charts/threeDimensionalCylinder',
          },
          {
            name: 'treeChart',
            title: '树状图',
            path: '/micro2/charts/tree',
          },
          {
            name: 'polygonColumnDiagram',
            title: '多边体柱图',
            path: '/micro2/charts/polygonColumnDiagram',
          },
          {
            name: 'transverseLineChart',
            title: '横向柱图',
            path: '/micro2/charts/transverseLineChart',
          },
        ],
      },
      {
        name: 'form',
        title: '表单',
        path: '/micro2/form',
        children: [
          {
            name: 'mixForm',
            title: '多表单',
            path: '/micro2/form/mixForm',
          },
          {
            name: 'reactHookForm',
            title: 'reactHookForm',
            path: '/micro2/form/reactHookForm',
          },
        ],
      },
    ],
  },
]

export const microReactViteMenus: IRoute[] = [
  {
    name: 'qiankun-micro-react-vite',
    title: '子应用React Vite',
    path: '/micro3',
    icon: 'menuBlank',
    children: [
      {
        name: 'home',
        title: '主页',
        path: '/micro3/home',
      },
      {
        name: 'about',
        title: '关于',
        path: '/micro3/about',
      },
    ],
  },
]

const menus: IRoute[] = [
  ...mainAppMenus,
  // vue2 子应用(micro1)
  ...microVueMenus,
  // react 子应用(micro2)
  ...microReactMenus,
  // react vite 子应用(micro3)
  ...microReactViteMenus,
]

export default menus
