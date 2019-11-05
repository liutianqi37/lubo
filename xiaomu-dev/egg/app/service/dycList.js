"use strict";

const Service = require("egg").Service;

class DycListService extends Service {
  //获取所有的沐恩动态
  async getDycList(userId, count) {
    count = parseInt(count);
    let result;

    if (userId !== "undefined") {
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
        result = await this.app.mysql.select("dycList", {
          limit: 2, // 返回数据量
          offset: 0
        });
      } else {
        count = (count - 1) * 2;
        result = await this.app.mysql.select("dycList", {
          limit: 2, // 返回数据量
          offset: count
        });
      }
    }
    return result;
  }
  //点赞
  async clickFab(dycId) {
    dycId = parseInt(dycId);

    let target = await this.app.mysql.get("dycList", { dycId });
    target.fabulous++;
    target.aaa=2;
    let result = await this.app.mysql.update("dycList", target, {
      where: { dycId }
    });
    if (result.affectedRows == 1) {
      return {
        code: 1,
        message: "点赞成功"
      };
    } else {
      return {
        code: 0,
        message: "点赞失败"
      };
    }
  }
  //详情
  async getDetails(dycId) {
    dycId = parseInt(dycId);
    let result = await this.app.mysql.get("dycList", { dycId });
    return result;
  }
  //浏览次数
  async updateLookNum(lookNum, dycId) {
    lookNum = parseInt(lookNum);
    dycId = parseInt(dycId);
    let target = await this.app.mysql.get("dycList", { dycId });
    target.lookNum = lookNum;
    let result = await this.app.mysql.update("dycList", target, {
      where: { dycId }
    });
    if (result.affectedRows === 1) {
      return {
        code: 1,
        message: "更新成功"
      };
    } else {
      return {
        code: 0,
        message: "更新失败"
      };
    }
  }
}

module.exports = DycListService;
