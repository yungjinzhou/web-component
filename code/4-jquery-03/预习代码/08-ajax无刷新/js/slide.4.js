$(function () {
    
    //1.获取标签
        var $slideDiv = $(".slide");
        //图片列表
        var $picList = $(".slide_list");
        var $picLis = $(".slide_list li");
        //左右按钮
        var $leftBtn = $(".prev");
        var $rightBtn= $(".next");
        //小圆点列表
        var $pointsList = $(".points");

        //动画需要的变量
        var iNowIndex = 0;
        var iPreIndex = 0;
    
    //动画开始之前: 除了第一张之外 ;其他三张 760
    $picLis.not(":first").css({"left":760});

    //2.根据 图片的个数 添加 小圆点
    var iPicCount = $picLis.length;
    // $Li *4 === NaN 
    for (var index = 0; index < iPicCount; index++) {
         var $li = $("<li>");
         //如果是第一个 小圆点 默认选中
         if (index == 0) {
             $li.addClass("active");
         }
         $li.appendTo($pointsList);
    }

    //3.监听小圆点的点击
    $pointsList.delegate("li","click",function () {
        //3.1 修改选中的额小圆点 的颜色  红色
        $(this).addClass("active").siblings().removeClass("active");
       
        //3.2动画: 动画开始之前: 除了第一张之外 ;其他三张 760
        iNowIndex = $(this).index();
        fnAnimation();
        
    })

    //4. 动画
    function  fnAnimation() {

        //1. 角标 从小变大 1,,2,3,4
                //    2>     0
        if (iNowIndex > iPreIndex ) {

            //不管当前的图片是否在对应的位置; 统一设置 在760
            $picLis.eq(iNowIndex).css({"left":760});
            //上一张图片  动画滑动左边 left : -760
            $picLis.eq(iPreIndex).animate({"left":-760})
            //当前的图片  动画滑动左边 left:0
            $picLis.eq(iNowIndex).animate({"left":0})
            //记录 上一张图片的角标
            iPreIndex = iNowIndex;
        }

        //2. 角标 从大变小 4,3,2,1
        if (iNowIndex < iPreIndex) {
            
            //不管当前的图片是否在对应的位置; 统一设置 在-760
            $picLis.eq(iNowIndex).css({"left":-760});
            //上面的图片 动画右移  left:760
            $picLis.eq(iPreIndex).animate({"left":760});
            //当前的图片 动画右移  left:0
            $picLis.eq(iNowIndex).animate({"left":0});
            //记录上一张图片的角标
            iPreIndex = iNowIndex;
        }
        
    }

    //5. 监听 左右两个按钮

    //6. 自动播放

    //7. 监听鼠标的事件

    //8. 优化

})

