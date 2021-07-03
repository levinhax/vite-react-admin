import { message } from 'antd'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

import config from '@/config'

export class Request {
  private baseConfig: AxiosRequestConfig = {
    baseURL: config.BaseURL,
    headers: {},
    timeout: 8000,
  }

  // axios实例
  private instance: AxiosInstance = axios.create(this.baseConfig)

  public constructor() {
    this.setReqInterceptors()
    this.setResnterceptors()
  }

  // 设置请求头
  public setHeader = (headers: any) => {
    this.baseConfig.headers = { ...this.baseConfig.headers, ...headers }
    this.instance = axios.create(this.baseConfig)
    this.setReqInterceptors()
    this.setResnterceptors()
  }

  // get请求
  public get = (url: string, data: any = {}, config: AxiosRequestConfig = {}): Promise<any> =>
    this.instance({
      ...{ url, method: 'get', params: data },
      ...config,
    })

  // post请求
  public post = (url: string, data: any = {}, config: AxiosRequestConfig = {}): Promise<any> =>
    this.instance({
      ...{ url, method: 'post', data },
      ...config,
    })

  // 不经过统一的axios实例的get请求
  public postOnly = (url: string, data: any = {}, config: AxiosRequestConfig = {}) =>
    axios({
      ...this.baseConfig,
      ...{ url, method: 'post', data },
      ...config,
    })

  // 不经过统一的axios实例的post请求
  public getOnly = (url: string, data: any = {}, config: AxiosRequestConfig = {}) =>
    axios({
      ...this.baseConfig,
      ...{ url, method: 'get', params: data },
      ...config,
    })

  // delete请求,后端通过requestBody接收
  public deleteBody = (url: string, data: any = {}, config: AxiosRequestConfig = {}) =>
    this.instance({
      ...{ url, method: 'delete', data },
      ...config,
    })

  // delete请求,后端通过后端通过requestParam接收
  public deleteParam = (url: string, data: any = {}, config: AxiosRequestConfig = {}) =>
    this.instance({
      ...{ url, method: 'delete', params: data },
      ...config,
    })

  // 请求拦截器
  private setReqInterceptors = () => {
    this.instance.interceptors.request.use(
      config => {
        // 添加token
        if (localStorage.getItem('token') && config.url !== '/account/login') {
          config.headers.token = localStorage.getItem('token')
        }

        return config
      },
      err => {
        message.error('请求失败')
        return Promise.reject(err)
      }
    )
  }

  // 响应拦截器
  private setResnterceptors = () => {
    this.instance.interceptors.response.use(
      res => {
        if (res.request.responseType === 'blob') {
          return Promise.resolve(res)
        }

        const { code, data, msg } = res.data
        if (code === 200) {
          return Promise.resolve(data)
        } else {
          message.error(msg || '获取数据失败')
          return Promise.reject(res)
        }
      },
      err => {
        const { response } = err
        if (response && (response.status === 503 || response.status === 401)) {
          // authLogout()
          if (window.location.pathname !== '/login') {
            window.open('/login', '_self')
          }
        }

        if (axios.isCancel(err)) {
          // 为了终结promise链 就是实际请求 不会走到.catch(rej=>{});这样就不会触发错误提示之类了。
          return new Promise(() => {})
        }
        message.error('服务器响应失败')
        return Promise.reject(err)
      }
    )
  }
}

export default new Request()
