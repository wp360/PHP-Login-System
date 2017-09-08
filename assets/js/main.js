$(document).on("submit", "form.js-register", function(event) {
	event.preventDefault();

    var _form = $(this);
    var _error = $(".js-error",_form);

	var data = {
		email: $("input[type='email']", _form).val(),
		password: $("input[type='password']", _form).val()
    };

    if(data.email.length < 12){
        _error.text("请输入正确的邮箱地址").show();
        return false;
    }else if(data.password.length < 6){
        _error.text("请输入不少于6个字符的正确密码").show();
        return false;
    }
    //we can start the ajax process
    _error.hide();

    console.log(data);
    return false;
});