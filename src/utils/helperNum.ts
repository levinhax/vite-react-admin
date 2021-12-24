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
