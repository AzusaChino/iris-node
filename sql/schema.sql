create database if not exists `iris-node`;

use `iris-node`;

-- 用户信息表
create table if not exists `tb_user`
(
    `id`       varchar(32)  not null,
    `username` varchar(100) not null comment '用户名',
    `email`    varchar(200) comment '邮箱',
    `password` varchar(50)  not null comment '密码',
    `avatar`   varchar(100) comment '头像URL路径',
    `vip`      tinyint(1) default 0 comment '是否为vip用户, common(0), vip(1)',
    `status`   tinyint(1) default 1 comment '账户状态, invalid(0), valid(1)',
    PRIMARY KEY (`id`),
    UNIQUE KEY `tb_user_username_unique_key` (`username`)
) engine = InnoDB comment '用户信息表';

-- section表
create table if not exists `tb_section`
(
    `id`     varchar(32) not null,
    `name`   varchar(30) not null comment '分类名称',
    `visual` varchar(255) comment '背景URL路径',
    PRIMARY KEY (`id`),
    UNIQUE KEY `tb_section_name_unique_key` (`name`)
) engine = InnoDB comment '类别表';

-- 基础record表
create table if not exists `tb_record`
(
    `id`        varchar(32)  not null,
    `sid`       varchar(32)  not null comment 'sid',
    `username`  varchar(100) not null comment '用户名称',
    `title`     varchar(255) not null comment '作品标题',
    `episode`   varchar(30)  not null comment '数目',
    `status`    tinyint(1)  default 0 comment '状态: 连载中(0), 已完结(1)',
    `watched`   tinyint(1)  default 0 comment '是否看完: 在看(0), 已看完(1)',
    `timestamp` bigint(13)   not null comment '时间戳',
    `star`      float(2, 1) default 1.0 comment '推荐度',
    `visual`    varchar(100) comment '主题影像URL',
    `comment`   varchar(255) comment '个人评价',
    PRIMARY KEY (`id`),
    UNIQUE KEY `tb_record_name_unique_key` (`title`),
    INDEX `tb_record_sid_username_index` (`sid`, `username`)
) engine = InnoDB comment '基础记录表';