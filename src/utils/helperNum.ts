// 正数
export const helperPositiveNum = (value: string) => {
  // const uPattern = /^[0-9]+.{0,1}[0-9]{0,2}$/ // 2位小数
  const uPattern = /^[0-9]+.{0,1}[0-9]{0,}$/ // 不限制小数位数
  if (uPattern.test(value)) {
    return true
  }
  return false
}

// 负数
export const helperNegativeNum = (value: string) => {
  const uPattern = /^-[0-9]+.{0,1}[0-9]{0,}$/
  if (uPattern.test(value)) {
    return true
  }
  return false
}

// 金钱格式化
export const helperFormatPrice = (num: number) => {
  const numStr = num.toString().split('.')
  let numInt = numStr[0]
  let numDec = numStr.length > 1 ? '.' + numStr[1] : '.'
  while (3 - numDec.length) numDec += '0'
  let resultInt = ''
  while (numInt.length > 3) {
    resultInt = ',' + numInt.slice(-3) + resultInt
    numInt = numInt.slice(0, -3)
  }
  return numInt + resultInt + numDec
}
