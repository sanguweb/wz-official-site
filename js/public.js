/**
 * Created by Administrator on 2016/11/7.
 * 公共页面样式
 * (页头页尾侧栏固定)
 */

if (!wzWeb) {
    var wzWeb = {};
}

$(function() {
    wzWeb.init();
});


wzWeb.init = function() {
        wzWeb.subNavigation();
        wzWeb.headerFixed();
        wzWeb.sideBar();
        wzWeb.respondMenu();
    }
    //二级菜单
wzWeb.subNavigation = function() {
    //获取所有一级导航
    var navList = $('.nav', '#navBar').find('li');
    $.each(navList, function() {
        var sub = $(this).find('.sub');
        if (sub.length > 0) {
            $(this).hover(function() {
                sub.fadeIn(300);
            }, function() {
                sub.fadeOut(300);
            });
        }
    });
};


wzWeb.respondMenu = function() {
    $('.nav-toggle').click(function() {
        $('body').toggleClass('nav-open');
    });

    $('.nav-open').bind("touchmove", function(e) {
        e.preventDefault();
    });
}

//固定导航
wzWeb.headerFixed = function() {
    //获取要定位元素距离浏览器顶部的距离;
    var header = $("#header");
    var navH = header.offset().top;
    var blurBg = header.find('.blurBg');
    //滚动条事件
    $(window).scroll(function() {
        //获取滚动条的滑动距离
        var scroH = $(this).scrollTop();
        //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
        if (scroH >= navH / 2) {
            header.css({ background: "transparent" });
            blurBg.addClass('blurBackground').show()
        }
        if (scroH < navH || scroH == 0) {
            header.css({ background: "#fff" });
            blurBg.removeClass('blurBackground').hide();
        }
    })
};


wzWeb.sideBar = function() {
    var sideBar = $("#sideBar");
    var sideItem = sideBar.find("li");

    var backTop = sideBar.find(".icon-backtop");
    var backTopBtn = backTop.parent('li');
    var qrCodeBtn = sideItem.eq(2); //微信
    var $qrCodePic = qrCodeBtn.find(".qrImg");

    $.each(sideItem, function() {
        var $oSpan = $(this).find("span");
        var timer = null;
        if ($oSpan.length > 0) {
            $(this).hover(function() {
                clearTimeout(timer);
                timer = setTimeout(function() {
                    $oSpan.animate({ left: "-110px" }, 300).show();
                }, 400);
            }, function() {
                clearTimeout(timer);
                $oSpan.animate({ left: "50px" }, 300).show();
            })
        }
    });

    qrCodeBtn.hover(
        function() {
            $qrCodePic.animate({ right: "50px" }, 400).show();
        },
        function() {
            $qrCodePic.animate({ right: "-160px" }, 400).hide();
        }
    );

    //返回顶部
    $(window).scroll(
        function() {
            var sTop = $(this).scrollTop();
            if (sTop > 760) {
                $(backTopBtn).fadeIn();
            } else {
                $(backTopBtn).fadeOut();
            }
        }
    )
    $(backTopBtn).click(function() {
        if (scroll === "off") {
            return;
        }
        $("html,body").animate({ scrollTop: 0 }, 300);
    });
};