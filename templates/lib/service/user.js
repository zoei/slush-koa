const Service = require('.')
const userdb = require('../db').user

class UserService extends Service {
  getById(id) {
    return userdb.findOne({ _id: id })
  }
  createUser(data) {
    return userdb.insert([data])
  }
}

module.exports = new UserService()