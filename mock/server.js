const Koa = require('koa')
const app = new Koa()
const cors = require('koa2-cors')
const Router = require('@koa/router')
const router = new Router({ prefix: '/api' })

// app.use(async ctx => {
//   ctx.body = 'Hello World'
// })

router.get('/', ctx => {
  ctx.body = {
    status: 200,
    data: 'Hello World',
  }
})

app.use(router.routes()).use(router.allowedMethods())

// 如果使用后端跨域，开启这里
app.use(
  cors({
    origin: ctx => {
      const origin = ctx.headers.origin
      return origin
    },
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  })
)

app.listen(3001, () => {
  console.log('Server is running on 3001 port')
})
