$(function () {
    
    // 1.用户名
    $('#user_name').blur(function () {
        
        // 1.1 判断用户 是否有输入的内容
        var sValue = $(this).val()
        if (sValue == '') {
            $(this).next().show();
            $(this).next().html('用户名不能输入为空!');
            return;
        }
        // 1.2 正则判断 是否符合条件
        var reUser = /^\w{6,20}$/;
        var judge = reUser.test(sValue);
        if (!judge) {//不符合条件
            $(this).next().show();
            $(this).next().html('用户名是6到20个英文或数字，还可包含“_”');
        }

    })

    $("#user_name").focus(function () {
        //隐藏提示的标签
        $(this).next().hide();
    })

    // 2.同意的按钮

    //3. 注册按钮  且 && 

})