"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get("/getDycList", controller.home.getDycList);
  router.get("/list", controller.home.index);
  router.get("/clickFab", controller.home.clickFab);
  router.get("/getDetails", controller.home.getDetails);
  router.get("/updateLookNum", controller.home.updateLookNum);
  router.get("/getVote", controller.home.getVote);
  router.get("/addVoteNum", controller.home.addVoteNum);
  router.post("/addCheckBox", controller.home.addCheckBox); //多选投票
  router.post("/pushVote", controller.home.pushVote);
  router.post('/fabu', controller.ailing.fabu);  //个人动态  发布
  router.get("/getVoteDetail", controller.home.getVoteDetail);
  router.post("/getlogin", controller.login.index); //登陆
  router.post("/getregister", controller.register.index); //注册
  router.get("/getprayer", controller.prayer.index); //代祷列表
  router.get("/getAllVote", controller.home.getAllVote); //获取所有的投票
  router.get("/getprayList", controller.prayer.index); //代祷列表
  router.get("/guestbook", controller.ailing.guestbook); //留言板
  router.get("/oauth/redirect", controller.oAuth.getOAuth); //第三方登陆
  router.get("/message", controller.ailing.loading); //留言板加载更多
  router.get("/pinglun", controller.ailing.pinglun); //留言板加载更多 评论区
  router.get("/getgroup", controller.group.index); //小组列表
  router.get("/getgroup", controller.look.index); //查看小组列表
  router.post("/search", controller.group.search); //搜索小组
  router.redirect("/", "/login", 302); //页面转移
};
