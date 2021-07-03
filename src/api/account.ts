import request from '@/utils/request'

// 登录
const login = async (params: { username: string; password: string; verCode: string }) => {
  const res = await request.post('/login', { params, responseType: 'json' })
  return {
    token: res.token,
  }
}

export default {
  login,
}
