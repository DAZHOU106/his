<?php
namespace app\index\controller;

class Index
{

    public function index(){
        header("Access-Control-Allow-Origin:*");
       $data = ["data"=>"I love you"];
        return json_encode($data);
    }
}
