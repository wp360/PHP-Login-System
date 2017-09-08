<?php
    //Allow the config
    define('__CONFIG__',true);
    //require the config
    require_once "inc/config.php"; 
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>首页</title>
    <base href="/" />
    <link rel="stylesheet" href="https://cdn.bootcss.com/uikit/3.0.0-beta.30/css/uikit.min.css" />
</head>
<body>
    <div class="uk-section uk-container">
        <?php
            echo "欢迎您！今天是：";
            echo date("Y m d");
        ?>
        <p>
            <a href="php_login/login.php" class="uk-button uk-button-primary">登录</a>
            <a href="php_login/register.php" class="uk-button uk-button-primary">注册</a>
        </p>
    </div>
    <?php require_once "inc/footer.php" ?>
</body>
</html>