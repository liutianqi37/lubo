/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80012
Source Host           : localhost:3306
Source Database       : project

Target Server Type    : MYSQL
Target Server Version : 80012
File Encoding         : 65001

Date: 2019-11-05 10:47:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for group
-- ----------------------------
DROP TABLE IF EXISTS `group`;
CREATE TABLE `group` (
  `groupId` int(11) NOT NULL AUTO_INCREMENT,
  `groupName` varchar(255) NOT NULL,
  `groupUrl` longtext NOT NULL,
  `uid` int(255) NOT NULL,
  `groupCon` varchar(255) NOT NULL,
  `userId` varchar(255) NOT NULL,
  PRIMARY KEY (`groupId`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of group
-- ----------------------------
INSERT INTO `group` VALUES ('1', '吃货小组', 'http://b-ssl.duitang.com/uploads/item/201601/13/20160113092307_TSzJv.thumb.700_0.jpeg', '2', '小组介绍', 'fengyan');
INSERT INTO `group` VALUES ('2', '唱歌小组', 'http://img3.duitang.com/uploads/item/201605/02/20160502131215_2tHME.thumb.700_0.jpeg', '2', '小组介绍', 'fengyan');
INSERT INTO `group` VALUES ('4', '活动小组', 'http://img.duoziwang.com/2018/02/2120343512621.jpg', '2', '小组介绍', 'fengyan');
INSERT INTO `group` VALUES ('5', '读书小组', 'http://img.9553.com/uploadfile/2017/1219/20171219035528236.jpg', '2', '小组介绍', 'fengyan');
INSERT INTO `group` VALUES ('6', '画画小组', 'http://b-ssl.duitang.com/uploads/item/201611/30/20161130130409_FTA5k.jpeg', '2', '小组介绍', 'fengyan');
INSERT INTO `group` VALUES ('7', '跳舞小组', 'http://hbimg.b0.upaiyun.com/2182ae047cf0078e70c56def14344ea9d3bf71566ba15-1gzf7t_fw658', '2', '小组介绍', 'fengyan');
INSERT INTO `group` VALUES ('8', '祷告小组', 'http://b-ssl.duitang.com/uploads/item/201607/28/20160728173230_dhJur.thumb.700_0.png', '2', '小组介绍', 'liuqi');
INSERT INTO `group` VALUES ('9', '拥抱小组', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572596677066&di=83e49d983e6eab8d9ce029df94f4ad2e&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D1944156091%2C814818697%26fm%3D214%26gp%3D0.jpg', '2', '小组介绍', 'liuqi');
INSERT INTO `group` VALUES ('10', '心理小组', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572597097402&di=032fbf481a980351a24874ff927f4326&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20120117%2FImg332379166.jpg', '2', '小组介绍', 'liuqi');
INSERT INTO `group` VALUES ('11', '英语小组', 'http://img4.imgtn.bdimg.com/it/u=3889226924,3355827204&fm=26&gp=0.jpg', '2', '小组介绍', 'liuqi');
INSERT INTO `group` VALUES ('12', '体育小组', 'http://img1.imgtn.bdimg.com/it/u=2507900272,3798577027&fm=26&gp=0.jpg', '2', '小组介绍', 'liuqi');
