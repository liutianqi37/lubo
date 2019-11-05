'use strict';

const Controller = require('egg').Controller;

class groupController extends Controller {
  async index() {
    const results = await this.app.mysql.select('group');
    this.ctx.body={
      results
    }
  }
  //模糊搜索
  async search(){ 
    const { ctx } = this;
    let {groupName } = ctx.request.body;
    console.log(groupName)
    let sql = `SELECT * FROM \`group\` WHERE groupName LIKE "%${groupName}%"`;
    let result = await this.app.mysql.query(sql);
    console.log(result)

    ctx.body={
      result
    }
    if (result.length>0) {
      ctx.body= { code: 1, message: "搜索成功", result };
    } else {
      ctx.body={ code: 0, message: "搜索失败" };
    }
  }
}


module.exports =groupController;
