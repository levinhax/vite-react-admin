const { getFolder, getTplList } = require('../utils.js')

module.exports = {
  description: '新建组件',
  prompts: [
    {
      type: 'confirm',
      name: 'isGlobal',
      message: '是否为全局组件',
      default: false,
    },
    {
      type: 'list',
      name: 'dirPath',
      message: '请选择组件创建目录',
      choices: getFolder('src/views'),
      when: answers => {
        return !answers.isGlobal
      },
    },
    {
      type: 'list',
      name: 'comTpl',
      message: '请选择组件模板',
      choices: getTplList('plop-tpls/component'),
      default: 'basic',
      when: answers => {
        return !answers.isGlobal
      },
    },
    {
      type: 'input',
      name: 'name',
      message: '请输入组件名称',
      validate: v => {
        if (!v || v.trim === '') {
          return '组件名称不能为空'
        } else {
          return true
        }
      },
    },
  ],
  actions: data => {
    const comTpl = data.comTpl || 'basic' // 默认组件模板

    // 生成组件地址
    let comPath = '',
      lessPath = ''
    if (data.isGlobal) {
      // 全局组件
      comPath = 'src/components/{{properCase name}}/index.tsx'
      lessPath = 'src/components/{{properCase name}}/index.less'
    } else {
      // 页面组件
      comPath = `${data.dirPath}/components/{{properCase name}}/index.tsx`
      lessPath = `${data.dirPath}/components/{{properCase name}}/index.less`
    }
    const actions = [
      {
        type: 'add',
        path: comPath,
        templateFile: `plop-tpls/component/${comTpl}.hbs`,
      },
      {
        type: 'add',
        path: lessPath,
        templateFile: 'plop-tpls/component/less.hbs',
      },
    ]
    return actions
  },
}
