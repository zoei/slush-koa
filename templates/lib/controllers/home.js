const Controller = require('.')
class HomeController extends Controller {
  get(ctx) {
    ctx.body = 'Hello World!'
  }
}
module.exports = new HomeController()