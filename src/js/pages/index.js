/**
 * Created by Administrator on 2016/11/2.
 */


$(function () {
    var nav = $(".nav", "#header");
    var current = 0;
    var init = $(".m", "#navBar").eq(current);
    var block = $("#current", "#navBar");
    block.css({
        "left": init.position().left - 3
    });
    nav.hover(function () {
        },
        function () {
            block.stop().animate({
                    "left": init.position().left - 3
                },
                400);
        });
    $(".nav", "#header").slide({
        type: "menu",
        titCell: ".m",
        targetCell: ".sub",
        delayTime: 400,
        triggerTime: 0,
        returnDefault: true,
        defaultIndex: current,
        startFun: function (i, c, s, tit) {
            block.stop().animate({
                    "left": tit.eq(i).position().left - 3
                },
                300);
        }
    });
});

