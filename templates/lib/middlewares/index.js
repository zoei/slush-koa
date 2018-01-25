const path = require('path');
const compose = require('koa-compose');
const views = require('koa-views');
const fav = require('koa-favicon');
const send = require('koa-send');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const config = require('../../config');
const pkg = require('../../package.json');
const logger = require('./logger')
const router = require('./router')

const appRoot = path.resolve(__dirname, '../..')

const middlewares = [
  cors({ 'Access-Control-Allow-Origin': '*' }),
  logger(),
  bodyParser(),
  router()
];

module.exports = compose(middlewares);