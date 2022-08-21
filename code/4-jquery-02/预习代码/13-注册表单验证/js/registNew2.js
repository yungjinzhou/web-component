$(function () {

    // 判断
    var bUser = false;
    var bAllow = true;
    
    // 1.用户名
    $('#user_name').blur(function () {
      bUser = fnJudgeMethod($(this),'用户名不能为空',/^\w{6,20}$/,'用户名要求 6-20个字符')
    })
    $("#user_name").focus(function () {
        //隐藏提示的标签
        $(this).next().hide();
    })


    // 2.同意的按钮
    $("#allow").click(function () {
        
        // 判断 对勾 是否勾选
        if($(this).is(':checked')){

            // 如果已经勾选  隐藏提示文字
            $(this).nextAll('span').hide();

            bAllow = true;

        }else{//没有勾选 弹出提示文字
            $(this).next().next().show();
            $(this).next().next().html('请勾选!')

            bAllow = false;

        }
    })

    //3. 注册按钮  且 && 
    $('form').submit(function () {
        if (bUser == true && bAllow == true) {//满足提交的条件

            // return;
        }else{

            return false;
        }

    })




    // 封装的方法
    function fnJudgeMethod(Obj,nullStr,reJudge,reStr) {
        // 1.1 判断用户 是否有输入的内容
        var sValue = Obj.val()
        if (sValue == '') {
            Obj.next().show();
            Obj.next().html(nullStr);
            return;
        }
        // 1.2 正则判断 是否符合条件
        var judge = reJudge.test(sValue);
        if (!judge) {//不符合条件
            Obj.next().show();
            Obj.next().html(reStr);

            return false;
        }

        return true;
        
    }

})