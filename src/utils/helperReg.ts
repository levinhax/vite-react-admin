// 用户名正则，4到16位（字母，数字，下划线，减号）
export const helperValidateUserName = (value: string) => {
  const uPattern = /^[a-zA-Z0-9_-]{4,16}$/
  if (uPattern.test(value)) {
    return true
  }
  return false
}

// 账号名正则，字母开头，允许4-16字节，允许字母数字下划线
export const helperValidateAccountName = (value: string) => {
  const uPattern = /^[a-zA-Z][a-zA-Z0-9_]{3,15}$/
  if (uPattern.test(value)) {
    return true
  }
  return false
}

// 密码正则，必须包含大小写字母和数字的组合，可使用特殊字符，长度在8-12之间
export const helperValidatePwd = (value: string) => {
  // const uPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/
  const uPattern = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/)
  if (uPattern.test(value)) {
    return true
  }
  return false
}

// 手机号正则
export const helperValidatePhone = (value: string) => {
  const uPattern = /^1[3456789]\d{9}$/
  if (uPattern.test(value)) {
    return true
  }
  return false
}

// 邮箱正则
export const helperValidateEmail = (value: string) => {
  const uPattern = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
  if (uPattern.test(value)) {
    return true
  }
  return false
}

// 十六进制 Hex颜色
export const helperValidateHex = (value: string) => {
  const uPattern = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
  if (uPattern.test(value)) {
    return true
  }
  return false
}
