const Controller = require('..')
const userService = require('../../service/user')

class UserController extends Controller {
  async create(ctx) {
    console.log('create', this, ctx.request.body)
    try {
      let doc = await userService.createUser(ctx.request.body)
      this.sendAPIResponse(ctx, 0, doc)
    } catch (err) {
      this.sendAPIError(ctx, -404, err.message)
    }
  }
  async get(ctx) {
    console.log('get user', ctx.params.id)
    ctx.body = await userService.getById(ctx.params.id)
  }
}
module.exports = new UserController()