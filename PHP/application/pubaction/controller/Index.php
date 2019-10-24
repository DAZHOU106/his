<?php
namespace app\pubaction\controller;
use think\Db;
use think\Request;

class Index {
//    用户登录
//    参数 username,password,
    public function Login (Request $request) {
              $result=[];
      $username = $request->param('username');
      $password =  $request->param('password');
      $isUserExis = Db::name('user')
          ->where('username',$username)
          ->find();
      $pwd_s = Db::name('user')
          ->field('password')
          ->where('username',$username)
          ->select();

      if($isUserExis&&$password==$pwd_s["password"]){
          $result = ["code"=>"102","msg"=>"登录成功"];
      }else{
          $result = ["code"=>"-101","msg"=>"登录失败"];
      }
       return json($result);
    }
    public function
//    用户注册
//    参数 username ，password，
}