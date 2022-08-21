$(function () {
    
    // 1.用户名
    $('#user_name').blur(function () {
        
        // 1.判断输入是否为空
        if ($(this).val() == "") {
            $(this).next().show();
            $(this).next().html('用户名不能为空!')

            return;
        }

        // 2.是否符合正则
        var reUser = /^\w{6,20}$/;
        var judge = reUser.test($(this).val());
        if (judge) {//符合
            
        } else {//不符合 提示
            $(this).next().show();
            $(this).next().html('用户名要求6-20位字母数字下划线_')

        }


    })
    // 获取焦点
    $('#user_name').focus(function () {
        $(this).next().hide();
    })
})