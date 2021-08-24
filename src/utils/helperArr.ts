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

// 判断数组元素是否重复
export const isRepeat = (arr: Array<any>): boolean => {
  const hash: { [x: string]: any } = {}
  for (let i in arr) {
    if (hash[arr[i]]) {
      return true
    }
    hash[arr[i]] = true
  }
  return false
}

// 数组去重
export const noRepeat = (arr: Array<any>): any => {
  // const set = new Set()
  // for (let i = 0; i < arr.length; i++) {
  //   set.add(arr[i])
  // }
  // return Array.from(set)
  return [...new Set(arr)]
}
