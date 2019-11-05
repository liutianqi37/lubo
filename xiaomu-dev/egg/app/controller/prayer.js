"use strict";

const Controller = require("egg").Controller;

class PrayController extends Controller {
  //祷告动态
  async index() {
    const { ctx, service } = this;
    let userId = ctx.query.token;
    let count = ctx.query.count;
    let result = await service.prayList.getprayList(userId, count);
    ctx.body = result;
  }

}

module.exports = PrayController;



