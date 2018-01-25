class Controller {
  sendAPIResponse(ctx, code, data) {
    ctx.body = {
      code,
      data
    }
  }
  sendAPIError(ctx, code, message) {
    ctx.body = {
      code,
      message
    }
  }
}

module.exports = Controller