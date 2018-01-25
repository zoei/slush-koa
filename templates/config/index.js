const path = require('path')
let envConfig = {}
try {
  envConfig = require('./' + process.env.NODE_ENV)
} catch (err) {}

const config = Object.assign({
  host: '127.0.0.1',
  port: 8080,
  log: {
    level: 'debug',
    path: path.resolve(__dirname, '../logs')
  },
  db: {
    path: path.resolve(__dirname, '../data')
  },
  static_root: path.resolve(__dirname, '../static'),
  app_root: path.resolve(__dirname, '../static')
}, envConfig)

module.exports = {
  get: function(key) {
    return key.split('.').reduce((prev, name) => {
      return prev[name]
    }, config)
  }
}