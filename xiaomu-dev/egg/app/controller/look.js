'use strict';

const Controller = require('egg').Controller;

class LookController extends Controller {
  async index() {
    const results = await this.app.mysql.select('group');
    this.ctx.body={
      results
    }
  }
}

module.exports = LookController;