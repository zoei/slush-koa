const compose = require('koa-compose')
const router = require('../routes')

// 注册路由
module.exports = () => {
  return compose([router.routes(), router.allowedMethods()])
}