const Model = require('.')

class UserModel extends Model {
  constructor(data) {
    super(data);
    let { userId, userName } = data;
    this.userId = userId;
    this.userName = userName;
  }
}

module.exports = UserModel