create database if not exists `iris`;

use `iris`;

-- 用户信息表
create table if not exists `tb_user`(
    `id` varchar(32) not null primary key,
    `username` varchar(200) not null,
    `password` varchar(50) not null,
    `avatar` varchar(100) not null,
    `vip` tinyint(1) not null
) engine = InnoDB comment '用户信息表';

-- section表
create table if not exists `tb_section` (
    `id` varchar(32) not null primary key,
    `name` varchar(100) not null,
    `src` varchar(200)
) engine = InnoDB comment '种类表';

-- 基础record表
create table if not exists `tb_record`(
    `id` varchar(32) not null primary key,
    `sid` varchar(32) not null,
    `name` varchar(200) not null comment '作品标题',
    `date` varchar(13) not null comment '日期',
    `season` varchar(10) comment '季数',
    `episode` varchar(10) comment '集数',
    `visual` varchar(200) comment 'KeyVisual',
    `star` int(1) comment '推荐度',
    `comment` varchar comment '个人评价'
) engine = InnoDB comment '基础记录表';