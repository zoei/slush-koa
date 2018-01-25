const path = require('path')
const config = require('../config')

const datastore = require('nedb-promise')
let db = {}
db.user = datastore({
  filename: path.resolve(config.get('db.path'), 'user.db'),
  autoload: true
})

module.exports = db