'use strict';

const Controller = require('egg').Controller;
class RegisterController extends Controller {
  async index() {
    const results = await this.app.mysql.select('user');
    let body = this.ctx.request.body;
    let flag = results.some(item=>item.UserName === body.UserName)
    if(flag){ 
        this.ctx.body = {
            code:-1,
            message:"注册失败"
        }
    }else{
        console.log(body)
        const result = await this.app.mysql.insert('user', {UserName: body.UserName,PassWord:body.PassWord});
        this.ctx.body = {
            code:1,
            message:"注册成功",
            result
        }
    }
   
  }
}

module.exports = RegisterController;