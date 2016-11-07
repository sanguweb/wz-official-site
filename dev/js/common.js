/**
 * Created by Administrator on 2016/11/2.
 */
$(function () {
    var ind = 0;
    var nav = $(".nav", "#navBar");
    var init = $(".nav .m").eq(ind);
    var block = $(".nav .block");
    block.css({
        "left": init.position().left - 3
    });
    nav.hover(function () {
        },
        function () {
            block.stop().animate({
                    "left": init.position().left - 3
                },
                300);
        });
    $(nav).slide({
        type: "menu",
        titCell: ".m",
        targetCell: ".sub",
        delayTime: 300,
        triggerTime: 0,
        returnDefault: true,
        defaultIndex: ind,
        startFun: function (i, c, s, tit) {
            block.stop().animate({
                    "left": tit.eq(i).position().left - 3
                },
                300);
        }
    });
});


// 菜单固定
$(function () {
    //获取要定位元素距离浏览器顶部的距离;
    var header = document.querySelector('#header');
    var navH = $(header).offset().top;
    //滚动条事件
    $(window).scroll(function () {
        //获取滚动条的滑动距离
        var scroH = $(this).scrollTop();
        //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
        if (scroH >= navH) {
            $(header).css({"position": "fixed"});
        } else if (scroH < navH) {
            $(header).css({"position": "relative"});
        }
    })
});