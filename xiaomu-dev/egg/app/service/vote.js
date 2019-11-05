"use strict";

const Service = require("egg").Service;

class VoteService extends Service {
  //投票
  async getVote() {
    let result = await this.app.mysql.select("voteList");
    result = result.sort((a, b) => {
      return b.voteId - a.voteId;
    });
    return result;
  }

  //发布投票
  async pushVote(
    title,
    desc,
    optionList,
    endTime,
    isMultiple,
    anonymous,
    userId
  ) {
    endTime = parseInt(endTime);
    isMultiple = parseInt(isMultiple);
    anonymous = parseInt(anonymous);
    let result2 = "";
    let totalNum = 0;
    let result = await this.app.mysql.insert("voteList", {
      title,
      desc,
      endTime,
      logo:
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3974834430,2578081919&fm=26&gp=0.jpg",
      isMultiple,
      anonymous,
      userId,
      totalNum
    });
    optionList.map(async item => {
      totalNum += item.voteNum;
      result2 = await this.app.mysql.insert("optionList", {
        option: item.option,
        userId,
        voteNum: item.voteNum,
        voteItem: result.insertId
      });
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
  //投票详情
  async getVoteDetail(voteId) {
    voteId = parseInt(voteId);
    let result = await this.app.mysql.get("voteList", { voteId });
    let Sql = `SELECT * FROM optionList WHERE voteItem="${result.voteId}"`;
    let brr = [];
    let arr = await this.app.mysql.query(Sql);

    arr.map(item => {
      if (result.totalNum == 0) {
        brr.push(0);
      } else {
        brr.push(parseInt((item.voteNum / result.totalNum) * 100));
      }
    });
    
    return {
      arr,
      result,
      brr
    };
  }
  //参与投票  addVoteNum
  async addVoteNum(optionId) {
    optionId = parseInt(optionId);
    let obj = await this.app.mysql.get("optionList", { optionId });
    obj.voteNum++;
    let result = await this.app.mysql.update("optionList", obj, {
      where: { optionId }
    });
    let target = await this.app.mysql.get("voteList", { voteId: obj.voteItem });
    target.totalNum++;
    let result2 = await this.app.mysql.update("voteList", target, {
      where: { voteId: obj.voteItem }
    });
    if (result.affectedRows === 1 && result2.affectedRows === 1) {
      return {
        code: 1,
        message: "投票成功"
      };
    } else {
      return {
        code: 1,
        message: "投票失败"
      };
    }
  }
  //参与投票==>多选
  async addCheckBox(list) {
    let result = "";
    //更新每一项的票数
    list.map(async item => {
      result = await this.app.mysql.get("optionList", { optionId: item });
      result.voteNum++;
      await this.app.mysql.update("optionList", result, {
        where: { optionId: item }
      });
    });
    let newResult = await this.app.mysql.get("optionList", {
      optionId: list[0]
    });
    //更新总票数
    let target = await this.app.mysql.get("voteList", {
      voteId: newResult.voteItem
    });
    target.totalNum += list.length;
    let endResult = await this.app.mysql.update("voteList", target, {
      where: { voteId: newResult.voteItem }
    });
    if (endResult.affectedRows) {
      return {
        code: 1,
        message: "投票成功"
      };
    } else {
      return {
        code: 0,
        message: "投票失败"
      };
    }
  }
  //获取所有的投票
  async getAllVote(userName) {
    let arr = [];
    let sql = `SELECT * FROM voteList WHERE userId="${userName}"`;
    let result = await this.app.mysql.query(sql);
    let result2 = await this.app.mysql.select("optionList");
    result.map(item => {
      let dia = [];
      let obj = {
        title: {
          text: item.title + item.desc
        },

        xAxis: {
          data: []
        },
        yAxis: {},
        series: [
          {
            type: "bar",
            data: [],
            itemStyle: {
              // 点的颜色。
              width: 3,
              color: "#ff5733"
            }
          }
        ]
      };
      result2.map(k => {
        if (item.voteId === k.voteItem) {
          // console.log(k.voteNum)
          obj.xAxis.data.push(k.option);
          obj.series[0].data.push(k.voteNum);
        }
      });
      arr.push(obj);
    });
    return {
      code: 1,
      arr
    };
  }
}

module.exports = VoteService;
