/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50710
 Source Host           : localhost:3306
 Source Schema         : books

 Target Server Type    : MySQL
 Target Server Version : 50710
 File Encoding         : 65001

 Date: 02/06/2020 22:25:06
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for address
-- ----------------------------
DROP TABLE IF EXISTS `address`;
CREATE TABLE `address`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '收货地址id',
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '收件人',
  `post_code` int(6) UNSIGNED ZEROFILL NOT NULL DEFAULT 000000 COMMENT '邮政编码',
  `phone` char(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '收件人电话',
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '收货地址',
  `create_time` datetime(0) NOT NULL COMMENT '创建时间',
  `update_time` datetime(0) NULL DEFAULT NULL COMMENT '修改时间',
  `logic_delete_flag` int(1) NOT NULL DEFAULT 0 COMMENT '逻辑删除字段',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of address
-- ----------------------------
INSERT INTO `address` VALUES (1, 1, '张三', 637000, '13312345678', '四川省 南充市 顺庆区 西南石油大学', '2020-02-02 16:55:18', '2020-02-02 23:28:56', 0);
INSERT INTO `address` VALUES (2, 1, 'zs', 000000, '12212345678', '1', '2020-02-02 16:57:19', NULL, 1);
INSERT INTO `address` VALUES (3, 1, 'zz', 000000, '12312345678', '11', '2020-02-02 23:31:10', NULL, 0);
INSERT INTO `address` VALUES (4, 2, 'aa', 111111, '12131313112', 'sasa', '2020-05-06 16:27:19', NULL, 0);
INSERT INTO `address` VALUES (5, 28, '张三', 637000, '13333333333', '四川省南充市顺庆区西南石油大学', '2020-05-09 17:42:09', '2020-05-17 10:35:03', 0);
INSERT INTO `address` VALUES (6, 34, 'swpu', 637000, '13696961212', '四川省南充市顺庆区西南石油大学', '2020-05-18 19:22:24', '2020-05-31 09:36:02', 0);

-- ----------------------------
-- Table structure for book
-- ----------------------------
DROP TABLE IF EXISTS `book`;
CREATE TABLE `book`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '图书编号',
  `book_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '图书名',
  `book_pictures` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '图书图片',
  `book_type` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '图书类型',
  `book_num` int(11) NOT NULL COMMENT '图书数量',
  `price` decimal(10, 2) NOT NULL DEFAULT 0.00 COMMENT '图书单价',
  `author` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '作者',
  `publishing_house` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '出版社',
  `publication_time` date NULL DEFAULT NULL COMMENT '出版时间',
  `synopsis` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '简介',
  `create_time` datetime(0) NOT NULL COMMENT '创建时间',
  `update_time` datetime(0) NULL DEFAULT NULL COMMENT '修改时间',
  `logic_delete_flag` int(1) UNSIGNED ZEROFILL NOT NULL DEFAULT 0 COMMENT '逻辑删除字段',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 36 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of book
-- ----------------------------
INSERT INTO `book` VALUES (1, '阿Q正传', 'http://image31.bookschina.com/2019/zuo/3/s8013776.jpg', '文学', 90, 11.50, '鲁迅', '中国华侨出版社', '2019-01-01', '该小说创作于1921年底，共分九章。小说以辛亥革命前后的中国农村为背景，描写了未庄流浪雇农阿Q，虽然干起活来“真能做”，但却一无所有，甚至连名姓都被人遗忘的故事。 [2] \n该小说批判了当时中国社会的封建，保守，庸俗，腐败等社会特点，有力地揭示了旧中国人民的生活场景和其处在水深火热之中的病态。', '2020-01-20 11:45:17', '2020-05-10 15:19:44', 0);
INSERT INTO `book` VALUES (2, '三国演义', 'http://image31.bookschina.com/2019/zuo/10/s7802820.jpg', '小说', 98, 20.00, '罗贯中', '人民文学出版社', '1998-05-01', '《三国演义》（Three Kingdoms Era）全名为《三国志通俗演义》（又称《三国志演义》）是元末明初小说家罗贯中创作的长篇章回体历史演义小说。该作品成书后有嘉靖壬午本等多个版本传于世，到了明末清初，毛宗岗对《三国演义》整顿回目、修正文辞、改换诗文。 ', '2020-01-20 11:49:39', '2020-02-02 23:26:21', 0);
INSERT INTO `book` VALUES (3, '红楼梦', 'http://image12.bookschina.com/2012/20120405/s5483120.jpg', '小说', 29, 15.10, '（清）曹雪芹，（清）高鹗 著，古木 校点', '上海古籍出版社', '2009-10-01', '《红楼梦》是清代乾隆年间诞生的一部长篇小说。该书的前八十回，其作者是伟大作家曹雪芹；对高鹗续作后四十回，目前学术界尚有争议。这部巨著以贾宝玉、林黛玉的爱情悲剧为中心，联系广阔的社会背景，着重描写了贾家荣、宁二府由盛到衰的过程，深刻暴露了封建统治阶级的奢靡丑恶，揭示了封建社会必然崩溃的历史命运。书中所表现的以反封建主义的叛逆精神为思想内容的爱情，富有深刻的社会意义。', '2020-01-30 14:21:40', '2020-02-02 23:16:33', 0);
INSERT INTO `book` VALUES (4, '水浒传', 'http://image31.bookschina.com/2019/zuo/10/s7802818.jpg', '小说', 49, 30.00, '施耐庵', '华夏出版社', '2017-02-01', '作为一部在民间广为流传的小说，施耐庵著的《水浒传（精）》继承与发展了讲史话本的传统，其语言以口语为基础，简洁明快，无论是描述语言还是作品人物的语言，都惟妙惟肖，有浓厚的生活气息，鲁迅曾经指出：“《水浒传》和《红楼梦》的有些地方，是能使读者由说话看出人来的。”小说叙事极富传奇性，一波未平，一波又起，起伏跌宕，变化莫测，连环套式的结构也独具特色。“风雪山神庙”、“拳打镇关西”、“武松打虎”、“血溅鸳鸯楼”等，都是脍炙人口的篇章。', '2020-01-30 14:42:50', NULL, 0);
INSERT INTO `book` VALUES (5, '西游记', 'http://image12.bookschina.com/2013/20131223/s6253504.jpg', '小说', 80, 22.00, '吴承恩', ' 北京燕山出版社', '2011-02-01', '《西游记》在中国古代小说中是一部思想性艺术性都臻于一流的作品,也完成了神魔小说成为一种新的小说品类的过程,在中国小说发展史上具有里程碑式的开拓意义。《西游记》为读者描绘出的幻想世界,充满了童话色彩,故事曲折、离奇、想象力丰富,语言风趣、幽默,深受少年儿童的喜爱。同时故事中又充满了人情世故,从而深受成年人的欢迎。而神话人物、环境和各种魔法和谐地统一在一起,使《西游记》充满了浪漫主义的艺术特色,也使它成为享誉中外的作品', '2020-02-01 17:34:38', NULL, 0);
INSERT INTO `book` VALUES (6, ' \r\n\r\n联大长征', 'http://image12.bookschina.com/2019/20191223/2/s4952321.jpg', '历史', 100, 8.00, '张寄谦', ' 新星出版社', '2010-11-01', '一九三八年二月十九日，由北大、清华、南开校组成的长沙临时大学，为长久抗战、保存文化计，西迁五南。其中，二百余名师生不畏艰难，徒步穿越湘黔滇三省，途经一一千五百里，历时六十八日终于抵达昆明，堪称我国教育史上一次可歌可泣的文化长征。本书就是这次步行旅程的实录，对途中气候山川、人物风情，均有细致描绘，文笔清新生动，内容丰赡有趣，具有较强的可读性和较高的史料价值', '2020-05-08 10:57:00', NULL, 0);
INSERT INTO `book` VALUES (7, '北京与北京人\r\n北京与北京人', 'http://image31.bookschina.com/2010/20100216/s3383697.jpg', '历史', 100, 11.70, '(英)芮尼', '国家图书馆出版社', '2008-12-01', '1860年英法联军入京，火烧圆明园，并逼迫清廷签订条约，除赔款、开放通商口岸等等之外，还要求在京设立使馆。本书作者是英国人，中文名芮尼，1860年随英军进北京，1861年北京英国公使馆建立，任使馆医师。他在这本日记体书里记述了英国北京使馆第一年内值得记述的事件和自己对事物的观察。这是中外交往史上第一次有外国使团常驻北京。他们怎样看中巨人，北京人又怎样看这些外国人，读来颇有趣味。他以非常同情的眼光看待中国人', '2020-05-08 10:58:54', NULL, 0);
INSERT INTO `book` VALUES (8, '放任自流的时光', 'http://image31.bookschina.com/2018/zuo/5/s7653412.jpg', '外国散文', 98, 22.00, '[美]苏西·罗托洛 著,陈震 译', '光明日报出版社', '2017-11-01', '20世纪六十年代前期，苏西和男友鲍勃·迪伦一起居住在纽约格林威治村。那是*特别的年代和*特别的地点。冷战阴影、核危机下，作为反文化运动的东海岸诞生地和大本营，格林威治村汇聚了时代的精神。民谣复兴运动，民权、女权、同性恋权益等各种运动在格林威治村风起云涌，激情澎湃的反叛时代和置身其中的绚烂人物互相塑造，创造着历史。 　　与其说本书娓娓道来的是苏西和迪伦共度的时光，不如说它是美国20世纪五六十年代的社会环境和文化艺术的全记录。', '2020-05-08 11:03:56', NULL, 0);
INSERT INTO `book` VALUES (9, '柏林童年', 'http://image12.bookschina.com/2015/20150518/s7075664.jpg', '外国散文', 100, 11.30, '本雅明', '天津人民出版社', '2015-12-01', '欧洲知识分子的良心本雅明*迷人的作品。苏珊·桑塔格、汉娜·阿伦特、阿多诺、帕慕克等文化名人倾力推荐。重温失落已久的文化品位、名士风度和自由思想。', '2020-05-08 11:05:55', NULL, 0);
INSERT INTO `book` VALUES (10, '剑桥往事', 'http://image12.bookschina.com/2015/20150725/s7094910.jpg', '外国散文', 100, 13.70, '(英)格温·拉芙洛著', '天津人民出版社', '2015-12-01', '本书作者为达尔文的孙女、著名画家格温·拉芙洛, 由于家族关系, 拉芙洛与剑桥精英们的交流来往可谓独树一帜。本书分13个主题, 回忆了其童年往事, 记录了剑桥精英的传奇故事和整个家族的轶事趣闻, 让读者看到了一个“美好的老英格兰”的时代。', '2020-05-08 11:16:11', NULL, 0);
INSERT INTO `book` VALUES (11, '为爱下厨房', 'http://image12.bookschina.com/2013/20131010/s6433190.jpg', '美食', 100, 12.20, '孔瑶', '上海文化出版社', '2014-10-01', '新浪美食名博“80后男人的厨房”的博主，为爱下厨房，80道美味家常菜挑战你的味蕾。本书所选菜品简单易学，选料丰富大众，每道菜都美味可口，让人垂涎三尺。详尽的讲解配以大量精美且详细的图，精准地描述了每道菜的步骤，即使你不认识字，或者你是下厨没多久的厨房男人，也能学个八九不离十。', '2020-05-08 11:24:45', NULL, 0);
INSERT INTO `book` VALUES (12, '家常主料100种做法丛书:粥的100种做法', 'http://image12.bookschina.com/2019/20191126/1/s8207975.jpg', '美食', 100, 2.50, '犀文图书', ' 江苏科技', '2010-12-01', '《家常主料100种做法丛书：粥的100种做法》针对普通家庭，菜式上以常见的家常菜为主。除了严谨的做法介绍以外，《家常主料100种做法丛书：粥的100种做法》还搭配了详尽的营养功效介绍和精美大图，使读者学做之余，增加对食材的了解', '2020-05-08 11:26:00', NULL, 0);
INSERT INTO `book` VALUES (13, '四时五味入口', 'http://image12.bookschina.com/2018/20180523/s7702246.jpg', '美食', 100, 29.20, '徐李佳/任志莉', '北京联合出版公司', '2018-03-01', '应季饮食，就是饮食应顺应时节，不同时节食用不同食材。本书作者深谙四季食材对人体的影响，按照二十四节气的顺序，从传统文化中溯本求源，寻找食物、人与自然的关系，并将应季食材编成四季食单，配以大量精美图片和操作步骤指导，给读者提供传统文化与现代美食的双重体验。 本书作者Olivia、Ray均是1975年生人，18岁相识于大学，20余年闺蜜，彼此见证了人生中的喜怒哀乐，命运中的生老病愁。', '2020-05-08 11:27:36', NULL, 0);
INSERT INTO `book` VALUES (14, '率性丛书 第二辑:你我的文学', 'http://image31.bookschina.com/2019/zuo/9/s8111132.jpg', '文学', 96, 9.70, '朱自清', ' 东方出版中心', '2009-08-01', '《你我的文学》内容简介：这本朱自清选集，前面有一个“楔子”，后面有三辑，这三辑所概括的三类文章，诗学批评，语文写作，文学鉴赏，也可视作朱自清后半生努力的三个方向。如果说，诗歌和散文写作都必然是从创作者主体出发，从执笔的“我”开始的，那么这类批评、鉴赏和知识性的文章，则都首先要感受到作为普通读者的大众的需求，从将要阅读到这些文字的“你”开始，而朱自清一生，似乎可以判作是从“我”开始、最后走向“你”的一生.', '2020-05-08 11:29:48', NULL, 0);
INSERT INTO `book` VALUES (15, '夏伊洛公园', 'http://image12.bookschina.com/2019/20191209/1/s6432452.jpg', '文学', 99, 14.40, '(美)博比·安·梅森(Bobbie An', ' 重庆大学出版社', '2014-01-01', '一对夫妇在结婚纪念日到内战纪念地夏伊洛公园度假，却在此结束了婚姻；给精神病院做司机的男人，成了病人们的dj，在车上放各个时代的流行歌，跟病人一起狂欢；单身的中年女人有了一个卖狗为生的男朋友，他只在每个月的第三个星期一随着市集一起到来；二战老兵卖掉房子，带着妻子开着房车去大西洋海', '2020-05-08 11:31:35', NULL, 0);
INSERT INTO `book` VALUES (16, '民国好食光', 'http://image12.bookschina.com/2019/20191209/1/s7335072.jpg', '文学', 99, 12.20, '钟小萌 ', ' 北京联合出版公司', '2016-11-01', '本书不仅是一部关于美食的故国风情录, 更是一幅民国名人的生活百态图, 作者从“吃”入手, 初入张爱玲、苏青、鲁迅、张大千、老舍、梅兰芳、汪曾祺等二十余位民国名人的私生活, 细数各位大咖的口味、嗜好、趣闻、雅事', '2020-05-08 11:32:51', NULL, 0);
INSERT INTO `book` VALUES (17, 'Java编程思想(第4版)/计算机科学丛书', 'http://image31.bookschina.com/2009/20091011/s3417412.jpg', '计算机', 94, 75.60, '(美) Bruce Ecke', ' 机械工业出版社', '2007-06-01', '本书赢得了全球程序员的广泛赞誉，即使是最晦涩的概念，在bruce eckel的文字亲和力和小而直接的编程示例面前也会化解于无形。从java的基础语法到最高级特性（深入的面向对象概念、多线程、自动项目构建、单元测试和调试等），本书都能逐步指导你轻松掌握。 从本书获得的各项大奖以及来自世界各地的读者评论中，不难看出这是一本经典之作。本书的作者拥有多年教学经验，对c、c++以及java语言都有独到、深入的见解，以通俗易懂及小而直接的示', '2020-05-08 11:34:45', NULL, 0);
INSERT INTO `book` VALUES (18, '码出高效:JAVA开发手册', 'http://image12.bookschina.com/2018/20181114/2/s7926707.jpg', '计算机', 95, 51.50, '杨冠宝（孤尽）高海慧（鸣莎）', ' 电子工业出版社', '2017-02-01', '《码出高效：Java 开发手册》源于影响了优选250万名开发工程师的《阿里巴巴Java开发手册》，作者静心沉淀，对Java规约的来龙去脉进行了全面而有效的内容梳理。《码出高效：Java 开发手册》以实战为中心，以新颖的角度全面阐述面向对象理论，逐步深入地探索怎样成为一位很好开发工程师。比如：如何驾轻就熟地使用各类集合框架；如何得心应手地处理高并发多线程问题；如何顺其自然地写出可读性强、可维护性好的优雅代码。 ', '2020-05-08 11:36:08', NULL, 0);
INSERT INTO `book` VALUES (19, '计算机科学丛书设计模式:可复用面向对象软件的基础(典藏版)', 'http://image12.bookschina.com/2019/20190607/2/s8089201.jpg', '计算机', 98, 55.30, '[美] 埃里克·伽玛（Erich Gam', ' 机械工业出版社', '2018-07-01', '本书结合设计实例从面向对象的设计中精选出23个设计模式, 总结了面向对象设计中*有价值的经验, 并且用简洁可复用的形式表达出来。本书分类描述了一组设计良好、 表达清楚的软件设计模式, 这些模式在实用环境下特别有用。 本书适合大学计算机专业的学生、研究生及相关人员参考.', '2020-05-08 11:37:54', NULL, 0);
INSERT INTO `book` VALUES (20, 'MySQL必知必会', 'http://image31.bookschina.com/2009/20090121/s3208339.jpg', '计算机', 97, 27.30, '（英）福塔　著，刘晓霞，钟鸣　译', '人民邮电出版社', '2009-01-01', 'MySQL是世界上最受欢迎的数据库管理系统之一。书中从介绍简单的数据检索开始，逐步深入一些复杂的内容，包括联结的使用、子查询、正则表达式和基于全文本的搜索、存储过程、游标、触发器、表约束，等等。通过重点突出的章节，条理清晰、系统而扼要地讲述了读者应该掌握的知识，使他们不经意间立刻功力大增。　　本书注重实用性，操作性很强，适用于广大软件开发和数据库管理人员学习参考', '2020-05-08 11:39:24', NULL, 0);
INSERT INTO `book` VALUES (21, 'Effective Java中文版', 'http://image31.bookschina.com/2009/20091011/s3394087.jpg', '计算机', 99, 36.40, 'Joshua Bloch', ' 机械工业出版社', '2009-01-01', '本书介绍了在Java编程中78条极具实用价值的经验规则，这些经验规则涵盖了大多数开发人员每天所面临的问题的解决方案。通过对Java平台设计专家所使用的技术的全面描述，揭示了应该做什么，不应该做什么才能产生清晰、健壮和高效的代码', '2020-05-08 11:41:42', NULL, 0);
INSERT INTO `book` VALUES (22, 'head first 中文版', 'http://image31.bookschina.com/2009/20091006/s3572248.jpg', '计算机', 95, 34.00, '贝茨', ' 中国电力出版社', '2007-02-01', '《head first java》是本完整的面向对象(object-oriented，oo)程序设计和java的学习指导。此书是根据学习理论所设计的，让你可以从学习程序语言的基础开始一直到包括线程、网络与分布式程序等项目。最重要的，你会学会如何像个面向对象开发者一样去思考。 而且不只是读死书，你还会玩游戏、拼图、解谜题以及以意想不到的方式与java交互。', '2020-05-08 11:43:00', NULL, 0);
INSERT INTO `book` VALUES (23, '数据库原理与应用', 'http://image31.bookschina.com/2011/20110823/s5233508.jpg', '计算机', 99, 27.30, '何泽恒，张庆华', ' 科学出版社', '2011-06-01', '本书是作者何泽恒结合多年从事数据库与应用系统教学和科研经验编写而成。《数据库原理与应用》系统介绍数据库技术的基本原理、方法和应用技术。全书分4部分共13章，主要包括：数据库基本概念、关系数据库、sql语言、数据库安全性与完整性、规范化设计理论、数据库设计、数据库编程接口、数据库恢复与并发控制、sql-server数据库实用基础，并简要介绍数据库新技术和发展，最后一章介绍数据库应用系统研制案例。 本书概念清晰，文字简洁，重点突出，', '2020-05-08 11:44:19', NULL, 0);
INSERT INTO `book` VALUES (24, 'HTML+CSS+JavaScript网页制作实用教程', 'http://image12.bookschina.com/2012/20120214/s5410060.jpg', '计算机', 99, 26.50, '吕凤顺，王爱华，王轶凤', ' 清华大学出版社', '2012-01-01', '目前对网页制作的要求已不仅仅是视觉效果的美观，更主要的是要符合web标准。传统网页制作是先考虑外观布局再填入内容，内容与外观交织在一起，代码量大，难以维护。而目前web标准的最大特点就是采用html+css+javascript将网页内容、外观样式及动态效果彻底分离，从而可以大大减少页面代码、节省带宽、提高网速，更便于分工设计、代码重用，既易于维护，又能移植到其他或以后的新web程序中。', '2020-05-08 11:45:34', NULL, 0);
INSERT INTO `book` VALUES (25, 'JavaScript权威指南-第6版', 'http://image12.bookschina.com/2012/20120609/s5524565.jpg', '计算机', 99, 68.10, '弗兰纳根', ' 机械工业出版社', '2012-04-01', '本书要讲述的内容涵盖javascript语言本身，以及web浏览器所实现的javascript api。本书第6版涵盖了html5和ecmascript 5，很多章节完全重写，增加了当今web开发的最佳实践的内容，新增的章节包括jquery、服务器端javascript、图形编程以及 javascript式的面向对象。', '2020-05-08 11:46:52', NULL, 0);
INSERT INTO `book` VALUES (26, 'HTML5应用编程-(影印版)', 'http://image12.bookschina.com/2012/20120912/s5560513.jpg', '计算机', 0, 10.90, '凯西恩', '东南大学出版社', '2012-06-01', '《html5应用编程(影印版)》zachary kessin著：发掘html5的全部特性，学习如何搭建能够运行在移动设备上的完整的、自包含的应用，这些应用足以和桌面应用相抗衡。通过这本实用的指南，你会发现在html5中与数据打交道的有效方法，比如离线存储和多线程处理。你会熟悉那些能够帮助你充分利用所有html5元素的高级javascript工具。', '2020-05-08 11:47:56', '2020-05-10 14:20:35', 0);
INSERT INTO `book` VALUES (27, 'MySQL数据库应用从入门到精通(第2版)(附光盘)', 'http://image12.bookschina.com/2014/20140523/s6543237.jpg', '计算机', 99, 29.30, '王飞飞', ' 中国铁道出版社', '2014-04-01', '★同套系图书推荐《php从入门到精通》 　　★秉承理论学习与实际开发相结合的原则，力求实现所有技术点和经典实例的完美搭配，旨在帮助mysql数据库初学者轻松入门，并迅速达到熟练水平。 　　★随书附赠光盘包含与书中的章节一一对应的ppt文档和多媒体讲解视频，视频总时间超过14小时.', '2020-05-08 11:49:34', NULL, 0);
INSERT INTO `book` VALUES (28, 'Java开发从入门到精通-(附光盘)', 'http://image12.bookschina.com/2016/20161001/s7291774.jpg', '计算机', 99, 51.90, '扶松柏', '人民邮电出版社', '2016-09-01', '本书的特色是实现了入门知识、实例演示、范例演练、技术解惑、综合实战5大部分内容的融合，让读者看得懂、用得上、学得会。一本书的容量，讲解了入门类、范例类和项目实战类三类图书的内容。丰富的配套资源 学习更高效459个实例，更多的实践演练机会781分钟视频讲解，降低学习难度306个拓展实例，真正地举一反三107个技术解惑，破解学习难点技术讲解范例演练技术解惑贯穿全书，全面掌握java语言开发技术讲解', '2020-05-08 11:57:19', NULL, 0);
INSERT INTO `book` VALUES (29, 'Bootstrap实战从入门到精通', 'http://image12.bookschina.com/2018/20180528/s7570087.jpg', '计算机', 99, 29.30, '本书编委会', '中国水利水电', '2017-08-01', '10万 读者检验，畅销书全新升级；10年开发教学经验，一线讲师半生心血。同属于Bootstrap 应用Bootstrap第三方插件 企业网站 WAP网站 网络相册制作 HTML5移动开发 Web 前端 JavaScript 高级程序设计 网页设计 网页制作 网站建设大类。1．体验好。几乎每个章节都有二维码，微信扫一扫，可以随时随地看视频。2．资源多从配套到拓展，资源库一应俱全。除了214节配套微视频和326个实例案例外。', '2020-05-08 14:05:26', NULL, 0);
INSERT INTO `book` VALUES (30, '网页设计与网站建设从入门到精通-(微课精编版)', 'http://image12.bookschina.com/2019/20190604/10/s8028183.jpg', '计算机', 99, 62.90, '本书编委会', '清华大学', '2019-03-01', '网络开发视频大讲堂系列丛书于2013年5月出版，因其编写细腻、讲解透彻、实用易学、配备全程视频等，备受读者欢迎。丛书累计销售近20万册，其中，《HTML5 CSS3从入门到精通》累计销售10万册。同时，系列书被上百所高校选为教学参考用书。《网页设计与网站建设从入门到精通（微课精编版）》内容有以下五点特色。1. 《网页设计与网站建设从入门到精通（微课精编版）》提供了多样化、全方位的学习资源，帮助读者轻松掌握网页设计与网站建设技术', '2020-05-08 14:07:02', NULL, 0);
INSERT INTO `book` VALUES (31, 'SPRING BOOT企业级开发教程/黑马程序员', 'http://image12.bookschina.com/2019/20191001/1/s8176346.jpg', '计算机', 99, 52.10, '黑马程序员', ' 人民邮电出版社', '2019-09-01', '1.黑马程序员系列图书 2.本书附有配套视频、源代码、习题、教学PPT、教学设计等资源 3.为了帮助初学者更好地学习本书讲解的内容，还提供了在线答疑服务，希望可以帮助更多的读者。', '2020-05-08 14:08:51', NULL, 0);
INSERT INTO `book` VALUES (32, 'JAVA与UML协同应用开发', 'http://image30.bookschina.com/12/12.06/s468661.jpg', '计算机', 99, 22.40, '里德', ' 清华大学出版社', '2003-04-01', '本书讲述了将Java与UML相结合协同开发高质量Java应用程序的技术。 书中介绍了UML和RUP的基础知识，并示范了如何使用这些标准的面向对象方法来开发健壮的Java应用程序，以满足用户的需求。书中采用RUP和一个大型应用实例说明了软件开发的过程，并示范了如何建立合于是的项目规划、收集用户的需求、用UML建立成功的Java设计、用UML类图和序列图来实现Java代码。', '2020-05-08 14:11:16', NULL, 0);
INSERT INTO `book` VALUES (33, 'JAVA编程原理:面向工程和科学人员=JAVAfor Engineers and Scientists', 'http://image30.bookschina.com/12/12.04/s658902.jpg', '计算机', 97, 33.50, '布郎松', ' 清华大学出版社', '2003-11-01', 'Java for Engineers and Scientists provides you with the tools, techniques, and understanding necessary to create and maintain Java programs as well as to prepare a solid foundation for more advanced work. The large numbers of examples and exercises in the text are drawn from basic engineering and scientific disciplines and are appropriate to and introductory language-based course.', '2020-05-08 14:13:06', NULL, 0);
INSERT INTO `book` VALUES (34, 'Java语言导学(原书第3版)', 'http://image30.bookschina.com/12/12.06/s672053.jpg', '计算机', 99, 20.30, 'Mary Campione Kalrath Alison Huml', ' 机械工业出版社', '2003-01-01', '本书既适合初学者，也适合有经验的程序员：新程序员通过从头到尾阅读本书可以得到*大的收获，包括按照第1章“起步”中的步骤说明编译和运行自己的**个程序。　　有过程式语言（比如C）经验的程序员可能希望从Java编程语言的面向对象概念和特性开始学习。 有面向对象编程经验的程序员可能希望先学习更高级的内容。\r\n\r\n本书既适合初学者，也适合有经验的程序员：新程序员通过从头到尾阅读本书可以得到*大的收获，包括按照第1章“起步”中的步骤说明编译和运行自己的**个程序。　　有过程式语言（比如C）经验的程序员可能希望从Java编程语言的面向对象概念和特性开始学习。 有面向对象编程经验的程序员可能希望先学习更高级的内容。', '2020-05-08 14:28:53', NULL, 0);
INSERT INTO `book` VALUES (35, 'Java 程序设计基础', 'http://image31.bookschina.com/2006/060116/s1048417.jpg', '计算机', 99, 34.60, '（美）GaryJ.BronsonJ.Bronson', '北京大学出版社', '2005-01-01', '本书主要针对初学Java的读者，主要介绍了面向对象程序代码的基本概念：创建图形用户接口所要事的可视化对象：基于事件的编程等内容。本书的主要目标是：在合理的编程规则下以一种能够被初级程序员接受的方式介绍上述内容，以期提供给读者工具、技术以及创建并保持程序的必要理解，给更多的工作准备一个坚实的基础。\r\n本书提供了非常清楚的定义，帮助读者获得和掌握Java知识，介绍概念的书写方式是本书*重要、*有特色的部分。本书的大量实例和习题都是笔者经验的结晶，这些例子非常适合对语言的基本介绍。', '2020-05-08 14:31:57', NULL, 0);

-- ----------------------------
-- Table structure for buy
-- ----------------------------
DROP TABLE IF EXISTS `buy`;
CREATE TABLE `buy`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '结算id',
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `book_id` int(11) NOT NULL COMMENT '图书id',
  `book_num` int(11) NOT NULL COMMENT '购买数量',
  `sum` decimal(10, 2) NOT NULL COMMENT '小计',
  `create_time` datetime(0) NOT NULL COMMENT '结算时间',
  `logic_delete_flag` int(1) NOT NULL DEFAULT 0 COMMENT '逻辑删除字段',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 262 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of buy
-- ----------------------------
INSERT INTO `buy` VALUES (11, 1, 3, 2, 30.00, '2020-02-02 15:47:56', 0);
INSERT INTO `buy` VALUES (12, 1, 3, 2, 30.00, '2020-02-02 15:50:00', 1);
INSERT INTO `buy` VALUES (13, 1, 1, 1, 50.00, '2020-02-02 15:52:33', 1);
INSERT INTO `buy` VALUES (14, 1, 1, 1, 50.00, '2020-02-02 15:53:51', 1);
INSERT INTO `buy` VALUES (15, 1, 2, 1, 20.00, '2020-02-02 15:53:51', 1);
INSERT INTO `buy` VALUES (16, 1, 3, 1, 15.10, '2020-02-02 15:53:51', 1);
INSERT INTO `buy` VALUES (17, 1, 4, 1, 30.00, '2020-02-02 15:53:51', 1);
INSERT INTO `buy` VALUES (18, 1, 5, 1, 22.00, '2020-02-02 15:53:51', 1);
INSERT INTO `buy` VALUES (19, 1, 3, 2, 15.10, '2020-02-02 15:54:58', 1);
INSERT INTO `buy` VALUES (20, 1, 1, 3, 50.00, '2020-02-02 16:02:04', 1);
INSERT INTO `buy` VALUES (21, 1, 2, 1, 20.00, '2020-02-02 16:02:04', 1);
INSERT INTO `buy` VALUES (22, 1, 3, 1, 15.10, '2020-02-02 16:02:04', 1);
INSERT INTO `buy` VALUES (23, 1, 4, 1, 30.00, '2020-02-02 16:02:04', 1);
INSERT INTO `buy` VALUES (24, 1, 5, 1, 22.00, '2020-02-02 16:02:04', 1);
INSERT INTO `buy` VALUES (25, 1, 1, 1, 50.00, '2020-02-02 17:17:11', 1);
INSERT INTO `buy` VALUES (26, 1, 4, 1, 30.00, '2020-02-02 18:20:58', 1);
INSERT INTO `buy` VALUES (27, 1, 5, 1, 22.00, '2020-02-02 18:20:58', 1);
INSERT INTO `buy` VALUES (28, 1, 1, 1, 50.00, '2020-02-02 18:20:58', 1);
INSERT INTO `buy` VALUES (29, 1, 2, 1, 20.00, '2020-02-02 18:20:58', 1);
INSERT INTO `buy` VALUES (30, 1, 3, 1, 15.10, '2020-02-02 18:20:58', 1);
INSERT INTO `buy` VALUES (31, 1, 1, 1, 50.00, '2020-02-02 23:33:41', 1);
INSERT INTO `buy` VALUES (32, 1, 1, 1, 50.00, '2020-02-02 23:33:53', 1);
INSERT INTO `buy` VALUES (33, 1, 1, 1, 50.00, '2020-02-02 23:34:03', 1);
INSERT INTO `buy` VALUES (34, 1, 1, 1, 50.00, '2020-02-02 23:34:14', 1);
INSERT INTO `buy` VALUES (35, 1, 1, 1, 50.00, '2020-02-02 23:35:01', 1);
INSERT INTO `buy` VALUES (36, 1, 1, 1, 50.00, '2020-02-02 23:35:28', 1);
INSERT INTO `buy` VALUES (37, 1, 1, 1, 50.00, '2020-02-02 23:35:44', 1);
INSERT INTO `buy` VALUES (38, 1, 1, 1, 50.00, '2020-02-02 23:36:26', 1);
INSERT INTO `buy` VALUES (39, 1, 1, 1, 50.00, '2020-02-02 23:44:42', 1);
INSERT INTO `buy` VALUES (40, 1, 1, 1, 50.00, '2020-02-02 23:49:14', 1);
INSERT INTO `buy` VALUES (41, 1, 1, 1, 50.00, '2020-02-02 23:49:45', 1);
INSERT INTO `buy` VALUES (42, 1, 1, 1, 50.00, '2020-02-02 23:50:41', 1);
INSERT INTO `buy` VALUES (43, 1, 1, 7, 350.00, '2020-02-02 23:51:32', 1);
INSERT INTO `buy` VALUES (44, 1, 2, 2, 40.00, '2020-02-02 23:52:15', 1);
INSERT INTO `buy` VALUES (45, 1, 1, 1, 50.00, '2020-02-02 23:52:15', 1);
INSERT INTO `buy` VALUES (46, 1, 3, 1, 15.10, '2020-02-02 23:52:15', 1);
INSERT INTO `buy` VALUES (47, 1, 4, 1, 30.00, '2020-02-02 23:52:15', 1);
INSERT INTO `buy` VALUES (48, 1, 5, 1, 22.00, '2020-02-02 23:52:15', 1);
INSERT INTO `buy` VALUES (49, 1, 2, 1, 20.00, '2020-02-04 00:07:53', 1);
INSERT INTO `buy` VALUES (50, 1, 3, 1, 15.10, '2020-02-04 00:07:53', 1);
INSERT INTO `buy` VALUES (51, 1, 3, 1, 15.10, '2020-02-04 00:10:20', 1);
INSERT INTO `buy` VALUES (52, 1, 4, 1, 30.00, '2020-02-04 00:10:20', 1);
INSERT INTO `buy` VALUES (53, 1, 1, 1, 50.00, '2020-02-04 00:19:20', 1);
INSERT INTO `buy` VALUES (54, 1, 3, 1, 15.10, '2020-02-04 00:19:20', 1);
INSERT INTO `buy` VALUES (55, 1, 2, 1, 20.00, '2020-02-04 00:19:20', 1);
INSERT INTO `buy` VALUES (56, 1, 4, 1, 30.00, '2020-02-04 00:19:20', 1);
INSERT INTO `buy` VALUES (57, 1, 5, 1, 22.00, '2020-02-04 00:19:20', 1);
INSERT INTO `buy` VALUES (58, 1, 5, 1, 22.00, '2020-02-04 15:06:57', 1);
INSERT INTO `buy` VALUES (59, 1, 2, 1, 20.00, '2020-02-04 15:06:57', 1);
INSERT INTO `buy` VALUES (60, 1, 4, 1, 30.00, '2020-02-04 15:06:57', 1);
INSERT INTO `buy` VALUES (61, 1, 3, 1, 15.10, '2020-02-04 15:06:57', 1);
INSERT INTO `buy` VALUES (62, 1, 2, 1, 20.00, '2020-02-04 15:08:49', 1);
INSERT INTO `buy` VALUES (63, 1, 4, 1, 30.00, '2020-02-04 15:08:49', 1);
INSERT INTO `buy` VALUES (64, 1, 5, 1, 22.00, '2020-02-04 15:08:49', 1);
INSERT INTO `buy` VALUES (65, 1, 3, 1, 15.10, '2020-02-04 15:08:49', 1);
INSERT INTO `buy` VALUES (66, 1, 2, 1, 20.00, '2020-02-04 20:55:26', 1);
INSERT INTO `buy` VALUES (67, 1, 2, 1, 20.00, '2020-02-04 20:59:06', 1);
INSERT INTO `buy` VALUES (68, 1, 2, 1, 20.00, '2020-02-04 21:19:09', 1);
INSERT INTO `buy` VALUES (69, 1, 2, 1, 20.00, '2020-02-04 21:27:50', 1);
INSERT INTO `buy` VALUES (70, 1, 1, 1, 50.00, '2020-02-04 21:30:10', 1);
INSERT INTO `buy` VALUES (71, 1, 4, 1, 30.00, '2020-02-07 19:52:40', 1);
INSERT INTO `buy` VALUES (72, 1, 3, 4, 60.40, '2020-02-07 19:52:40', 1);
INSERT INTO `buy` VALUES (73, 1, 2, 2, 40.00, '2020-02-11 15:41:18', 1);
INSERT INTO `buy` VALUES (74, 1, 1, 2, 100.00, '2020-02-11 15:43:51', 1);
INSERT INTO `buy` VALUES (75, 1, 2, 2, 40.00, '2020-02-11 23:54:29', 1);
INSERT INTO `buy` VALUES (76, 1, 3, 1, 15.10, '2020-02-11 23:54:29', 1);
INSERT INTO `buy` VALUES (77, 1, 1, 7, 350.00, '2020-02-11 23:58:43', 1);
INSERT INTO `buy` VALUES (78, 1, 2, 1, 20.00, '2020-02-11 23:58:43', 1);
INSERT INTO `buy` VALUES (79, 1, 3, 1, 15.10, '2020-02-11 23:58:43', 1);
INSERT INTO `buy` VALUES (80, 1, 4, 1, 30.00, '2020-02-11 23:58:43', 1);
INSERT INTO `buy` VALUES (81, 1, 5, 1, 22.00, '2020-02-11 23:58:43', 1);
INSERT INTO `buy` VALUES (82, 1, 2, 1, 20.00, '2020-02-12 17:49:29', 1);
INSERT INTO `buy` VALUES (83, 1, 2, 1, 20.00, '2020-02-20 16:33:52', 1);
INSERT INTO `buy` VALUES (84, 1, 2, 1, 20.00, '2020-02-20 16:35:37', 1);
INSERT INTO `buy` VALUES (85, 1, 2, 1, 20.00, '2020-02-20 16:37:13', 1);
INSERT INTO `buy` VALUES (86, 1, 2, 1, 20.00, '2020-02-20 16:37:32', 1);
INSERT INTO `buy` VALUES (87, 1, 2, 2, 40.00, '2020-02-28 09:39:49', 1);
INSERT INTO `buy` VALUES (88, 1, 3, 1, 15.10, '2020-02-28 09:39:49', 1);
INSERT INTO `buy` VALUES (89, 1, 2, 1, 20.00, '2020-03-10 18:40:23', 1);
INSERT INTO `buy` VALUES (90, 1, 2, 1, 20.00, '2020-03-10 18:40:29', 1);
INSERT INTO `buy` VALUES (91, 1, 1, 1, 0.11, '2020-04-26 09:50:12', 1);
INSERT INTO `buy` VALUES (92, 1, 1, 1, 0.11, '2020-04-26 09:59:56', 1);
INSERT INTO `buy` VALUES (93, 1, 1, 1, 0.11, '2020-04-26 10:00:04', 1);
INSERT INTO `buy` VALUES (94, 1, 1, 1, 0.11, '2020-04-26 10:03:01', 1);
INSERT INTO `buy` VALUES (95, 1, 1, 1, 0.11, '2020-04-26 10:07:46', 1);
INSERT INTO `buy` VALUES (96, 1, 1, 1, 0.11, '2020-04-26 10:07:52', 1);
INSERT INTO `buy` VALUES (97, 1, 1, 1, 0.11, '2020-04-26 10:08:12', 1);
INSERT INTO `buy` VALUES (98, 1, 1, 1, 0.11, '2020-04-26 10:08:26', 1);
INSERT INTO `buy` VALUES (99, 1, 1, 1, 0.11, '2020-04-26 10:09:37', 1);
INSERT INTO `buy` VALUES (100, 1, 1, 1, 0.11, '2020-04-26 10:11:12', 1);
INSERT INTO `buy` VALUES (101, 1, 1, 1, 0.11, '2020-04-26 10:11:26', 1);
INSERT INTO `buy` VALUES (102, 1, 1, 1, 0.11, '2020-04-26 10:11:39', 1);
INSERT INTO `buy` VALUES (103, 1, 1, 1, 0.11, '2020-04-26 10:12:27', 1);
INSERT INTO `buy` VALUES (104, 1, 1, 1, 0.11, '2020-04-26 10:13:12', 1);
INSERT INTO `buy` VALUES (105, 1, 2, 1, 20.00, '2020-04-26 10:19:03', 1);
INSERT INTO `buy` VALUES (106, 1, 2, 1, 20.00, '2020-04-26 10:21:06', 1);
INSERT INTO `buy` VALUES (107, 1, 2, 1, 20.00, '2020-04-26 10:22:41', 1);
INSERT INTO `buy` VALUES (108, 1, 2, 1, 20.00, '2020-04-26 10:23:30', 1);
INSERT INTO `buy` VALUES (109, 1, 2, 1, 20.00, '2020-04-26 10:25:30', 1);
INSERT INTO `buy` VALUES (110, 1, 2, 1, 20.00, '2020-04-26 10:26:37', 1);
INSERT INTO `buy` VALUES (111, 1, 2, 1, 20.00, '2020-04-26 10:27:37', 1);
INSERT INTO `buy` VALUES (112, 1, 2, 1, 20.00, '2020-04-26 10:29:13', 1);
INSERT INTO `buy` VALUES (113, 1, 2, 1, 20.00, '2020-04-26 10:30:43', 1);
INSERT INTO `buy` VALUES (114, 1, 2, 1, 20.00, '2020-04-26 10:30:47', 1);
INSERT INTO `buy` VALUES (115, 2, 1, 1, 0.11, '2020-04-26 11:44:02', 1);
INSERT INTO `buy` VALUES (116, 1, 2, 2, 40.00, '2020-04-27 10:34:00', 1);
INSERT INTO `buy` VALUES (117, 1, 2, 2, 40.00, '2020-04-29 17:19:02', 1);
INSERT INTO `buy` VALUES (118, 2, 2, 1, 20.00, '2020-05-06 16:26:59', 1);
INSERT INTO `buy` VALUES (119, 28, 17, 1, 75.60, '2020-05-09 17:35:50', 1);
INSERT INTO `buy` VALUES (120, 28, 17, 1, 75.60, '2020-05-09 17:40:45', 1);
INSERT INTO `buy` VALUES (121, 28, 17, 1, 75.60, '2020-05-09 17:41:03', 1);
INSERT INTO `buy` VALUES (122, 28, 17, 1, 75.60, '2020-05-09 17:41:42', 1);
INSERT INTO `buy` VALUES (123, 28, 24, 1, 26.50, '2020-05-09 17:49:37', 1);
INSERT INTO `buy` VALUES (124, 28, 24, 2, 53.00, '2020-05-09 17:59:58', 1);
INSERT INTO `buy` VALUES (125, 28, 24, 2, 53.00, '2020-05-09 18:02:51', 1);
INSERT INTO `buy` VALUES (126, 28, 24, 1, 26.50, '2020-05-09 18:04:58', 1);
INSERT INTO `buy` VALUES (127, 28, 24, 2, 53.00, '2020-05-09 19:36:34', 1);
INSERT INTO `buy` VALUES (128, 28, 17, 1, 75.60, '2020-05-09 19:39:41', 1);
INSERT INTO `buy` VALUES (129, 28, 18, 1, 51.50, '2020-05-09 19:40:45', 1);
INSERT INTO `buy` VALUES (130, 28, 19, 1, 55.30, '2020-05-09 19:48:36', 1);
INSERT INTO `buy` VALUES (131, 28, 20, 1, 27.30, '2020-05-09 19:49:11', 1);
INSERT INTO `buy` VALUES (132, 28, 21, 1, 36.40, '2020-05-09 20:41:54', 1);
INSERT INTO `buy` VALUES (133, 28, 22, 1, 34.00, '2020-05-09 21:07:11', 1);
INSERT INTO `buy` VALUES (134, 28, 23, 1, 27.30, '2020-05-09 21:09:38', 1);
INSERT INTO `buy` VALUES (135, 28, 24, 1, 26.50, '2020-05-09 21:14:30', 1);
INSERT INTO `buy` VALUES (136, 28, 25, 1, 68.10, '2020-05-09 21:17:04', 1);
INSERT INTO `buy` VALUES (137, 28, 27, 1, 29.30, '2020-05-09 21:19:53', 1);
INSERT INTO `buy` VALUES (138, 28, 28, 1, 51.90, '2020-05-09 21:23:43', 1);
INSERT INTO `buy` VALUES (139, 28, 29, 1, 29.30, '2020-05-09 21:34:53', 1);
INSERT INTO `buy` VALUES (140, 28, 30, 1, 62.90, '2020-05-09 21:42:09', 1);
INSERT INTO `buy` VALUES (141, 28, 31, 1, 52.10, '2020-05-09 21:42:44', 1);
INSERT INTO `buy` VALUES (142, 28, 32, 1, 22.40, '2020-05-09 21:48:06', 1);
INSERT INTO `buy` VALUES (143, 28, 33, 3, 100.50, '2020-05-09 21:50:02', 1);
INSERT INTO `buy` VALUES (144, 28, 34, 1, 20.30, '2020-05-09 21:56:00', 1);
INSERT INTO `buy` VALUES (145, 28, 35, 1, 34.60, '2020-05-09 21:56:14', 1);
INSERT INTO `buy` VALUES (146, 28, 17, 1, 75.60, '2020-05-09 21:58:09', 1);
INSERT INTO `buy` VALUES (147, 28, 18, 1, 51.50, '2020-05-09 22:00:03', 1);
INSERT INTO `buy` VALUES (148, 28, 17, 1, 75.60, '2020-05-09 23:01:46', 1);
INSERT INTO `buy` VALUES (149, 28, 19, 1, 55.30, '2020-05-10 11:40:10', 1);
INSERT INTO `buy` VALUES (150, 28, 19, 1, 55.30, '2020-05-10 11:40:22', 1);
INSERT INTO `buy` VALUES (151, 28, 19, 1, 55.30, '2020-05-10 15:20:10', 1);
INSERT INTO `buy` VALUES (152, 28, 19, 1, 55.30, '2020-05-10 15:21:42', 1);
INSERT INTO `buy` VALUES (153, 28, 19, 1, 55.30, '2020-05-10 15:23:57', 1);
INSERT INTO `buy` VALUES (154, 28, 19, 1, 55.30, '2020-05-10 15:24:02', 1);
INSERT INTO `buy` VALUES (155, 28, 20, 1, 27.30, '2020-05-14 17:05:32', 1);
INSERT INTO `buy` VALUES (156, 28, 20, 1, 27.30, '2020-05-15 16:46:13', 1);
INSERT INTO `buy` VALUES (157, 28, 19, 1, 55.30, '2020-05-15 16:48:52', 1);
INSERT INTO `buy` VALUES (158, 28, 19, 1, 55.30, '2020-05-15 16:49:46', 1);
INSERT INTO `buy` VALUES (159, 28, 20, 1, 27.30, '2020-05-15 16:50:54', 1);
INSERT INTO `buy` VALUES (160, 28, 19, 1, 55.30, '2020-05-15 16:51:22', 1);
INSERT INTO `buy` VALUES (161, 28, 19, 1, 55.30, '2020-05-15 16:53:54', 1);
INSERT INTO `buy` VALUES (162, 28, 19, 1, 55.30, '2020-05-15 16:55:07', 1);
INSERT INTO `buy` VALUES (163, 28, 19, 1, 55.30, '2020-05-15 16:56:53', 1);
INSERT INTO `buy` VALUES (164, 28, 20, 1, 27.30, '2020-05-15 17:35:59', 1);
INSERT INTO `buy` VALUES (165, 28, 19, 1, 55.30, '2020-05-17 10:29:14', 1);
INSERT INTO `buy` VALUES (166, 28, 20, 1, 27.30, '2020-05-17 10:29:14', 1);
INSERT INTO `buy` VALUES (167, 28, 19, 1, 55.30, '2020-05-17 10:29:26', 1);
INSERT INTO `buy` VALUES (168, 28, 20, 1, 27.30, '2020-05-17 10:29:26', 1);
INSERT INTO `buy` VALUES (169, 28, 19, 1, 55.30, '2020-05-17 10:29:31', 1);
INSERT INTO `buy` VALUES (170, 28, 20, 1, 27.30, '2020-05-17 10:29:31', 1);
INSERT INTO `buy` VALUES (171, 28, 22, 1, 34.00, '2020-05-17 10:29:31', 1);
INSERT INTO `buy` VALUES (172, 28, 19, 1, 55.30, '2020-05-17 10:29:39', 1);
INSERT INTO `buy` VALUES (173, 28, 20, 1, 27.30, '2020-05-17 10:29:44', 1);
INSERT INTO `buy` VALUES (174, 28, 22, 1, 34.00, '2020-05-17 10:29:48', 1);
INSERT INTO `buy` VALUES (175, 28, 19, 1, 55.30, '2020-05-17 10:29:52', 1);
INSERT INTO `buy` VALUES (176, 28, 20, 1, 27.30, '2020-05-17 10:29:52', 1);
INSERT INTO `buy` VALUES (177, 28, 19, 1, 55.30, '2020-05-17 10:29:55', 1);
INSERT INTO `buy` VALUES (178, 28, 20, 1, 27.30, '2020-05-17 10:29:55', 1);
INSERT INTO `buy` VALUES (179, 28, 22, 1, 34.00, '2020-05-17 10:29:55', 1);
INSERT INTO `buy` VALUES (180, 28, 22, 2, 68.00, '2020-05-17 10:30:09', 1);
INSERT INTO `buy` VALUES (181, 28, 20, 3, 81.90, '2020-05-17 10:30:09', 1);
INSERT INTO `buy` VALUES (182, 28, 19, 1, 55.30, '2020-05-17 10:30:09', 1);
INSERT INTO `buy` VALUES (183, 28, 19, 1, 55.30, '2020-05-17 10:34:35', 1);
INSERT INTO `buy` VALUES (184, 28, 20, 2, 54.60, '2020-05-17 10:34:35', 1);
INSERT INTO `buy` VALUES (185, 28, 22, 3, 102.00, '2020-05-17 10:34:35', 1);
INSERT INTO `buy` VALUES (186, 28, 19, 1, 55.30, '2020-05-17 10:34:40', 1);
INSERT INTO `buy` VALUES (187, 28, 20, 1, 27.30, '2020-05-17 10:34:40', 1);
INSERT INTO `buy` VALUES (188, 28, 22, 1, 34.00, '2020-05-17 10:34:40', 1);
INSERT INTO `buy` VALUES (189, 28, 19, 1, 55.30, '2020-05-17 10:34:55', 1);
INSERT INTO `buy` VALUES (190, 28, 20, 2, 54.60, '2020-05-17 10:34:55', 1);
INSERT INTO `buy` VALUES (191, 28, 22, 3, 102.00, '2020-05-17 10:34:55', 1);
INSERT INTO `buy` VALUES (192, 28, 20, 2, 54.60, '2020-05-17 11:11:20', 1);
INSERT INTO `buy` VALUES (193, 28, 19, 1, 55.30, '2020-05-17 11:11:20', 1);
INSERT INTO `buy` VALUES (194, 28, 22, 3, 102.00, '2020-05-17 11:11:20', 1);
INSERT INTO `buy` VALUES (195, 34, 18, 3, 154.50, '2020-05-18 19:21:43', 1);
INSERT INTO `buy` VALUES (196, 34, 17, 4, 302.40, '2020-05-18 19:21:43', 1);
INSERT INTO `buy` VALUES (197, 34, 22, 1, 34.00, '2020-05-18 19:21:43', 1);
INSERT INTO `buy` VALUES (198, 34, 18, 3, 154.50, '2020-05-18 19:22:43', 1);
INSERT INTO `buy` VALUES (199, 34, 22, 1, 34.00, '2020-05-18 19:22:43', 1);
INSERT INTO `buy` VALUES (200, 34, 17, 1, 75.60, '2020-05-18 19:22:43', 1);
INSERT INTO `buy` VALUES (201, 28, 19, 3, 165.90, '2020-05-27 16:12:00', 1);
INSERT INTO `buy` VALUES (202, 28, 18, 3, 154.50, '2020-05-27 16:12:00', 1);
INSERT INTO `buy` VALUES (203, 28, 17, 1, 75.60, '2020-05-27 16:12:07', 1);
INSERT INTO `buy` VALUES (204, 28, 17, 1, 75.60, '2020-05-27 16:12:11', 1);
INSERT INTO `buy` VALUES (205, 28, 17, 1, 75.60, '2020-05-27 16:12:17', 1);
INSERT INTO `buy` VALUES (206, 28, 18, 1, 51.50, '2020-05-27 16:12:22', 1);
INSERT INTO `buy` VALUES (207, 28, 17, 1, 75.60, '2020-05-27 16:12:22', 1);
INSERT INTO `buy` VALUES (208, 28, 19, 1, 55.30, '2020-05-27 16:13:18', 1);
INSERT INTO `buy` VALUES (209, 28, 19, 1, 55.30, '2020-05-27 16:13:26', 0);
INSERT INTO `buy` VALUES (210, 28, 20, 1, 27.30, '2020-05-27 16:13:26', 0);
INSERT INTO `buy` VALUES (211, 28, 21, 1, 36.40, '2020-05-27 16:13:26', 0);
INSERT INTO `buy` VALUES (212, 28, 22, 1, 34.00, '2020-05-27 16:13:26', 0);
INSERT INTO `buy` VALUES (213, 34, 18, 1, 51.50, '2020-05-30 11:37:25', 1);
INSERT INTO `buy` VALUES (214, 34, 17, 1, 75.60, '2020-05-30 11:37:25', 1);
INSERT INTO `buy` VALUES (215, 34, 17, 1, 75.60, '2020-05-30 11:37:32', 1);
INSERT INTO `buy` VALUES (216, 34, 17, 1, 75.60, '2020-05-30 16:53:26', 1);
INSERT INTO `buy` VALUES (217, 34, 17, 1, 75.60, '2020-05-30 16:53:31', 1);
INSERT INTO `buy` VALUES (218, 34, 17, 1, 75.60, '2020-05-30 16:53:38', 1);
INSERT INTO `buy` VALUES (219, 34, 18, 1, 51.50, '2020-05-30 16:53:38', 1);
INSERT INTO `buy` VALUES (220, 34, 17, 1, 75.60, '2020-05-30 16:53:43', 1);
INSERT INTO `buy` VALUES (221, 34, 17, 1, 75.60, '2020-05-30 16:53:49', 1);
INSERT INTO `buy` VALUES (222, 34, 18, 1, 51.50, '2020-05-30 16:53:49', 1);
INSERT INTO `buy` VALUES (223, 34, 17, 2, 151.20, '2020-05-30 16:53:59', 1);
INSERT INTO `buy` VALUES (224, 34, 18, 1, 51.50, '2020-05-30 16:53:59', 1);
INSERT INTO `buy` VALUES (225, 34, 18, 1, 51.50, '2020-05-30 16:54:06', 1);
INSERT INTO `buy` VALUES (226, 34, 17, 1, 75.60, '2020-05-30 16:54:06', 1);
INSERT INTO `buy` VALUES (227, 34, 17, 2, 151.20, '2020-05-30 16:54:14', 1);
INSERT INTO `buy` VALUES (228, 34, 18, 1, 51.50, '2020-05-30 16:54:14', 1);
INSERT INTO `buy` VALUES (229, 34, 17, 1, 75.60, '2020-05-30 16:56:57', 1);
INSERT INTO `buy` VALUES (230, 34, 1, 3, 34.50, '2020-05-31 09:35:30', 1);
INSERT INTO `buy` VALUES (231, 34, 1, 3, 34.50, '2020-05-31 09:35:36', 1);
INSERT INTO `buy` VALUES (232, 34, 14, 1, 9.70, '2020-05-31 09:35:36', 1);
INSERT INTO `buy` VALUES (233, 34, 1, 3, 34.50, '2020-05-31 09:41:18', 1);
INSERT INTO `buy` VALUES (234, 34, 14, 1, 9.70, '2020-05-31 09:41:18', 1);
INSERT INTO `buy` VALUES (235, 34, 15, 1, 14.40, '2020-05-31 09:41:18', 1);
INSERT INTO `buy` VALUES (236, 34, 16, 1, 12.20, '2020-05-31 10:01:26', 1);
INSERT INTO `buy` VALUES (237, 34, 17, 1, 75.60, '2020-05-31 10:50:18', 1);
INSERT INTO `buy` VALUES (238, 34, 2, 2, 40.00, '2020-05-31 10:56:10', 1);
INSERT INTO `buy` VALUES (239, 34, 4, 1, 30.00, '2020-05-31 10:56:10', 1);
INSERT INTO `buy` VALUES (240, 34, 3, 1, 15.10, '2020-05-31 10:56:10', 1);
INSERT INTO `buy` VALUES (241, 34, 1, 3, 34.50, '2020-05-31 16:36:13', 1);
INSERT INTO `buy` VALUES (242, 34, 14, 1, 9.70, '2020-05-31 16:36:13', 1);
INSERT INTO `buy` VALUES (243, 34, 15, 1, 14.40, '2020-05-31 16:36:13', 1);
INSERT INTO `buy` VALUES (244, 34, 1, 1, 11.50, '2020-05-31 16:36:18', 1);
INSERT INTO `buy` VALUES (245, 34, 15, 1, 14.40, '2020-05-31 16:36:18', 1);
INSERT INTO `buy` VALUES (246, 34, 14, 1, 9.70, '2020-05-31 16:36:18', 1);
INSERT INTO `buy` VALUES (247, 34, 1, 1, 11.50, '2020-05-31 16:36:25', 1);
INSERT INTO `buy` VALUES (248, 34, 14, 1, 9.70, '2020-05-31 16:36:25', 1);
INSERT INTO `buy` VALUES (249, 34, 14, 1, 9.70, '2020-05-31 16:46:26', 1);
INSERT INTO `buy` VALUES (250, 34, 1, 2, 23.00, '2020-05-31 16:46:26', 1);
INSERT INTO `buy` VALUES (251, 34, 25, 1, 68.10, '2020-06-01 10:43:58', 1);
INSERT INTO `buy` VALUES (252, 34, 31, 1, 52.10, '2020-06-01 10:43:58', 1);
INSERT INTO `buy` VALUES (253, 34, 24, 1, 26.50, '2020-06-01 10:43:58', 1);
INSERT INTO `buy` VALUES (254, 34, 24, 3, 79.50, '2020-06-01 10:44:07', 1);
INSERT INTO `buy` VALUES (255, 34, 25, 2, 136.20, '2020-06-01 10:44:07', 1);
INSERT INTO `buy` VALUES (256, 34, 31, 1, 52.10, '2020-06-01 10:44:07', 1);
INSERT INTO `buy` VALUES (257, 34, 31, 1, 52.10, '2020-06-01 11:23:21', 1);
INSERT INTO `buy` VALUES (258, 34, 17, 1, 75.60, '2020-06-01 11:23:59', 1);
INSERT INTO `buy` VALUES (259, 34, 8, 2, 44.00, '2020-06-01 11:27:40', 1);
INSERT INTO `buy` VALUES (260, 34, 1, 2, 23.00, '2020-06-01 11:27:40', 1);
INSERT INTO `buy` VALUES (261, 34, 14, 1, 9.70, '2020-06-01 11:27:40', 1);

-- ----------------------------
-- Table structure for car
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '购物车编号',
  `book_id` int(11) NOT NULL COMMENT '图书编号',
  `user_id` int(11) NOT NULL COMMENT '用户编号',
  `book_num` int(11) NULL DEFAULT NULL COMMENT '加入数量',
  `create_time` datetime(0) NOT NULL COMMENT '创建时间',
  `update_time` datetime(0) NULL DEFAULT NULL COMMENT '修改时间',
  `logic_delete_flag` int(1) UNSIGNED ZEROFILL NOT NULL DEFAULT 0 COMMENT '逻辑删除字段',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 182 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of car
-- ----------------------------
INSERT INTO `car` VALUES (1, 2, 1, NULL, '2020-01-30 20:40:37', NULL, 1);
INSERT INTO `car` VALUES (2, 2, 1, NULL, '2020-01-30 20:41:54', NULL, 1);
INSERT INTO `car` VALUES (3, 2, 1, NULL, '2020-01-30 20:43:30', NULL, 1);
INSERT INTO `car` VALUES (4, 3, 1, NULL, '2020-01-30 20:43:50', NULL, 1);
INSERT INTO `car` VALUES (5, 1, 1, NULL, '2020-01-31 20:54:42', NULL, 1);
INSERT INTO `car` VALUES (6, 2, 1, NULL, '2020-02-01 13:26:44', NULL, 1);
INSERT INTO `car` VALUES (7, 3, 1, NULL, '2020-02-01 13:26:52', NULL, 1);
INSERT INTO `car` VALUES (8, 4, 1, NULL, '2020-02-01 13:26:54', NULL, 1);
INSERT INTO `car` VALUES (9, 2, 1, NULL, '2020-02-01 13:32:41', NULL, 1);
INSERT INTO `car` VALUES (10, 3, 1, NULL, '2020-02-01 13:32:41', NULL, 1);
INSERT INTO `car` VALUES (11, 4, 1, NULL, '2020-02-01 13:32:41', NULL, 1);
INSERT INTO `car` VALUES (12, 3, 2, NULL, '2020-02-01 14:49:21', NULL, 1);
INSERT INTO `car` VALUES (13, 5, 1, NULL, '2020-02-01 17:39:04', NULL, 1);
INSERT INTO `car` VALUES (14, 2, 1, NULL, '2020-02-04 00:07:48', NULL, 1);
INSERT INTO `car` VALUES (15, 3, 1, NULL, '2020-02-04 00:07:49', NULL, 1);
INSERT INTO `car` VALUES (16, 3, 1, NULL, '2020-02-04 00:10:08', NULL, 1);
INSERT INTO `car` VALUES (17, 4, 1, NULL, '2020-02-04 00:10:09', NULL, 1);
INSERT INTO `car` VALUES (18, 2, 1, NULL, '2020-02-04 00:17:53', NULL, 1);
INSERT INTO `car` VALUES (19, 3, 1, NULL, '2020-02-04 00:17:54', NULL, 1);
INSERT INTO `car` VALUES (20, 4, 1, NULL, '2020-02-04 00:17:56', NULL, 1);
INSERT INTO `car` VALUES (21, 5, 1, NULL, '2020-02-04 00:17:57', NULL, 1);
INSERT INTO `car` VALUES (22, 1, 1, NULL, '2020-02-04 00:18:00', NULL, 1);
INSERT INTO `car` VALUES (23, 2, 1, NULL, '2020-02-04 15:04:54', NULL, 1);
INSERT INTO `car` VALUES (24, 3, 1, NULL, '2020-02-04 15:04:55', NULL, 1);
INSERT INTO `car` VALUES (25, 4, 1, NULL, '2020-02-04 15:04:56', NULL, 1);
INSERT INTO `car` VALUES (26, 5, 1, NULL, '2020-02-04 15:04:57', NULL, 1);
INSERT INTO `car` VALUES (27, 2, 1, NULL, '2020-02-04 20:55:22', NULL, 1);
INSERT INTO `car` VALUES (28, 2, 1, NULL, '2020-02-04 20:59:00', NULL, 1);
INSERT INTO `car` VALUES (29, 2, 1, NULL, '2020-02-04 21:19:05', NULL, 1);
INSERT INTO `car` VALUES (30, 2, 1, NULL, '2020-02-04 21:27:37', NULL, 1);
INSERT INTO `car` VALUES (31, 1, 1, NULL, '2020-02-04 21:30:02', NULL, 1);
INSERT INTO `car` VALUES (32, 4, 1, NULL, '2020-02-07 19:51:54', NULL, 1);
INSERT INTO `car` VALUES (33, 3, 1, NULL, '2020-02-07 19:51:57', NULL, 1);
INSERT INTO `car` VALUES (34, 2, 1, NULL, '2020-02-07 19:54:48', NULL, 1);
INSERT INTO `car` VALUES (35, 1, 1, NULL, '2020-02-11 15:43:47', NULL, 1);
INSERT INTO `car` VALUES (36, 3, 1, NULL, '2020-02-11 18:25:40', NULL, 1);
INSERT INTO `car` VALUES (37, 2, 1, NULL, '2020-02-11 23:54:05', NULL, 1);
INSERT INTO `car` VALUES (38, 1, 1, NULL, '2020-02-11 23:58:30', NULL, 1);
INSERT INTO `car` VALUES (39, 2, 1, NULL, '2020-02-11 23:58:32', NULL, 1);
INSERT INTO `car` VALUES (40, 3, 1, NULL, '2020-02-11 23:58:33', NULL, 1);
INSERT INTO `car` VALUES (41, 4, 1, NULL, '2020-02-11 23:58:35', NULL, 1);
INSERT INTO `car` VALUES (42, 5, 1, NULL, '2020-02-11 23:58:36', NULL, 1);
INSERT INTO `car` VALUES (43, 2, 1, NULL, '2020-02-12 17:49:25', NULL, 1);
INSERT INTO `car` VALUES (44, 2, 1, NULL, '2020-02-14 18:35:50', NULL, 1);
INSERT INTO `car` VALUES (45, 3, 1, NULL, '2020-02-28 09:37:50', NULL, 1);
INSERT INTO `car` VALUES (46, 2, 1, NULL, '2020-02-28 09:37:50', NULL, 1);
INSERT INTO `car` VALUES (47, 2, 1, NULL, '2020-03-10 18:40:18', NULL, 1);
INSERT INTO `car` VALUES (48, 3, 1, NULL, '2020-03-10 18:40:20', NULL, 1);
INSERT INTO `car` VALUES (49, 1, 1, NULL, '2020-03-31 19:11:32', NULL, 1);
INSERT INTO `car` VALUES (50, 2, 1, NULL, '2020-04-26 11:11:27', NULL, 1);
INSERT INTO `car` VALUES (51, 2, 1, NULL, '2020-04-26 11:11:41', NULL, 1);
INSERT INTO `car` VALUES (52, 1, 2, NULL, '2020-04-26 11:37:02', NULL, 0);
INSERT INTO `car` VALUES (53, 2, 1, NULL, '2020-04-26 16:35:54', NULL, 1);
INSERT INTO `car` VALUES (54, 2, 1, NULL, '2020-04-27 10:33:26', NULL, 1);
INSERT INTO `car` VALUES (55, 2, 1, NULL, '2020-04-28 13:07:57', NULL, 1);
INSERT INTO `car` VALUES (56, 4, 1, NULL, '2020-05-06 16:13:10', NULL, 0);
INSERT INTO `car` VALUES (57, 2, 2, NULL, '2020-05-06 16:26:27', NULL, 1);
INSERT INTO `car` VALUES (58, 17, 28, NULL, '2020-05-08 16:31:52', NULL, 1);
INSERT INTO `car` VALUES (59, 17, 28, NULL, '2020-05-08 16:31:59', NULL, 1);
INSERT INTO `car` VALUES (60, 17, 28, NULL, '2020-05-08 16:32:02', NULL, 1);
INSERT INTO `car` VALUES (61, 17, 28, NULL, '2020-05-08 16:32:03', NULL, 1);
INSERT INTO `car` VALUES (62, 17, 28, NULL, '2020-05-08 16:32:08', NULL, 1);
INSERT INTO `car` VALUES (63, 17, 28, NULL, '2020-05-08 16:32:58', NULL, 1);
INSERT INTO `car` VALUES (64, 17, 28, NULL, '2020-05-08 16:33:31', NULL, 1);
INSERT INTO `car` VALUES (65, 17, 28, NULL, '2020-05-08 16:34:46', NULL, 1);
INSERT INTO `car` VALUES (66, 17, 27, NULL, '2020-05-08 16:35:18', NULL, 0);
INSERT INTO `car` VALUES (67, 18, 27, NULL, '2020-05-08 16:35:21', NULL, 0);
INSERT INTO `car` VALUES (68, 18, 27, NULL, '2020-05-08 16:35:22', NULL, 0);
INSERT INTO `car` VALUES (69, 18, 27, NULL, '2020-05-08 16:35:23', NULL, 0);
INSERT INTO `car` VALUES (70, 18, 27, NULL, '2020-05-08 16:35:23', NULL, 0);
INSERT INTO `car` VALUES (71, 18, 27, NULL, '2020-05-08 16:36:37', NULL, 0);
INSERT INTO `car` VALUES (72, 17, 28, NULL, '2020-05-08 16:42:12', NULL, 1);
INSERT INTO `car` VALUES (73, 18, 28, NULL, '2020-05-08 16:42:41', NULL, 1);
INSERT INTO `car` VALUES (74, 24, 28, NULL, '2020-05-08 16:44:17', NULL, 1);
INSERT INTO `car` VALUES (75, 23, 28, NULL, '2020-05-08 16:44:28', NULL, 1);
INSERT INTO `car` VALUES (76, 25, 28, NULL, '2020-05-08 16:46:11', NULL, 1);
INSERT INTO `car` VALUES (77, 20, 28, NULL, '2020-05-08 16:46:39', NULL, 1);
INSERT INTO `car` VALUES (78, 21, 28, NULL, '2020-05-08 16:46:52', NULL, 1);
INSERT INTO `car` VALUES (79, 17, 28, NULL, '2020-05-08 16:55:23', NULL, 1);
INSERT INTO `car` VALUES (80, 17, 28, NULL, '2020-05-08 16:55:38', NULL, 1);
INSERT INTO `car` VALUES (81, 17, 28, NULL, '2020-05-08 16:55:52', NULL, 1);
INSERT INTO `car` VALUES (82, 17, 28, NULL, '2020-05-08 16:56:17', NULL, 1);
INSERT INTO `car` VALUES (83, 19, 28, NULL, '2020-05-08 16:56:53', NULL, 1);
INSERT INTO `car` VALUES (84, 19, 28, NULL, '2020-05-08 16:57:06', NULL, 1);
INSERT INTO `car` VALUES (85, 14, 28, NULL, '2020-05-08 17:00:32', NULL, 1);
INSERT INTO `car` VALUES (86, 14, 28, NULL, '2020-05-08 17:00:50', NULL, 1);
INSERT INTO `car` VALUES (87, 14, 28, NULL, '2020-05-08 17:02:39', NULL, 1);
INSERT INTO `car` VALUES (88, 14, 28, NULL, '2020-05-08 17:03:47', NULL, 1);
INSERT INTO `car` VALUES (89, 14, 28, NULL, '2020-05-08 17:06:49', NULL, 1);
INSERT INTO `car` VALUES (90, 14, 28, NULL, '2020-05-08 17:07:28', NULL, 1);
INSERT INTO `car` VALUES (91, 14, 28, NULL, '2020-05-08 17:08:23', NULL, 1);
INSERT INTO `car` VALUES (92, 14, 28, NULL, '2020-05-08 17:08:58', NULL, 1);
INSERT INTO `car` VALUES (93, 14, 28, NULL, '2020-05-08 17:12:12', NULL, 1);
INSERT INTO `car` VALUES (94, 14, 28, NULL, '2020-05-08 17:20:02', NULL, 1);
INSERT INTO `car` VALUES (95, 18, 28, NULL, '2020-05-09 15:59:51', NULL, 1);
INSERT INTO `car` VALUES (96, 26, 28, NULL, '2020-05-09 16:16:48', NULL, 1);
INSERT INTO `car` VALUES (97, 26, 28, NULL, '2020-05-09 16:17:02', NULL, 1);
INSERT INTO `car` VALUES (98, 26, 28, NULL, '2020-05-09 16:18:12', NULL, 1);
INSERT INTO `car` VALUES (99, 26, 28, NULL, '2020-05-09 16:18:13', NULL, 1);
INSERT INTO `car` VALUES (100, 26, 28, NULL, '2020-05-09 16:19:24', NULL, 1);
INSERT INTO `car` VALUES (101, 26, 28, NULL, '2020-05-09 16:19:38', NULL, 1);
INSERT INTO `car` VALUES (102, 26, 28, NULL, '2020-05-09 16:20:46', NULL, 1);
INSERT INTO `car` VALUES (103, 26, 28, NULL, '2020-05-09 16:23:43', NULL, 1);
INSERT INTO `car` VALUES (104, 25, 28, NULL, '2020-05-09 16:26:30', NULL, 1);
INSERT INTO `car` VALUES (105, 17, 28, NULL, '2020-05-09 17:20:46', NULL, 1);
INSERT INTO `car` VALUES (106, 17, 28, NULL, '2020-05-09 17:35:42', NULL, 1);
INSERT INTO `car` VALUES (107, 24, 28, NULL, '2020-05-09 17:49:31', NULL, 1);
INSERT INTO `car` VALUES (108, 24, 28, NULL, '2020-05-09 17:59:45', NULL, 1);
INSERT INTO `car` VALUES (109, 24, 28, NULL, '2020-05-09 18:02:29', NULL, 1);
INSERT INTO `car` VALUES (110, 24, 28, NULL, '2020-05-09 18:04:52', NULL, 1);
INSERT INTO `car` VALUES (111, 24, 28, NULL, '2020-05-09 19:36:19', NULL, 1);
INSERT INTO `car` VALUES (112, 17, 28, NULL, '2020-05-09 19:38:58', NULL, 1);
INSERT INTO `car` VALUES (113, 18, 28, NULL, '2020-05-09 19:38:59', NULL, 1);
INSERT INTO `car` VALUES (114, 19, 28, NULL, '2020-05-09 19:39:00', NULL, 1);
INSERT INTO `car` VALUES (115, 20, 28, NULL, '2020-05-09 19:39:01', NULL, 1);
INSERT INTO `car` VALUES (116, 21, 28, NULL, '2020-05-09 19:39:02', NULL, 1);
INSERT INTO `car` VALUES (117, 22, 28, NULL, '2020-05-09 19:39:03', NULL, 1);
INSERT INTO `car` VALUES (118, 23, 28, NULL, '2020-05-09 19:39:04', NULL, 1);
INSERT INTO `car` VALUES (119, 24, 28, NULL, '2020-05-09 19:39:05', NULL, 1);
INSERT INTO `car` VALUES (120, 25, 28, NULL, '2020-05-09 19:39:06', NULL, 1);
INSERT INTO `car` VALUES (121, 27, 28, NULL, '2020-05-09 19:39:09', NULL, 1);
INSERT INTO `car` VALUES (122, 35, 28, NULL, '2020-05-09 21:21:23', NULL, 1);
INSERT INTO `car` VALUES (123, 34, 28, NULL, '2020-05-09 21:21:24', NULL, 1);
INSERT INTO `car` VALUES (124, 33, 28, NULL, '2020-05-09 21:21:25', NULL, 1);
INSERT INTO `car` VALUES (125, 32, 28, NULL, '2020-05-09 21:21:27', NULL, 1);
INSERT INTO `car` VALUES (126, 31, 28, NULL, '2020-05-09 21:21:28', NULL, 1);
INSERT INTO `car` VALUES (127, 30, 28, NULL, '2020-05-09 21:21:29', NULL, 1);
INSERT INTO `car` VALUES (128, 29, 28, NULL, '2020-05-09 21:21:30', NULL, 1);
INSERT INTO `car` VALUES (129, 28, 28, NULL, '2020-05-09 21:21:31', NULL, 1);
INSERT INTO `car` VALUES (130, 17, 28, NULL, '2020-05-09 21:57:58', NULL, 1);
INSERT INTO `car` VALUES (131, 18, 28, NULL, '2020-05-09 21:57:59', NULL, 1);
INSERT INTO `car` VALUES (132, 19, 28, NULL, '2020-05-09 21:58:00', NULL, 1);
INSERT INTO `car` VALUES (133, 20, 28, NULL, '2020-05-09 21:58:00', NULL, 1);
INSERT INTO `car` VALUES (134, 21, 28, NULL, '2020-05-09 21:58:02', NULL, 1);
INSERT INTO `car` VALUES (135, 22, 28, NULL, '2020-05-09 21:58:03', NULL, 1);
INSERT INTO `car` VALUES (136, 17, 28, NULL, '2020-05-09 23:01:19', NULL, 1);
INSERT INTO `car` VALUES (137, 17, 34, NULL, '2020-05-18 19:19:39', NULL, 1);
INSERT INTO `car` VALUES (138, 18, 34, NULL, '2020-05-18 19:19:44', NULL, 1);
INSERT INTO `car` VALUES (139, 22, 34, NULL, '2020-05-18 19:19:53', NULL, 1);
INSERT INTO `car` VALUES (140, 21, 34, NULL, '2020-05-18 19:20:21', NULL, 1);
INSERT INTO `car` VALUES (141, 23, 34, NULL, '2020-05-18 19:20:32', NULL, 1);
INSERT INTO `car` VALUES (142, 17, 28, NULL, '2020-05-27 16:11:08', NULL, 1);
INSERT INTO `car` VALUES (143, 18, 28, NULL, '2020-05-27 16:11:09', NULL, 1);
INSERT INTO `car` VALUES (144, 19, 28, NULL, '2020-05-27 16:11:10', NULL, 0);
INSERT INTO `car` VALUES (145, 20, 28, NULL, '2020-05-27 16:11:11', NULL, 0);
INSERT INTO `car` VALUES (146, 21, 28, NULL, '2020-05-27 16:11:12', NULL, 0);
INSERT INTO `car` VALUES (147, 22, 28, NULL, '2020-05-27 16:11:13', NULL, 0);
INSERT INTO `car` VALUES (148, 17, 34, NULL, '2020-05-30 11:37:11', NULL, 1);
INSERT INTO `car` VALUES (149, 18, 34, NULL, '2020-05-30 11:37:12', NULL, 1);
INSERT INTO `car` VALUES (150, 19, 34, NULL, '2020-05-30 11:37:13', NULL, 1);
INSERT INTO `car` VALUES (151, 22, 34, NULL, '2020-05-30 11:37:15', NULL, 1);
INSERT INTO `car` VALUES (152, 23, 34, NULL, '2020-05-30 11:37:17', NULL, 1);
INSERT INTO `car` VALUES (153, 24, 34, NULL, '2020-05-30 11:37:18', NULL, 1);
INSERT INTO `car` VALUES (154, 18, 34, NULL, '2020-05-30 16:52:57', NULL, 1);
INSERT INTO `car` VALUES (155, 23, 34, NULL, '2020-05-30 16:53:11', NULL, 1);
INSERT INTO `car` VALUES (156, 24, 34, NULL, '2020-05-30 16:53:13', NULL, 1);
INSERT INTO `car` VALUES (157, 17, 34, NULL, '2020-05-31 09:35:14', NULL, 1);
INSERT INTO `car` VALUES (158, 19, 34, NULL, '2020-05-31 09:35:15', NULL, 1);
INSERT INTO `car` VALUES (159, 1, 34, NULL, '2020-05-31 09:35:19', NULL, 1);
INSERT INTO `car` VALUES (160, 14, 34, NULL, '2020-05-31 09:35:20', NULL, 1);
INSERT INTO `car` VALUES (161, 15, 34, NULL, '2020-05-31 09:35:21', NULL, 1);
INSERT INTO `car` VALUES (162, 1, 34, NULL, '2020-05-31 09:41:05', NULL, 1);
INSERT INTO `car` VALUES (163, 14, 34, NULL, '2020-05-31 09:41:07', NULL, 1);
INSERT INTO `car` VALUES (164, 15, 34, NULL, '2020-05-31 09:41:08', NULL, 1);
INSERT INTO `car` VALUES (165, 16, 34, NULL, '2020-05-31 10:01:21', NULL, 1);
INSERT INTO `car` VALUES (166, 17, 34, NULL, '2020-05-31 10:50:15', NULL, 1);
INSERT INTO `car` VALUES (167, 2, 34, NULL, '2020-05-31 10:56:02', NULL, 1);
INSERT INTO `car` VALUES (168, 3, 34, NULL, '2020-05-31 10:56:04', NULL, 1);
INSERT INTO `car` VALUES (169, 4, 34, NULL, '2020-05-31 10:56:05', NULL, 1);
INSERT INTO `car` VALUES (170, 1, 34, NULL, '2020-05-31 16:35:58', NULL, 1);
INSERT INTO `car` VALUES (171, 14, 34, NULL, '2020-05-31 16:35:59', NULL, 1);
INSERT INTO `car` VALUES (172, 15, 34, NULL, '2020-05-31 16:36:00', NULL, 1);
INSERT INTO `car` VALUES (173, 1, 34, NULL, '2020-05-31 16:46:15', NULL, 1);
INSERT INTO `car` VALUES (174, 14, 34, NULL, '2020-05-31 16:46:16', NULL, 1);
INSERT INTO `car` VALUES (175, 24, 34, NULL, '2020-06-01 10:00:58', NULL, 1);
INSERT INTO `car` VALUES (176, 25, 34, NULL, '2020-06-01 10:00:59', NULL, 1);
INSERT INTO `car` VALUES (177, 31, 34, NULL, '2020-06-01 10:01:06', NULL, 1);
INSERT INTO `car` VALUES (178, 17, 34, NULL, '2020-06-01 11:23:54', NULL, 1);
INSERT INTO `car` VALUES (179, 8, 34, NULL, '2020-06-01 11:27:23', NULL, 1);
INSERT INTO `car` VALUES (180, 1, 34, NULL, '2020-06-01 11:27:27', NULL, 1);
INSERT INTO `car` VALUES (181, 14, 34, NULL, '2020-06-01 11:27:28', NULL, 1);

-- ----------------------------
-- Table structure for collection
-- ----------------------------
DROP TABLE IF EXISTS `collection`;
CREATE TABLE `collection`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '收藏id',
  `book_id` int(11) NOT NULL COMMENT '图书id',
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `create_time` datetime(0) NOT NULL COMMENT '创建时间',
  `logic_delete_flag` int(1) UNSIGNED ZEROFILL NOT NULL DEFAULT 0 COMMENT '逻辑删除字段',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 42 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of collection
-- ----------------------------
INSERT INTO `collection` VALUES (1, 2, 1, '2020-01-30 21:03:40', 1);
INSERT INTO `collection` VALUES (2, 3, 1, '2020-02-01 11:28:24', 1);
INSERT INTO `collection` VALUES (3, 4, 1, '2020-02-01 11:28:26', 1);
INSERT INTO `collection` VALUES (4, 3, 1, '2020-02-01 11:28:28', 1);
INSERT INTO `collection` VALUES (5, 3, 1, '2020-02-01 11:28:30', 1);
INSERT INTO `collection` VALUES (6, 2, 1, '2020-02-01 12:16:07', 1);
INSERT INTO `collection` VALUES (7, 2, 1, '2020-02-01 12:16:28', 1);
INSERT INTO `collection` VALUES (8, 2, 1, '2020-02-01 12:21:06', 1);
INSERT INTO `collection` VALUES (9, 5, 1, '2020-02-01 17:39:03', 1);
INSERT INTO `collection` VALUES (10, 5, 1, '2020-02-01 17:39:34', 1);
INSERT INTO `collection` VALUES (11, 1, 1, '2020-02-01 20:15:36', 1);
INSERT INTO `collection` VALUES (12, 2, 1, '2020-04-26 10:16:41', 1);
INSERT INTO `collection` VALUES (13, 2, 1, '2020-04-26 11:11:28', 1);
INSERT INTO `collection` VALUES (14, 2, 1, '2020-04-26 11:16:33', 1);
INSERT INTO `collection` VALUES (15, 5, 1, '2020-04-26 11:33:30', 1);
INSERT INTO `collection` VALUES (16, 1, 1, '2020-04-26 11:53:51', 0);
INSERT INTO `collection` VALUES (17, 2, 1, '2020-04-27 10:33:34', 0);
INSERT INTO `collection` VALUES (18, 1, 1, '2020-04-29 17:17:31', 0);
INSERT INTO `collection` VALUES (19, 2, 2, '2020-05-06 16:27:59', 0);
INSERT INTO `collection` VALUES (20, 17, 28, '2020-05-08 16:32:10', 1);
INSERT INTO `collection` VALUES (21, 14, 28, '2020-05-08 17:10:31', 1);
INSERT INTO `collection` VALUES (22, 14, 28, '2020-05-08 17:12:06', 1);
INSERT INTO `collection` VALUES (23, 18, 28, '2020-05-09 16:00:22', 0);
INSERT INTO `collection` VALUES (24, 26, 28, '2020-05-09 16:25:35', 0);
INSERT INTO `collection` VALUES (25, 17, 28, '2020-05-09 23:01:20', 0);
INSERT INTO `collection` VALUES (26, 23, 34, '2020-05-18 19:19:59', 1);
INSERT INTO `collection` VALUES (27, 27, 34, '2020-05-18 19:20:17', 1);
INSERT INTO `collection` VALUES (28, 28, 34, '2020-05-18 19:20:18', 1);
INSERT INTO `collection` VALUES (29, 23, 34, '2020-05-18 19:21:11', 1);
INSERT INTO `collection` VALUES (30, 26, 34, '2020-05-30 10:57:25', 1);
INSERT INTO `collection` VALUES (31, 25, 34, '2020-05-30 16:53:07', 1);
INSERT INTO `collection` VALUES (32, 24, 34, '2020-05-30 16:53:09', 1);
INSERT INTO `collection` VALUES (33, 1, 34, '2020-05-31 09:35:22', 1);
INSERT INTO `collection` VALUES (34, 14, 34, '2020-05-31 09:35:23', 1);
INSERT INTO `collection` VALUES (35, 1, 34, '2020-05-31 09:41:06', 1);
INSERT INTO `collection` VALUES (36, 2, 34, '2020-05-31 10:56:03', 1);
INSERT INTO `collection` VALUES (37, 16, 34, '2020-05-31 16:36:01', 1);
INSERT INTO `collection` VALUES (38, 1, 34, '2020-05-31 16:46:16', 1);
INSERT INTO `collection` VALUES (39, 28, 34, '2020-06-01 10:01:03', 1);
INSERT INTO `collection` VALUES (40, 26, 34, '2020-06-01 10:42:15', 1);
INSERT INTO `collection` VALUES (41, 8, 34, '2020-06-01 11:27:22', 0);

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '订单编号',
  `book_id` int(11) NOT NULL COMMENT '图书编号',
  `user_id` int(11) NOT NULL COMMENT '用户编号',
  `book_num` int(11) NOT NULL COMMENT '数量',
  `sum` decimal(10, 2) NOT NULL COMMENT '小计',
  `address_id` int(11) NOT NULL COMMENT '收货信息id',
  `create_time` datetime(0) NOT NULL COMMENT '下单时间',
  `update_time` datetime(0) NULL DEFAULT NULL COMMENT '退订时间',
  `logic_delete_flag` int(1) UNSIGNED ZEROFILL NOT NULL DEFAULT 0 COMMENT '逻辑删除字段',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 36 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES (1, 1, 1, 1, 1.00, 1, '2020-05-09 21:11:44', NULL, 1);
INSERT INTO `order` VALUES (2, 1, 1, 1, 1.00, 1, '2020-05-09 21:49:18', NULL, 0);
INSERT INTO `order` VALUES (4, 1, 1, 1, 1.00, 1, '2020-05-09 21:23:51', NULL, 0);
INSERT INTO `order` VALUES (5, 32, 28, 1, 22.40, 5, '2020-05-09 21:48:14', NULL, 0);
INSERT INTO `order` VALUES (6, 33, 28, 3, 100.50, 5, '2020-05-09 21:50:06', NULL, 0);
INSERT INTO `order` VALUES (7, 34, 28, 1, 20.30, 5, '2020-05-09 21:56:02', NULL, 1);
INSERT INTO `order` VALUES (8, 35, 28, 1, 34.60, 5, '2020-05-09 21:56:19', NULL, 0);
INSERT INTO `order` VALUES (9, 17, 28, 1, 75.60, 5, '2020-05-09 21:58:15', NULL, 1);
INSERT INTO `order` VALUES (10, 18, 28, 1, 51.50, 5, '2020-05-09 22:00:07', NULL, 0);
INSERT INTO `order` VALUES (11, 17, 28, 1, 75.60, 5, '2020-05-09 23:01:54', NULL, 0);
INSERT INTO `order` VALUES (12, 19, 28, 1, 55.30, 5, '2020-05-17 11:11:22', NULL, 0);
INSERT INTO `order` VALUES (13, 20, 28, 2, 54.60, 5, '2020-05-17 11:11:22', NULL, 0);
INSERT INTO `order` VALUES (14, 22, 28, 3, 102.00, 5, '2020-05-17 11:11:22', NULL, 0);
INSERT INTO `order` VALUES (18, 17, 28, 1, 75.60, 5, '2020-05-27 16:12:29', NULL, 0);
INSERT INTO `order` VALUES (19, 18, 28, 1, 51.50, 5, '2020-05-27 16:12:29', NULL, 0);
INSERT INTO `order` VALUES (30, 14, 34, 1, 9.70, 6, '2020-05-31 16:46:34', NULL, 1);
INSERT INTO `order` VALUES (31, 1, 34, 2, 23.00, 6, '2020-05-31 16:46:34', NULL, 1);
INSERT INTO `order` VALUES (32, 17, 34, 1, 75.60, 6, '2020-06-01 11:24:01', NULL, 1);
INSERT INTO `order` VALUES (33, 8, 34, 2, 44.00, 6, '2020-06-01 11:27:47', NULL, 0);
INSERT INTO `order` VALUES (34, 1, 34, 2, 23.00, 6, '2020-06-01 11:27:47', NULL, 0);
INSERT INTO `order` VALUES (35, 14, 34, 1, 9.70, 6, '2020-06-01 11:27:47', NULL, 0);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户编号',
  `head` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户头像',
  `loginname` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户登录名',
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户姓名',
  `password` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户密码',
  `status` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户身份',
  `sex` varchar(4) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户性别',
  `identity` char(18) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '身份证号',
  `phone` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '电话号码',
  `logic_delete_flag` int(1) UNSIGNED ZEROFILL NOT NULL DEFAULT 0 COMMENT '逻辑删除字段',
  `create_time` datetime(0) NOT NULL COMMENT '创建时间',
  `update_time` datetime(0) NULL DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 35 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '/image/head1.jpg', '张三', '张三', '123456', '用户', '女', '511324199911112222', '13312345678', 0, '2020-01-06 11:02:27', '2020-05-18 19:27:42');
INSERT INTO `user` VALUES (2, '/image/head1.jpg', 'zs', 'zs', '123456', '管理员', '男', '511324199911119999', '13312345678', 0, '2020-01-10 19:40:20', '2020-06-01 11:35:16');
INSERT INTO `user` VALUES (3, '/image/head_default.jpg', 'AA', 'AA', '123456', '用户', '男', '511324199911112222', '13699998888', 0, '2020-01-16 20:25:39', '2020-06-01 11:35:21');
INSERT INTO `user` VALUES (5, '/image/head_default.jpg', 'BB', 'BB', '123456', '用户', '女', '511324199912123333', '13302581234', 0, '2020-01-20 09:48:12', '2020-06-01 11:35:26');
INSERT INTO `user` VALUES (6, '/image/head_default.jpg', 'CC', 'CC', '123456', '用户', '男', '511324199912123333', '13302581234', 0, '2020-01-20 15:42:09', '2020-06-01 11:35:10');
INSERT INTO `user` VALUES (7, '/image/head_default.jpg', 'DD', 'DD', '123456', '用户', '男', '511324199912123333', '13302581234', 0, '2020-01-20 15:42:10', NULL);
INSERT INTO `user` VALUES (8, '/image/head_default.jpg', 'EE', 'EE', '123456', '用户', '男', '511324199912123333', '13302581234', 0, '2020-01-20 15:42:11', NULL);
INSERT INTO `user` VALUES (9, '/image/head_default.jpg', 'FF', 'FF', '123456', '用户', '男', '511324199912123333', '13302581234', 0, '2020-01-20 15:42:11', NULL);
INSERT INTO `user` VALUES (10, '/image/head_default.jpg', 'GG', 'GG', '123456', '用户', '男', '511324199912123333', '13302581234', 0, '2020-01-20 15:42:11', NULL);
INSERT INTO `user` VALUES (11, '/image/head_default.jpg', 'HH', 'HH', '123456', '用户', '男', '511324199912123333', '13302581234', 0, '2020-01-20 15:42:11', '2020-02-02 16:17:04');
INSERT INTO `user` VALUES (12, '/image/head_default.jpg', 'II', 'II', '123456', '用户', '男', '511324199912123333', '13302581234', 0, '2020-01-20 15:42:11', NULL);
INSERT INTO `user` VALUES (13, '/image/head_default.jpg', 'LL', 'LL', '123456', '用户', '男', '511324199912123333', '13302581234', 0, '2020-01-20 15:42:12', NULL);
INSERT INTO `user` VALUES (14, '/image/head_default.jpg', 'MM', 'MM', '123456', '用户', '男', '511324199912123333', '13302581234', 0, '2020-01-20 15:42:12', NULL);
INSERT INTO `user` VALUES (15, '/image/head_default.jpg', 'NN', 'NN', '123456', '用户', '男', '511324199912123333', '13302581234', 0, '2020-01-20 15:42:12', NULL);
INSERT INTO `user` VALUES (16, '/image/head_default.jpg', 'OO', 'OO', '123456', '用户', '男', '511324199912123333', '13302581234', 0, '2020-01-20 15:42:12', NULL);
INSERT INTO `user` VALUES (17, '/image/head_default.jpg', 'PP', 'PP', '123456', '用户', '男', '511324199912123333', '13302581234', 0, '2020-01-20 15:42:12', NULL);
INSERT INTO `user` VALUES (18, '/image/head_default.jpg', 'RR', 'RR', '123456', '用户', '男', '511324199912123333', '13302581234', 0, '2020-01-20 15:42:13', NULL);
INSERT INTO `user` VALUES (19, '/image/head_default.jpg', 'SS', 'SS', '123456', '用户', '男', '511324199912123333', '13302581234', 0, '2020-01-20 15:42:13', NULL);
INSERT INTO `user` VALUES (20, '/image/head_default.jpg', 'TT', 'TT', '123456', '用户', '男', '511324199912123333', '13302581234', 0, '2020-01-20 15:42:13', NULL);
INSERT INTO `user` VALUES (21, '/image/head_default.jpg', 'UU', 'UU', '123456', '用户', '男', '511324199912123333', '13302581234', 0, '2020-01-20 15:42:13', NULL);
INSERT INTO `user` VALUES (22, '/image/head_default.jpg', 'VV', 'VV', '123456', '用户', '男', '511324199912123333', '13302581234', 0, '2020-01-20 15:42:13', NULL);
INSERT INTO `user` VALUES (23, '/image/head_default.jpg', 'WW', 'WW', '123456', '用户', '男', '511324199912123333', '13302581234', 0, '2020-01-20 15:42:13', NULL);
INSERT INTO `user` VALUES (24, '/image/head_default.jpg', 'XX', 'XX', '123456', '用户', '男', '511324199912123333', '13302581234', 0, '2020-01-20 15:42:14', NULL);
INSERT INTO `user` VALUES (25, '/image/head_default.jpg', 'YY', 'YY', '123456', '用户', '男', '511324199912123333', '13302581234', 0, '2020-01-20 15:42:14', NULL);
INSERT INTO `user` VALUES (26, '/image/head_default.jpg', 'ZZ', 'ZZ', '123456', '用户', '男', '511324199912123333', '13302581234', 0, '2020-01-20 15:42:14', NULL);
INSERT INTO `user` VALUES (27, '/image/head_default.jpg', 'zz', '123', '123456', '用户', '男', '511324199912123333', '13636361212', 0, '2020-05-08 15:07:02', '2020-05-31 09:47:27');
INSERT INTO `user` VALUES (28, '/image/head1.jpg', 'qq', 'qq', '123456', '用户', '女', '511324199912123333', '13333333333', 0, '2020-05-08 15:17:17', '2020-05-15 10:04:23');
INSERT INTO `user` VALUES (29, '/image/head_default.jpg', 'CC', 'qq', '123456', '用户', '男', '511324199912123333', '13333333333', 0, '2020-05-08 15:47:52', NULL);
INSERT INTO `user` VALUES (31, '/image/head1.jpg', 'CCC', 'CCC', '123456', '用户', '男', '511324199912123333', '13302581234', 0, '2020-05-10 15:29:21', NULL);
INSERT INTO `user` VALUES (32, '/image/head1.jpg', 'admin', 'admin', '123456', '管理员', '男', '511324199912123333', '13302581234', 0, '2020-05-17 12:34:48', NULL);
INSERT INTO `user` VALUES (34, '/image/head1.jpg', 'swpu', 'swpu', '123456', '用户', '女', '511324199912123333', '13333333333', 0, '2020-05-18 19:19:16', '2020-05-18 19:25:11');

SET FOREIGN_KEY_CHECKS = 1;
