/**
 * @name configManualChunk
 * @description chunk 拆包优化
 */

const vendorLibs: { match: string[]; output: string }[] = [
  {
    match: ['antd'],
    output: 'antd',
  },
  {
    match: ['echarts'],
    output: 'echarts',
  },
  // {
  //   match: ['xlsx'],
  //   output: 'xlsx',
  // },
  // {
  //   match: ['video.js'],
  //   output: 'video.js',
  // },
  {
    match: ['faker'],
    output: 'faker',
  },
]

// @ts-ignore
export const configManualChunk = (id: string) => {
  if (/[\\/]node_modules[\\/]/.test(id)) {
    const matchItem = vendorLibs.find(item => {
      const reg = new RegExp(`[\\/]node_modules[\\/]_?(${item.match.join('|')})(.*)`, 'ig')
      return reg.test(id)
    })
    return matchItem ? matchItem.output : null
  }
}
