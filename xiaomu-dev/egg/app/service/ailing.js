'use strict';
const Service = require('egg').Service;
class AilingService extends Service {
    // 留言板
    async guestbook() {
      const data = await this.app.mysql.select('message');
      return data
    }
    // 评论
    async pinglun(limit,offset) {
      limit = limit*1
      offset = offset*1
      const data = await this.app.mysql.select('pinglun',{
        limit,
        offset
      });
      return data
    }

    //加载更多
    async loading(userId, count) {
      count = parseInt(count);
      let result;
      if (userId !== "null") {
        //查询个人状态
        let Sql = `SELECT * FROM message WHERE userid="${userId}"`;
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
          result = await this.app.mysql.select("message", {
            limit: 3, // 返回数据量
            offset: 0
          });
        } else {
          count = (count - 1) * 2;
          result = await this.app.mysql.select("message", {
            limit: 2, // 返回数据量
            offset: count
          });
        }
      }
      return result;
    }

 //发布
 async fabu(title, con, img1, img2,lookNum, message, fabulous, userId, logo
  ) {
    let result = await this.app.mysql.insert("dyclist", {
      title,
      con,
      img1,
      img2,
      lookNum,
      message,
      fabulous,
      userId,
      logo
    });
    if (result.affectedRows === 1) {
      return {
        code: 1,
        message: "发布成功"
      };
    } else {
      return {
        code: 0,
        message: "发布失败"
      };
    }
  }

}
module.exports = AilingService;
