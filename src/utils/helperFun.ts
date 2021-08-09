// 获取(嵌套)数组第一项
export const getArrFirst = (arr: Array<any>): any => {
  if (!arr?.length) return null
  if (arr[0]?.children?.length) {
    return getArrFirst(arr[0].children)
  }
  return arr[0]
}
