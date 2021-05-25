create database if not exists `iris`;

use `iris`;

-- 用户信息表
create table if not exists `tb_user` (
    `id` varchar(32) not null primary key,
    `username` varchar(100) not null comment '用户名',
    `email` varchar(100) comment '邮箱',
    `password` varchar(50) not null comment '密码',
    `avatar` varchar(100) comment '头像URL路径',
    `vip` varchar(1) not null default '0' comment '是否为vip用户',
    `status` varchar(1) not null default '0' comment '账户状态',
    constraint tb_user_username_uindex unique (`username`)
) engine = InnoDB comment '用户信息表';

-- section表
create table if not exists `tb_section` (
    `id` varchar(32) not null primary key,
    `name` varchar(100) not null comment '分类名称',
    `visual` varchar(100) comment '背景URL路径',
    constraint tb_section_name_uindex unique (`name`)
) engine = InnoDB comment '种类表';

-- 基础record表
create table if not exists `tb_record` (
    `id` varchar(32) not null primary key,
    `sid` varchar(32) not null comment 'sectionId',
    `uname` varchar(32) not null comment '用户名称',
    `name` varchar(100) not null comment '作品标题',
    `episode` varchar(5) not null comment '数目',
    `status` varchar(1) not null default '0' comment '状态：连载中，已完结',
    `watched` varchar(1) default '0' comment '是否看完',
    `timestamp` bigint not null comment '时间戳',
    `star` double comment '推荐度',
    `visual` varchar(100) comment '主题影像URL',
    `comment` varchar(300) comment '个人评价',
    constraint tb_record_name_uindex unique (`name`)
) engine = InnoDB comment '基础记录表';

-- 查询条件建立索引
create index tb_record_sid_uname_index on `iris`.`tb_record` (`sid`, `uname`);