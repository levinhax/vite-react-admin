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

// URL正则
export const helperValidateUrl = (value: string) => {
  const uPattern = /^((https?|ftp|file):\/\/)?([\da-z\\.-]+)\.([a-z\\.]{2,6})([\\/\w \\.-]*)*\/?$/
  if (uPattern.test(value)) {
    return true
  }
  return false
}

// IPv4正则
export const helperValidateIPv4 = (value: string) => {
  const uPattern = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
  if (uPattern.test(value)) {
    return true
  }
  return false
}

// 身份证号正则
export const helperValidateIdCard = (value: string) => {
  const uPattern = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  if (uPattern.test(value)) {
    return true
  }
  return false
}

// 邮编正则
export const helperValidateZipCode = (value: string) => {
  const uPattern = /^\d{6}$/
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
