/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80012
Source Host           : localhost:3306
Source Database       : project

Target Server Type    : MYSQL
Target Server Version : 80012
File Encoding         : 65001

Date: 2019-11-05 10:47:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for message
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `con` varchar(255) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `userId` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of message
-- ----------------------------
INSERT INTO `message` VALUES ('1', '沐恩云云', '劫过九重城关, 我座下马正酣, 看那轻飘飘的衣摆, 趁擦肩把裙掀。 ', '2019-10-01 01:39:04', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3139860693,3101820375&fm=26&gp=0.jpg', 'fengyan');
INSERT INTO `message` VALUES ('2', '沐恩大虎', '枕风宿雪多年, 我与虎谋早餐, 拎着钓叟的鱼弦, 问卧龙几两钱', '2019-11-05 23:44:35', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572327959699&di=1c14edf474bbb0c1b78716aa6d24076c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F11%2F20181211080235_dtCNy.thumb.700_0.jpeg', 'fengyan');
INSERT INTO `message` VALUES ('3', '沐恩二虎', '蜀中大雨连绵, 关外横尸遍野, 你的笑像一条恶犬, 撞乱了我心弦。', '2019-10-07 16:45:07', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572327989880&di=1dea1ec6fb5fb3492e7a0b1f3266ff83&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F07%2F20181207091806_myewX.thumb.700_0.jpeg', 'fengyan');
INSERT INTO `message` VALUES ('4', '沐恩三虎', '谈花饮月赋闲, 这春宵艳阳天, 待到梦醒时分睁眼, 铁甲寒意凛冽。', '2019-07-01 09:45:31', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572328010667&di=3b97d7e72f36aa420d17fb2b49ede803&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201811%2F09%2F20181109080700_XeyKE.thumb.700_0.jpeg', 'liuqi');
INSERT INTO `message` VALUES ('5', '魏公子', ' 夙愿只隔一箭, 故乡近似天边, 不知何人浅唱弄弦, 我彷徨不可前', '2019-10-25 16:46:13', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572337582880&di=c83f58a25406b4678cab29ee65d2c760&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F07%2F20181007190358_jzqwg.jpg', 'liuq');
INSERT INTO `message` VALUES ('6', '蓝湛', '枕风宿雪多年，\r\n我与虎谋早餐，\r\n拎着钓叟的鱼弦，\r\n问卧龙几两钱。', '2019-10-25 16:47:43', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572328197420&di=5a3e56458c2e694a2feb65abdb36f5e3&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn01%2F580%2Fw690h690%2F20180521%2Fa6c5-haturft4632272.jpg', 'liuq');
INSERT INTO `message` VALUES ('7', '流觞', '烽烟万里如衔，\r\n掷群雄下酒宴，\r\n谢绝策勋十二转，\r\n想为你窃玉簪。', '2019-05-01 20:48:13', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572922926&di=cd8088d9ac46f8403c452e5fb96bc3bd&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201805%2F05%2F20180505114930_Avzsm.thumb.700_0.jpeg', 'fengyan');
INSERT INTO `message` VALUES ('8', '思追', '入巷间吃汤面，\r\n笑看窗边飞雪，\r\n取腰间明珠弹山雀，\r\n立枇杷于庭前。', '2019-10-25 16:48:47', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572328251542&di=5da9064c463fbb42d47631712dfa81d6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F10%2F20181210084517_wn38v.thumb.700_0.jpeg', 'liuq');
INSERT INTO `message` VALUES ('9', '景仪', '入巷间吃汤面，\r\n笑看窗边飞雪，\r\n取腰间明珠弹山雀，\r\n立枇杷于庭前。', '2019-01-25 16:49:21', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572355482271&di=52e1005606f8fd03e56b4c65fff7f3cf&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201901%2F20%2F20190120013104_ifxpm.thumb.700_0.jpeg', 'fengyan');
INSERT INTO `message` VALUES ('10', '金瑶', '踏遍三江六岸, 借刀光做船帆, 任露水浸透了短衫, 大盗睥睨四野', '2017-06-29 10:53:22', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572328346516&di=12f692cf522c4a99a88d9ae33f435ecc&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201703%2F23%2F20170323214620_rRHBu.jpeg', 'liuq');
