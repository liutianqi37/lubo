'use strict';

const Service = require('egg').Service;

class IndexService extends Service {
  async list() {
    const user = await this.app.mysql.select('1702a');
    return user
  }
}

module.exports = IndexService;