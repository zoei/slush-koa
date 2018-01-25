const path = require('path');
const ConfigRouter = require('koa-router-config').ConfigRouter;
const configRouter = new ConfigRouter();
configRouter.config(
  { controllerRoot: path.resolve(__dirname, '../controllers') },
  {
    '/api': require('./api'),
    '/': 'home.get',
  }
);
module.exports = configRouter.router;