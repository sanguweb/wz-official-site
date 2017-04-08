/**
 * Created by Antares on 2016/11/11.
 */

$(function () {
    wzWeb.scrollPage();
    $(window).scroll(scrolls);
    // scrolls();
});

wzWeb.scrollPage = function () {
    var ctrol = $('li', '#menuBar');
    var pageRoot = $("body,html");
    $.each($(ctrol), function () {
        $(this).click(function () {
            $(pageRoot).stop(true);//清除元素的所有动画
            $(this).addClass('current').siblings().removeClass('current');
            var id = '#' + 'floor' + ($(this).index() + 1);
            $(pageRoot).animate({scrollTop: $(id).offset().top}, 1000);
            return false;
        })
    })
};

//监听页面滚动与左侧菜单同步
function scrolls() {
    var menuBar = $('li', '#menuBar'),
        sTop = $(window).scrollTop(),
        f1 = $('#floor1').offset().top,
        f2 = $('#floor2').offset().top,
        f3 = $('#floor3').offset().top,
        f4 = $('#floor4').offset().top,
        f5 = $('#floor5').offset().top,
        f6 = $('#floor6').offset().top,
        f7 = $('#floor7').offset().top,
        f8 = $('#floor8').offset().top,
        f9 = $('#floor9').offset().top,
        f10 = $('#floor10').offset().top;

    listener(f1, 0);
    listener(f2, 1);
    listener(f3, 2);
    listener(f4, 3);
    listener(f5, 4);
    listener(f6, 5);
    listener(f7, 6);
    listener(f8, 7);
    listener(f9, 8);
    listener(f10, 9);

    function listener(ele, index) {
        if (sTop >= ele - 400)
            menuBar.eq(index).addClass('current').siblings().removeClass('current');
    }
}

