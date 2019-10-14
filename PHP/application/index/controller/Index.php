<?php
namespace app\index\controller;
use think\Db;
class Index
{
    public function index(){
        header("Access-Control-Allow-Origin:*");
//        $data =  Db::query('select * from student');
//        $data = Db::table('student')->select();
//        var_dump(json_encode($data));
//        return json_encode($data);
//        return 1;
         var_dump((int)"123");

    }
}
