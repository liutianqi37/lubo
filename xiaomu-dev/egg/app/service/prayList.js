"use strict";

const Service = require("egg").Service;

class PrayListService extends Service {
  //获取所有的祷告列表
  async getprayList(userId, count) {
    count = parseInt(count);
    let result;
    if (userId !== "null") {
      //查询个人状态
      let Sql = `SELECT * FROM dyclist WHERE userid="${userId}"`;
      result = await this.app.mysql.query(Sql);
      if (count <= 1) {
        result = result.slice(0, 2);
      } else {
        count = (count - 1) * 2;
        result = result.slice(count, count + 2);
      }
    } else {
      //查询的是全部状态
      if (count <= 1) {
        result = await this.app.mysql.select("prayer", {
          limit: 2, // 返回数据量
          offset: 0
        });
      } else {
        count = (count - 1) * 2;
        result = await this.app.mysql.select("prayer", {
          limit: 2, // 返回数据量
          offset: count
        });
      }
    }
    return result;
  }
  

}

module.exports = PrayListService;
