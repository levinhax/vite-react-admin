// 获取(嵌套)数组第一项
export const getArrFirst = (arr: Array<any>): any => {
  if (!arr?.length) return null
  if (arr[0]?.children?.length) {
    return getArrFirst(arr[0].children)
  }
  return arr[0]
}

// 判断一维数组中的值是否都相等
export const isAllEqual = (array: Array<string | number | boolean>) => {
  if (array.length > 0) {
    return !array.some(function (value) {
      return value !== array[0]
    })
  } else {
    return true
  }
}
