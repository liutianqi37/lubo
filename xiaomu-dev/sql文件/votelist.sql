/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80012
Source Host           : localhost:3306
Source Database       : project

Target Server Type    : MYSQL
Target Server Version : 80012
File Encoding         : 65001

Date: 2019-11-05 10:47:44
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for votelist
-- ----------------------------
DROP TABLE IF EXISTS `votelist`;
CREATE TABLE `votelist` (
  `voteId` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `desc` varchar(255) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `endTime` varchar(255) NOT NULL,
  `isMultiple` int(255) NOT NULL,
  `anonymous` int(255) NOT NULL,
  `totalNum` int(255) NOT NULL,
  `userId` varchar(255) NOT NULL,
  PRIMARY KEY (`voteId`)
) ENGINE=MyISAM AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of votelist
-- ----------------------------
INSERT INTO `votelist` VALUES ('1', '厦门大学', '厦门大学是最美大学吗？', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2038054776,3840033752&fm=26&gp=0.jpg', '1520784000000', '0', '0', '101', 'fengyan');
INSERT INTO `votelist` VALUES ('34', '123', '123123', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3974834430,2578081919&fm=26&gp=0.jpg', '1572744521000', '0', '0', '2', 'liuqi');
INSERT INTO `votelist` VALUES ('35', '毕业答辩', '加油  加油', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3974834430,2578081919&fm=26&gp=0.jpg', '1572868883000', '1', '0', '0', 'liuqi');
INSERT INTO `votelist` VALUES ('27', '实训二', '体验极好', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3974834430,2578081919&fm=26&gp=0.jpg', '1572158283000', '0', '1', '1', 'liuqi');
INSERT INTO `votelist` VALUES ('28', '高级node', '挺好的一门课', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3974834430,2578081919&fm=26&gp=0.jpg', '1572590340000', '1', '0', '11', 'liuqi');
INSERT INTO `votelist` VALUES ('36', '放假啦', '开心', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3974834430,2578081919&fm=26&gp=0.jpg', '1572921467000', '0', '0', '1', 'liuqi');
INSERT INTO `votelist` VALUES ('22', '复仇者联盟', '好看不？', 'http://b-ssl.duitang.com/uploads/item/201410/20/20141020224133_Ur54c.jpeg', '1572419259000', '0', '0', '114', 'fengyan');
