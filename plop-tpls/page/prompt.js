const path = require('path')
const { getFolder } = require('../utils.js')

module.exports = {
  description: '新建页面',
  prompts: [
    {
      type: 'list',
      name: 'dirPath',
      message: '请选择页面创建目录',
      choices: getFolder('src/views'),
    },
    {
      type: 'input',
      name: 'name',
      message: '请输入文件名',
      validate: v => {
        if (!v || v.trim === '') {
          return '文件名不能为空'
        } else {
          return true
        }
      },
    },
  ],
  actions: data => {
    let relativePath = path.relative('src/views', data.dirPath)

    let pagePath = '',
      lessPath = ''
    pagePath = `${data.dirPath}/{{properCase name}}/index.tsx` // dotCase、properCase、kebabCase、camelCase、lowerCase
    lessPath = `${data.dirPath}/{{properCase name}}/index.less`

    const actions = [
      {
        type: 'add',
        path: pagePath,
        templateFile: 'plop-tpls/page/index.hbs',
        data: {
          componentName: `${relativePath} ${data.name}`,
        },
      },
      {
        type: 'add',
        path: lessPath,
        templateFile: 'plop-tpls/page/less.hbs',
      },
    ]
    return actions
  },
}
