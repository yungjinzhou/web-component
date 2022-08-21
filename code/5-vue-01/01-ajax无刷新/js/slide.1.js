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

    //4. 动画

    //5. 监听 左右两个按钮

    //6. 自动播放

    //7. 监听鼠标的事件

    //8. 优化

})

