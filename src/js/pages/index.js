/**
 * Created by Administrator on 2016/11/2.
 */


$(function () {
    wzWeb.tabSwich($('#news'));  //选项卡
    wzWeb.imgLayer($('.project-list', '#project'));//案例内容遮罩
    wzWeb.imgReload();

    $('#slider').unslider({//首屏轮播
        speed: 500,
        dots: true,
        fluid: true,
        keys:true,
        fluid:true
    });

    var unslider04 = $('#logos').unslider({
            dots: false
        }),
        data04 = unslider04.data('unslider');

    $('.arrow').click(function () {
        var fn = this.className.split(' ')[1];
        data04[fn]();
    });
});


wzWeb.imgReload = function () {
    var imgHeight = 0;
    var bWidth = $("body").width();
    var slider = $('ul', '#slider').children('li');
    $(slider).each(function () {
        $(this).css({width: bWidth + "px"});
    });
    $(".sliderimg").each(function () {
        $(this).css({width: bWidth + "px"});
        imgHeight = $(this).height();
    });
};

//响应窗口尺寸
$(window).resize(function () {
    wzWeb.imgReload();
});


