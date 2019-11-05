'use strict';
const Controller = require('egg').Controller;
class AilingController extends Controller {

  // 留言板
  async guestbook() {
    const { ctx, service } = this;
    let result = await service.ailing.guestbook()
    ctx.body = result;
  }
  // 评论
  async pinglun() {
    const { ctx, service } = this;
    let {limit,offset}=ctx.query
    console.log(limit,offset)
    let result = await service.ailing.pinglun(limit,offset)
    ctx.body = result;
  }

  // 加载更多
  async loading() {
    const { ctx, service } = this;
    let userId = ctx.query.token;
    let count = ctx.query.count;
    let result = await service.ailing.loading(userId, count);
    ctx.body = result;
  }
  async fabu() {
    let { ctx, service } = this;
    let {
      title,
      con,
      img1,
      img2,
      lookNum,
      message,
      fabulous,
      userId,
      logo,
    } = ctx.request.body;
    let result = await service.ailing.fabu(
      title,
      con,
      img1,
      img2,
      lookNum,
      message,
      fabulous,
      userId,
      logo
    );
    console.log(result)
    ctx.body = result;
  }

}
module.exports = AilingController;
