const path = require('path');
const ConfigRouter = require('koa-router-config').ConfigRouter;
const configRouter = new ConfigRouter();
configRouter.config(
  { controllerRoot: path.resolve(__dirname, '../controllers/api') },
  {
    'get /users/:id': 'user.get',
    'post /users': 'user.create'
  }
);
module.exports = configRouter.router;