const log4js = require('log4js');
const logger = log4js.getLogger('mid');
logger.level = require('../../config').get('log.level')
module.exports = () => async (ctx, next)=> {
  logger.debug(`${ctx.method} ${ctx.path}`)
  await next()
}