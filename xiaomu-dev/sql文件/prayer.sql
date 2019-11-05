/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80012
Source Host           : localhost:3306
Source Database       : project

Target Server Type    : MYSQL
Target Server Version : 80012
File Encoding         : 65001

Date: 2019-11-05 10:47:24
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for prayer
-- ----------------------------
DROP TABLE IF EXISTS `prayer`;
CREATE TABLE `prayer` (
  `prayid` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `imgs` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `content` varchar(255) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `nowtime` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`prayid`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of prayer
-- ----------------------------
INSERT INTO `prayer` VALUES ('1', '沐恩小猫', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573022588&di=083c8010176987d2adebb859ac91c34a&imgtype=jpg&er=1&src=http%3A%2F%2Fgb.cri.cn%2Fmmsource%2Fimages%2F2014%2F07%2F24%2F70%2F923547758393118294.jpg', '生命在他里头，这生命就是人的光。', 'fengyan', '2019-10-30 15:53:57');
INSERT INTO `prayer` VALUES ('2', '沐恩胖达', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572427632035&di=cc21ea53ef70fb951d616be1afe80de6&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fq_mini%2Cc_zoom%2Cw_640%2Fupload%2F20170708%2Fca6efeabdf5743258291daef86a653d3_th.jpg', '原罪与堕落，牺牲与救赎，胜利与永生。', 'fengyan', '2019-10-30 15:54:00');
INSERT INTO `prayer` VALUES ('3', '沐恩小狐', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572427737102&di=fcf589a414c4c85943f221083307347d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201309%2F12%2F20130912121613_iyNnt.thumb.700_0.jpeg', '狂妄和愚昧，乃知这也是捕风。', 'fengyan', '2019-10-30 15:54:03');
INSERT INTO `prayer` VALUES ('4', '沐恩象君', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2061049907,2049333340&fm=26&gp=0.jpg', '草必枯干，花必凋残', 'fengyan', '2019-10-30 15:54:06');
INSERT INTO `prayer` VALUES ('5', '沐恩兔兔', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2794532052,33004616&fm=26&gp=0.jpg', '哈利路亚！因为主我们的上帝', 'liuqi', '2019-10-30 15:54:41');
INSERT INTO `prayer` VALUES ('6', '沐恩小狼', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572451280227&di=414125086b0d6920e9f0ceed689fbec6&imgtype=0&src=http%3A%2F%2Fimg1.ali213.net%2Fpicfile%2FNews%2F2014%2F11%2F08%2F584_2014110895924334.jpg', '当困难来找你时，你去找神。­', 'liuqu', '2019-10-30 21:14:29');
INSERT INTO `prayer` VALUES ('7', '沐恩老虎', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572451370703&di=e65398779fc2af3cd6ae2e070d467822&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20130719%2FImg382111795.jpg', '每次试炼都是你投靠神的机会。', 'liuqi', '2019-10-30 21:15:19');
