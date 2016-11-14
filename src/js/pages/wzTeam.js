/**
 * Created by Antares on 2016/11/14.
 */


/**
 * Created by Administrator on 2016/10/20.
 */


$(function () {
  wzWeb.ourTeam();
});

wzWeb.ourTeam = function () {

  // 初始化装载列表数据
  wzWeb.creatList();


  // 弹框
  // wzWeb.popUp();
};

//对应图片跟随选项卡
// wzWeb.ToggleBanner = function (Tabs, Imags, eq) {
//   $(Tabs).eq(eq).on('click', function () {
//     $(Imags).eq(eq).show().siblings('img').hide();
//   });
// };

wzWeb.creatList = function () {
  var listBox = $('#team-show').find('ul').eq(0);
  console.log(listBox);
  var $List = wzWeb.teamData;
  var addStr = '';
  $.each($List, function () {
    var smallPic = this.smallpic,
      title = this.title,
      name = this.name,
      motto = this.motto;

    addStr += wzWeb.pushTmp(smallPic, title, name, motto);
  });
  listBox.append(addStr);
};

//弹框职位详情
// wzWeb.popUp = function () {
//   var TeamPopWrap = $('#team-pop-wrap'), //详情
//     preViewBtn = $('#team-show').find('.preview'),// 弹出按钮
//     closedBtn = jobDetail.find('#close-btn'), //关闭按钮
//     num = 0;
// };

//模版
wzWeb.pushTmp = function (smallPic, title, name, motto) {
  return '<li>\
          <section class="team-pic">\
              <img src="' + smallPic + '" class="response-img">\
          </section>\
          <section class="team-title">\
            <label>' + title + '：</label>\
            <span>' + name + '</span>\
          </section>\
          <p class="team-speak">Ta在说：' + motto + '</p>\
          <button type="button" class="preview">查看详情</button>\
        </li>'
};

//职位要求详情数据
wzWeb.teamData = {
  user0: {
    smallpic: '../../img/team/small-1.png',
    bigPic: '../../img/big-1.png',
    title: "销售总监0",
    name: "某某某0",
    info: "BBB",
    motto: "00000000"
  },
  user1: {
    smallpic: '../../img/team/small-1.png',
    bigPic: '../../img/big-1.png',
    title: "销售总监1",
    name: "某某某1",
    info: "BBB1",
    motto: "11111111111111111111111111111111111111111111111111111"
  },
  user2: {
    smallpic: '../../img/team/small-1.png',
    pic: '../../img/big-1.png',
    title: "销售总监2",
    name: "某某某",
    info: "AAA2",
    motto: "222222"
  },
  user3: {
    smallpic: '../../img/team/small-1.png',
    bigPic: '../../img/big-1.png',
    title: "销售总监33",
    name: "某某某33",
    info: "CCC",
    motto: "3333"
  },
  user4: {
    smallpic: '../../img/team/small-1.png',
    pic: '../../img/big-1.png',
    title: "销售总监44",
    name: "某某某4",
    info: "AAA",
    motto: "4444"
  },
  user5: {
    smallpic: '../../img/team/small-1.png',
    bigPic: '../../img/big-1.png',
    title: "销售总监55",
    name: "某某某555",
    info: "BBB",
    motto: "5555"
  },
  user6: {
    smallpic: '../../img/team/small-1.png',
    pic: '../../img/big-1.png',
    title: "销售总监666",
    name: "某某某666",
    info: "AAA",
    motto: "666"
  },
  user7: {
    smallpic: '../../img/team/small-1.png',
    bigPic: '../../img/big-1.png',
    title: "销售总监777",
    name: "某某某777",
    info: "BBB",
    motto: "7777"
  }
};


