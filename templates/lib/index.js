const http = require('http');
const Koa = require('koa');
const config = require('../config');
const middlewares = require('./middlewares');
const router = require('./routes');

const app = new Koa();
app.use(middlewares);

app.on('error', (err, ctx) => {
  console.log(err)
});

http.createServer(app.callback()).listen(config.get('port'), config.get('host'), () => {
  console.log(`app start at: http://${config.get('host')}:${config.get('port')}`)
})