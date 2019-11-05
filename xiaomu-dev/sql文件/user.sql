/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80012
Source Host           : localhost:3306
Source Database       : project

Target Server Type    : MYSQL
Target Server Version : 80012
File Encoding         : 65001

Date: 2019-11-05 10:47:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `UserName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `PassWord` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '123', '123');
INSERT INTO `user` VALUES ('2', 'fengyan', '123');
INSERT INTO `user` VALUES ('3', 'liuqi', '123');
INSERT INTO `user` VALUES ('4', '1234', '1234');
INSERT INTO `user` VALUES ('5', 'Ka', '123');
INSERT INTO `user` VALUES ('6', 'kasu', '1234');
INSERT INTO `user` VALUES ('7', '111', '111');
