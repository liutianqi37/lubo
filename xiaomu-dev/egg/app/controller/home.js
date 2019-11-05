"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, service } = this;
    let result = await service.index.list();
    ctx.body = result;
  }
  //动态
  async getDycList() {
    const { ctx, service } = this;
    let userId = ctx.query.token;
    let count = ctx.query.count;
    let result = await service.dycList.getDycList(userId, count);
    ctx.body = result;
  }
  //点赞
  async clickFab() {
    const { ctx, service } = this;
    let dycId = ctx.query.dycId;
    let result = await service.dycList.clickFab(dycId);
    ctx.body = result;
  }
  //详情
  async getDetails() {
    const { ctx, service } = this;
    let dycId = ctx.query.dycId;
    let result = await service.dycList.getDetails(dycId);
    ctx.body = result;
  }
  //浏览次数
  async updateLookNum() {
    const { ctx, service } = this;
    let lookNum = ctx.query.lookNum;
    let dycId = ctx.query.dycId;
    let result = await service.dycList.updateLookNum(lookNum, dycId);
    ctx.body = result;
  }
  //投票
  async getVote() {
    const { ctx, service } = this;
    let result = await service.vote.getVote();
    ctx.body = result;
  }
  //发布投票
  async pushVote() {
    const { ctx, service } = this;
    let {
      title,
      desc,
      optionList,
      endTime,
      isMultiple,
      anonymous,
      userId
    } = ctx.request.body;
    let result = await service.vote.pushVote(
      title,
      desc,
      optionList,
      endTime,
      isMultiple,
      anonymous,
      userId
    );
    ctx.body = result;
  }
  //获取投票
  async getVoteDetail() {
    let { ctx, service } = this;
    let { voteId } = ctx.query;
    let result =  await service.vote.getVoteDetail(voteId);
    ctx.body = result;
  }
  //投票==>单选
  async addVoteNum() {
    let { ctx, service } = this;
    let { optionId } = ctx.query;
    let result =  await service.vote.addVoteNum(optionId);
    ctx.body = result;
  }
  //多选
  async addCheckBox(){
    let {ctx,service}=this;
    let list=ctx.request.body.checkBoxList;
    let result =  await service.vote.addCheckBox(list);
    ctx.body = result;
  }
  //获取所有的投票
  async getAllVote(){
    let {ctx,service}=this
    let userName=ctx.query.userName;
    let result = await service.vote.getAllVote(userName);
    ctx.body = result;
  }
}

module.exports = HomeController;
