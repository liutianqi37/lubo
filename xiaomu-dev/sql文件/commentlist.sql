/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80012
Source Host           : localhost:3306
Source Database       : project

Target Server Type    : MYSQL
Target Server Version : 80012
File Encoding         : 65001

Date: 2019-11-05 10:46:45
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for commentlist
-- ----------------------------
DROP TABLE IF EXISTS `commentlist`;
CREATE TABLE `commentlist` (
  `commentId` int(11) NOT NULL AUTO_INCREMENT,
  `commentCon` varchar(255) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `commentTime` varchar(255) NOT NULL,
  PRIMARY KEY (`commentId`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of commentlist
-- ----------------------------
INSERT INTO `commentlist` VALUES ('1', '沐恩是一个非常好的网站', 'fengyan', '2019-3-23');
INSERT INTO `commentlist` VALUES ('2', '沐恩网站还行吧 ', 'fengyan', '2019-4-23');
INSERT INTO `commentlist` VALUES ('3', '就那吧', 'liuqi', '2018-2-23');
