<?php
namespace app\admin\controller;

class Index {
    function index (){
        header("Access-Control-Allow-Origin:*");
        return 1;
    }
    function add(){

    dump( getAllUsers());
}

}