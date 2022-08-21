$(function () {
    
    // 1.用户名
    $('#user_name').blur(function () {
        var nullStr = "用户名不能为空!";
        var reUser = /^\w{6,20}$/;
        var reStr = "用户名必须是6-20位数字字母下划线_";

        fnJudgeMethod($(this),nullStr,reUser,reStr);
    })
    // 获取焦点
    $('#user_name').focus(function () {
        $(this).next().hide();
    })

    // 同意
    $('#allow').click(function () {

        // 判断 是否有对勾 
        if ($(this).is(':checked')) {//有对勾
            $(this).next().next().hide();
        } else {//没有弹提示
            $(this).next().next().show();
            $(this).nextAll('span').html('请勾选!')
        }
        
    })

    $('form').submit(function(){
        // 逻辑与 &&
        if ("&&") {
            return;
        } else {
            // 阻止提交
            return false;
        }

    })

    // 专门用来判断 字符串输入的
    function fnJudgeMethod(oObj,nullStr,reUser,reStr) {

         // 1.判断输入是否为空
         if (oObj.val() == "") {
            oObj.next().show();
            oObj.next().html(nullStr)

            return;
        }

        // 2.是否符合正则
      
        var judge = reUser.test(oObj.val());
        if (judge) {//符合
            
          
        } else {//不符合 提示
            oObj.next().show();
            oObj.next().html(reStr);

         

        }
        
    }
})