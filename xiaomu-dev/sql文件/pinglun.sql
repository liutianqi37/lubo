/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80012
Source Host           : localhost:3306
Source Database       : project

Target Server Type    : MYSQL
Target Server Version : 80012
File Encoding         : 65001

Date: 2019-11-05 10:47:18
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for pinglun
-- ----------------------------
DROP TABLE IF EXISTS `pinglun`;
CREATE TABLE `pinglun` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `con` varchar(255) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `userId` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pinglun
-- ----------------------------
INSERT INTO `pinglun` VALUES ('1', '沐恩', '评论文本评论文本', '2019-10-31 14:58:34', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3139860693,3101820375&fm=26&gp=0.jpg', 'fengyan');
INSERT INTO `pinglun` VALUES ('2', '沐恩', '真好呀', '2019-10-31 15:00:02', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572337582880&di=c83f58a25406b4678cab29ee65d2c760&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F07%2F20181007190358_jzqwg.jpg', 'liuqi');
INSERT INTO `pinglun` VALUES ('3', '花花', '你真美', '2019-10-31 15:01:56', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572337582880&di=c83f58a25406b4678cab29ee65d2c760&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F07%2F20181007190358_jzqwg.jpg', 'liuqi');
INSERT INTO `pinglun` VALUES ('4', '夷陵老祖', '酷盖', '2019-10-31 15:03:10', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572328251542&di=5da9064c463fbb42d47631712dfa81d6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F10%2F20181210084517_wn38v.thumb.700_0.jpeg', 'liuqi');
INSERT INTO `pinglun` VALUES ('5', 'dddd', 'dddd', '2019-10-31 19:32:29', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572328251542&di=5da9064c463fbb42d47631712dfa81d6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F10%2F20181210084517_wn38v.thumb.700_0.jpeg', 'liuqi');
INSERT INTO `pinglun` VALUES ('6', 'fff', 'ffff', '2019-10-31 19:32:50', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572328251542&di=5da9064c463fbb42d47631712dfa81d6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F10%2F20181210084517_wn38v.thumb.700_0.jpeg', 'liuqi');
INSERT INTO `pinglun` VALUES ('7', 'ffgggg', 'gggg', '2019-10-31 19:33:37', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572328251542&di=5da9064c463fbb42d47631712dfa81d6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F10%2F20181210084517_wn38v.thumb.700_0.jpeg', 'liuqi');
INSERT INTO `pinglun` VALUES ('8', 'aaaa', 'aaa', '2019-10-31 19:33:59', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572328251542&di=5da9064c463fbb42d47631712dfa81d6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F10%2F20181210084517_wn38v.thumb.700_0.jpeg', 'liuqi');
INSERT INTO `pinglun` VALUES ('9', 'hhhhh', 'hhhh', '2019-10-31 19:34:16', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572328251542&di=5da9064c463fbb42d47631712dfa81d6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F10%2F20181210084517_wn38v.thumb.700_0.jpeg', 'liuqi');
