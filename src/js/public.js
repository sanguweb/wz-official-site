/**
 * Created by Administrator on 2016/11/7.
 * 公共页面样式
 * (页头页尾侧栏固定)
 */


if (!wzWeb) {
    var wzWeb = {};
}

$(function () {
    wzWeb.subNavigation();
    wzWeb.headerFixed();
});


//二级菜单
wzWeb.subNavigation = function () {
    //获取所有一级导航
    var navList = $('.nav', '#navBar').children('li');
    $.each(navList, function () {
        var sub = $(this).find('.sub');
        if (sub.length > 0) {
            $(this).mouseover(function () {
                $(this).find('.sub').fadeIn();
            }).mouseleave(function () {
                $(this).find('.sub').fadeOut();
            })
        }
    })
};

//固定导航
wzWeb.headerFixed = function () {
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
        }
        if (scroH < navH || scroH == 0) {
            $(header).css({"position": "relative"});
        }
    })
};









