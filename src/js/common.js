/**
 * Created by Administrator on 2016/11/2.
 * 通用方法库
 */




//选项卡
wzWeb.tabSwich = function (parent) {
  var tabControl = $('.tab-control', parent).find('li');
  var tabContent = $('.tab-target', parent);

  $.each(tabContent, function (i) {
    $(this).attr('data-target', i);
  });
  $.each(tabControl, function (i) {
    $(this).attr('data-index', i);
    var thisIndex = i;
    $(this).click(function () {
      $(this).addClass('active').siblings().removeClass('active');
      $.each(tabContent, function () {
        var thatIndex = $(this).attr('data-target');
        if (thisIndex == thatIndex) {
          $(this).show().siblings().hide();
        }
      });
    })
  });
};


//遮罩说明
wzWeb.imgLayer = function (box) {
  var arrLi = $(box).find('li');
  $.each(arrLi, function () {
    $(this).mouseover(function () {
      var mask = $(this).find('.mask');
      var img = $(this).find('.show-img');
      mask.show();
    }).mouseleave(function () {
      var mask = $(this).find('.mask');
      mask.hide();
    })
  })
};

//获取JSON长度
wzWeb.getJsonObjLength = function (jsonObj) {
  var Length = 0;
  for (var item in jsonObj) {
    Length++;
  }
  return Length;
};
