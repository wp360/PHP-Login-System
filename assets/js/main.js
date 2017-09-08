$(document).on("submit", "form.js-register", function(event) {
	event.preventDefault();

    var _form = $(this);
    var _error = $(".js-error",_form);

	var dataObj = {
		email: $("input[type='email']", _form).val(),
		password: $("input[type='password']", _form).val()
    };

    if(dataObj.email.length < 12){
        _error.text("请输入正确的邮箱地址").show();
        return false;
    }else if(dataObj.password.length < 6){
        _error.text("请输入不少于6个字符的正确密码").show();
        return false;
    }
    //we can start the ajax process
    _error.hide();

    $.ajax({
        type: 'POST',
        url: 'php_login/ajax/register.php',
        data: dataObj,
        dataType: 'json',
        async: true
    })
    .done(function ajaxDone(data){
        //数据输出
        console.log(data);
        if(data.redirect !== undefined){
            //window.location = data.redirect;
        }
        alert(data.name);
    })
    .fail(function ajaxFailed(err){
        //报错信息
        console.log(err);
    })
    .always(function ajaxAlwaysDoThis(data){
        //一直执行
        console.log('Always');
    });
    return false;
});