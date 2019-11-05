"use strict";
const Controller = require("egg").Controller;
class LoginController extends Controller {
  async index() {
    const results = await this.app.mysql.select("user");
    let body = this.ctx.request.body;
    let flag = results.some(
      item => item.UserName === body.UserName && item.PassWord === body.PassWord
    );
    if (flag) {
      this.ctx.body = {
        code: 1,
        message: "登录成功",
        userId: body.UserName
      };
    } else {
      this.ctx.body = {
        code: 0,
        message: "登录失败"
      };
    }
  }
}

module.exports = LoginController;
