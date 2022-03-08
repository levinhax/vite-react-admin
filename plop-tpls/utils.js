const path = require('path')
const fs = require('fs')

function getFolder(dirPath) {
  const components = []
  const files = fs.readdirSync(dirPath)
  files.forEach(function (item) {
    const stat = fs.lstatSync(dirPath + '/' + item)
    if (stat.isDirectory() === true && item != 'components') {
      components.push(dirPath + '/' + item)
      components.push(...getFolder(dirPath + '/' + item))
    }
  })
  return components
}

function getTplList(dirPath) {
  const components = []
  const files = fs.readdirSync(dirPath)
  files.forEach(function (item) {
    if (path.extname(item) === '.hbs' && item !== 'less.hbs') {
      components.push(item.split('.')[0])
    }
  })
  return components
}

module.exports = {
  getFolder,
  getTplList,
}
