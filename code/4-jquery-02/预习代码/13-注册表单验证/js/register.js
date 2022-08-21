$(function () {

        //判断是否提交的标识
        var bUser = false;
        var bPwd = false;
        var bCpwd = false;
        var bEmail = false;
        var bAllow = true;
    
    //1.用户名的验证
    $("#user_name").blur(function () {
        var sNullStr = "用户名不能为空";
        var regJudge = /^\w{6,20}$/;
        var regStr = "用户名是6到20个英文或数字，还可包含“_”";
      bUser = fnJudgeStr($(this),sNullStr,regJudge,regStr);
    })
    $("#user_name").focus(function () {
        $(this).next().hide();
    })

    //2.密码验证
    $("#pwd").blur(function () {
        var sNullStr = "密码不能为空";
        var regJudge = /^[\w!@#$%^&*]{6,20}$/;
        var regStr = "密码是6到20位字母、数字，还可包含@!#$%^&*字";
      bPwd =  fnJudgeStr($(this),sNullStr,regJudge,regStr);
    })
    $("#pwd").focus(function () {
        $(this).next().hide();
    })


    //3.密码是否一致
    $("#cpwd").blur(function () {
        var sprePwd = $("#pwd").val();
        if ($(this).val() == sprePwd) {
            bCpwd = true;
        }else{
            $(this).next().show();
            $(this).next().html("两次密码不一致");

            bCpwd = false;
        }
    })
    $("#cpwd").focus(function () {
        $(this).next().hide();
    })


    //4.邮箱
    $("#email").blur(function () {
        var sNullStr = "邮箱输入不能为空";
        var regJudge = /^[a-z0-9][\w\.\-]*@[a-z0-9\-]+(\.[a-z]{2,5}){1,2}$/i;
        var regStr = "邮箱格式不正确";
      bEmail = fnJudgeStr($(this),sNullStr,regJudge,regStr);
    })
    $("#email").focus(function () {
        $(this).next().hide();
    })


    //5.同意 的协议
    $("#allow").click(function () {
        
        if ($(this).is(":checked")) {
            $(this).nextAll("span").hide();
            bAllow = true;
        }else{
            $(this).nextAll("span").show();
            $(this).nextAll("span").html("请勾选同意!");
            bAllow = false;
        }

       
    });

    //6. 提交数据
    $("form").submit(function () {
        
        if (bUser == true && bPwd == true && bCpwd == true && bEmail == true && bAllow == true) {
            
            return true;

        } else {
           
            return false;
        }

    })






 function fnJudgeStr(obj,sNullStr,regJudge,regStr) {
        
        //1.判空
        if (obj.val() == "") {
            obj.next().show();
            obj.next().html(sNullStr);
            return;
        }

        //2.正则
        if (!(regJudge.test(obj.val()))) {//不成功
            obj.next().show();
            obj.next().html(regStr);
        }else{//成功

            return true;
        }
    }
   














    // $("#user_name").blur(function () {
        
    //     //1.判空
    //     var sVal = $(this).val();
    //     if (sVal == "") {
    //         $(this).next().show();
    //         $(this).next().html("用户名不能为空");
    //         return;
    //     }

    //     //2.正则
    //     var regUser = /^\w{6,20}$/;
    //     if (!(regUser.test(sVal))) {
    //         $(this).next().show();
    //         $(this).next().html("用户名是6到20个英文或数字，还可包含“_”");
    //     }
    // })
    // $("#user_name").focus(function () {
    //     $(this).next().hide();
    // })
})