// 用户名正则，4到16位（字母，数字，下划线，减号）
export const helperValidateUserName = (value: string) => {
  const uPattern = /^[a-zA-Z0-9_-]{4,16}$/
  if (uPattern.test(value)) {
    return true
  }
  return false
}
