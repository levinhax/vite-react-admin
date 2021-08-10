// 过滤空参数
export const helperFilterEmptyParam = (obj: { [x: string]: any }) => {
  const newObj: { [x: string]: any } = {}
  for (let key in obj) {
    if (obj[key] !== '') {
      newObj[key] = obj[key]
    }
  }
  return newObj
}
