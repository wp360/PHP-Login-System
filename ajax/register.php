<?php
    //Allow the config
    define('__CONFIG__',true);
    //require the config
    require_once "../inc/config.php"; 
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        //JSON 格式
        header('Content-Type: application/json');
        $return = [];
        $return['redirect'] = 'php_login/dashboard.php';
        $return['name'] = "Bob Bao";
        echo json_encode($return,JSON_PRETTY_PRINT);
        exit;
    }else{
        exit('test');
    }
?>