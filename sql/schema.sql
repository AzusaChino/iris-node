create database if not exists `iris`;

use `iris`;

-- 用户信息表
create table if not exists `tb_user`
(
    `id`       varchar(32)  not null primary key,
    `username` varchar(200) not null comment '用户名',
    `email`    varchar(100) comment '邮箱',
    `password` varchar(50)  not null comment '密码',
    `avatar`   varchar(100) comment '头像URL路径',
    `vip`      varchar(1)   not null default '0' comment '是否为vip用户',
    `status`   varchar(1)   not null default '0' comment '账户状态'
) engine = InnoDB comment '用户信息表';

-- section表
create table if not exists `tb_section`
(
    `id`   varchar(32)  not null primary key,
    `name` varchar(100) not null comment '名称',
    `src`  varchar(200) comment '背景URL路径'
) engine = InnoDB comment '种类表';

-- 基础record表
create table if not exists `tb_record`
(
    `id`        varchar(32)  not null primary key,
    `sid`       varchar(32)  not null comment 'sectionId',
    `uname`     varchar(32)  not null comment '用户名称',
    `name`      varchar(200) not null comment '作品标题',
    `timestamp` bigint       not null comment '时间戳',
    `season`    varchar(10) comment '季数',
    `episode`   varchar(10) comment '集数',
    `visual`    varchar(100) comment '主题影像URL',
    `star`      double comment '推荐度',
    `comment`   varchar(300) comment '个人评价'
) engine = InnoDB comment '基础记录表';

-- 查询条件建立索引
create index tb_record_sid_uname_index on `iris`.`tb_record` (`sid`, `uname`);