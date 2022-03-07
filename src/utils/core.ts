// 方便生成联合类型
export const tupleStr = <T extends string[]>(...args: T) => args

export const tupleNum = <T extends number[]>(...args: T) => args

/**
 * 获取url中的查询字符串参数
 */
export const getURLParams = (url: string): any => {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}'
  )
}

/**
 * 序列化请求参数
 */

export function paramsSerializer(params = {}) {
  const paramArr: string[] = []
  let key: string
  let value: any
  for ([key, value] of Object.entries(params)) {
    if (Array.isArray(value)) {
      value.forEach(item => paramArr.push(`${encodeURIComponent(key)}=${encodeURIComponent(item)}`))
    } else {
      // 剔除null和undefined值
      // eslint-disable-next-line
      value != null && paramArr.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    }
  }
  return paramArr.join('&')
}

/**
 * 延迟执行async函数的一部分, 将其放入休眠状态, 返回Promise。
 * @param {Number} interval  阻塞的时间 ms
 * @example
```
async function test() {
  console.log('Hello')
  await sleep(1000)
  console.log('world!')
}
```
 */
export const sleep = (interval: number) => new Promise(resolve => setTimeout(resolve, interval))

// 复制内容到剪贴板
export const copyToBoard = (value: string) => {
  if (navigator.clipboard) {
    // clipboard api, 不兼容IE浏览器
    navigator.clipboard.writeText(value)
  } else {
    // 传统方法，兼容IE浏览器
    const element = document.createElement('textarea')
    document.body.appendChild(element)
    element.value = value
    element.select()
    if (document.execCommand('copy')) {
      document.execCommand('copy')
      document.body.removeChild(element)
      return true
    }
    document.body.removeChild(element)
    return false
  }
}

// 平滑滚动到页面顶部
export const smoothScrollingToTop = () => {
  const top = document.documentElement.scrollTop || document.body.scrollTop
  if (top > 0) {
    window.requestAnimationFrame(smoothScrollingToTop)
    window.scrollTo(0, top - top / 8)
  }
}

// 防抖函数: 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时，先计算时间后执行
export const debounce = (func: Function, time: number, immediate = false) => {
  let timer: number | null = null
  return (...args: any) => {
    if (timer) clearInterval(timer)
    if (immediate) {
      if (!timer) func.apply(this, args)
      timer = window.setTimeout(() => {
        timer = null
      }, time)
    } else {
      timer = window.setTimeout(() => {
        func.apply(this, args)
      }, time)
    }
  }
}

// 节流函数: n秒内回调函数只会被执行一次，先执行后计算
export const throttle = (func: Function, time: number, immediate = false) => {
  if (immediate) {
    let prevTime = 0
    return (...args: any) => {
      let nowTime = Date.now()
      if (nowTime - prevTime >= time) {
        func.apply(this, args)
        prevTime = nowTime
      }
    }
  } else {
    let timer: number | null = null
    return (...args: any) => {
      if (!timer) {
        func.apply(this, args)
        timer = window.setTimeout(() => {
          if (timer) clearInterval(timer)
          timer = null
        }, time)
      }
    }
  }
}
