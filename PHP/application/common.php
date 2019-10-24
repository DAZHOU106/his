<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 流年 <liu21st@gmail.com>
// +----------------------------------------------------------------------

// 应用公共文件
use think\Db;
//获取全部用户信息;
function getAllUsers() {
    $users = Db::table("user")
        ->select();
    return $users;
}


//获取个人信息
function getMyInfo($userId){
    $myInfo = Db::name("user")
        ->where("user_id",$userId)
        ->select();
    return $myInfo;
}


