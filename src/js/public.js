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
  wzWeb.checkCase();
  wzWeb.scrollPage();
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
      $(header).css({"position": "fixed", "box-shadow": "0 3px 3px rgba(63,63,63,.24)"});
    }
    if (scroH < navH || scroH == 0) {
      $(header).css({"position": "relative", "box-shadow": "none"});
    }
  })
};


wzWeb.scrollPage = function () {
  var ctrol = $('li', '#menuBar');
  $.each($(ctrol), function () {
    $(this).click(function () {
      $(this).addClass('current').siblings().removeClass('current');
      var id = '#' + 'floor' + ($(this).index() + 1);
      console.log(id);
      $("html,body").animate({scrollTop: $(id).offset().top - 150}, 1000);
      return false;
    })
  })
};


wzWeb.checkCase = function () {
  var target = $('#navBar').find('.double').find('.sub').find('li');
  var ctrol = $('li', '#menuBar');
  $.each(target, function () {
    $(this).click(function () {
      var mao = $("#" + wzWeb.getParam("floor4")); //获得锚点
      console.log(mao);
      if (mao.length > 0) {//判断对象是否存在
        var pos = mao.offset().top;
        var poshigh = mao.height();
        $("html,body").animate({ scrollTop: pos-poshigh-150 }, 3000);
      }
      // if (ctrol.length > 0) {
      //   var thisIndex = $(this).index();
      //   $.each(ctrol, function () {
      //     var that = this;
      //     var thatIndex = $(this).index();
      //     if (thisIndex == thatIndex) {
      //       $(that).trigger('click');
      //       wzWeb.scrollPage();
      //       return false;
      //     }
      //   })
      // }
      // return false;
    });
  });
};





wzWeb.getParam=function(pname) {
  var params = location.search.substr(1); //  获取参数 平且去掉？
  var ArrParam = params.split('#');
  console.log(params);

  if (ArrParam.length == 1) {
    //只有一个参数的情况
    return params.split('=')[1];
  }
  else {
    //多个参数参数的情况
    for (var i = 0; i < ArrParam.length; i++) {
      if (ArrParam[i].split('=')[0] == pname) {
        return ArrParam[i].split('=')[1];
      }
    }
  }
}





