## 用户登录
### 相关步骤
```javascript
1. git >> github
2. UIkit 
官网：https://getuikit.com  
中文参考：http://www.getuikit.net/
备注：UIkit 兼容 IE9 以上现代浏览器。在 IE8 及其以下版本中，所有JavaScript 都会失效。
3. 页面制作
首页、登录页、注册页
4. 数据库
4-1 登录后台：http://localhost/phpmyadmin
4-2 新建数据库 名称：php_login 字符：utf8mb4_unicode_ci 多语言
4-3 新建数据表 名字：users 字段数： 4
user_id（用户ID）、email（用户邮箱地址）、password（用户登录密码）、reg_time（用户注册时间）
4-4 建立数据库连接
简单操作：
<?php 
    $link = mysqli_connect("localhost","root","mypassword")or die("无法建立连接");
    echo "成功连接数据库";
?>
此处，新建了一个DB.php，具体参见源码。
```
