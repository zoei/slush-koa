const log4js = require('log4js');
const logConfig = require('../config').get('log');
log4js.configure({
  appenders: { mid: { type: 'file', filename: 'mid.log' } },
  categories: { appenders: ['mid'], level: 'debug' }
});