/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80012
Source Host           : localhost:3306
Source Database       : project

Target Server Type    : MYSQL
Target Server Version : 80012
File Encoding         : 65001

Date: 2019-11-05 10:47:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for optionlist
-- ----------------------------
DROP TABLE IF EXISTS `optionlist`;
CREATE TABLE `optionlist` (
  `optionId` int(11) NOT NULL AUTO_INCREMENT,
  `option` varchar(255) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `voteNum` int(255) NOT NULL,
  `voteItem` int(255) NOT NULL,
  PRIMARY KEY (`optionId`)
) ENGINE=MyISAM AUTO_INCREMENT=101 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of optionlist
-- ----------------------------
INSERT INTO `optionlist` VALUES ('70', '是', 'fengyan', '100', '1');
INSERT INTO `optionlist` VALUES ('71', '不是', 'fengyan', '1', '1');
INSERT INTO `optionlist` VALUES ('65', '不好看', 'fengyan', '28', '22');
INSERT INTO `optionlist` VALUES ('66', '贼好看', 'fengyan', '88', '22');
INSERT INTO `optionlist` VALUES ('67', '不可能？', 'fengyan', '12', '23');
INSERT INTO `optionlist` VALUES ('68', '你想啥呢', 'fengyan', '48', '23');
INSERT INTO `optionlist` VALUES ('69', '应该会吧', 'fengyan', '78', '23');
INSERT INTO `optionlist` VALUES ('74', '是', 'fengyan', '2', '25');
INSERT INTO `optionlist` VALUES ('75', '不是', 'fengyan', '0', '25');
INSERT INTO `optionlist` VALUES ('76', '不知道', 'fengyan', '1', '25');
INSERT INTO `optionlist` VALUES ('77', '国泰民安', 'fengyan', '2', '26');
INSERT INTO `optionlist` VALUES ('78', '祖国繁荣富强', 'fengyan', '3', '26');
INSERT INTO `optionlist` VALUES ('79', '无灾无难', 'fengyan', '3', '26');
INSERT INTO `optionlist` VALUES ('80', '必须滴', 'fengyan', '1', '27');
INSERT INTO `optionlist` VALUES ('81', '还行吧', 'fengyan', '0', '27');
INSERT INTO `optionlist` VALUES ('82', '不错', 'fengyan', '4', '28');
INSERT INTO `optionlist` VALUES ('83', '挺好', 'fengyan', '4', '28');
INSERT INTO `optionlist` VALUES ('84', '非常好', 'fengyan', '3', '28');
INSERT INTO `optionlist` VALUES ('85', '必须的必', 'liuqi', '0', '29');
INSERT INTO `optionlist` VALUES ('86', '没毛病', 'liuqi', '0', '29');
INSERT INTO `optionlist` VALUES ('97', '高薪入职', 'liuqi', '0', '35');
INSERT INTO `optionlist` VALUES ('95', '23123', 'liuqi', '2', '34');
INSERT INTO `optionlist` VALUES ('96', '123123', 'liuqi', '0', '34');
INSERT INTO `optionlist` VALUES ('99', '北京', 'liuqi', '1', '36');
INSERT INTO `optionlist` VALUES ('100', '上海', 'liuqi', '0', '36');
INSERT INTO `optionlist` VALUES ('98', '一面而就', 'liuqi', '0', '35');
