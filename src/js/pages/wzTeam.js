/**
 * Created by Antares on 2016/11/14.
 */



$(function () {
  wzWeb.ourTeam();
});

wzWeb.ourTeam = function () {
  // 初始化装载列表数据
  wzWeb.creatList();
  // 弹框
  wzWeb.popUp();
};


//初始数据列表填充
wzWeb.creatList = function () {
  var listBox = $('#team-show').find('ul').eq(0);
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
wzWeb.popUp = function () {
  var TeamPopWrap = $('#team-pop-wrap'), //弹窗盒子
    preViewBtn = $('#team-show').find('.preview'),// 弹出按钮组
    closedBtn = TeamPopWrap.find('#close-btn'), //关闭按钮
    peopelPic = TeamPopWrap.find('.bigPic'), //照片
    peopleTitle = TeamPopWrap.find('.people-title').find('label').eq(0),//职位
    peopleName = TeamPopWrap.find('.people-title').find('span').eq(0),  //姓名
    peopleIntroduce = TeamPopWrap.find('.people-introduce'),//概述
    peopleSpeak = TeamPopWrap.find('.people-speak').find('p').eq(0),
    peopleControl = TeamPopWrap.find('.pop-control'),//控制
    prevBtn = peopleControl.find('.prev'), //前一个
    nextBtn = peopleControl.find('.next'),
    dataLen = wzWeb.getJsonObjLength(wzWeb.teamData),
    mask = $('#mask'),
    num = 0;//下一个

  var init = function () {
    //数据填充
    var teamData = eval("wzWeb.teamData.user" + num);//数据
    peopelPic.attr('src', teamData.bigPic);
    peopleTitle.text(teamData.title);
    peopleName.text(teamData.name);
    peopleIntroduce.text(teamData.info);
    peopleSpeak.text(teamData.motto);
  };

  $.each($(preViewBtn), function (i) {
    $(this).click(function () {
      mask.fadeIn(200);
      TeamPopWrap.fadeIn(200).addClass('open');
      num = i;
      init();
    })
  });

  $(prevBtn).click(function () {
    console.log(num);
    if (num > 0) {
      num--;
    } else if (num == 0) {
      num = dataLen - 1;
    }
    init();
  });

  $(nextBtn).click(function () {
    num++;
    if (num == dataLen) {
      num = 0;
    }
    init();
  });

  closedBtn.on('click', function () {
    mask.fadeOut(200);
    TeamPopWrap.removeClass('open').fadeOut(200);
  })

};

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
  "user0": {
    smallpic: '../../img/team/small-1.png',
    bigPic: '../../img/team/big-1.png',
    title: "销售总监0",
    name: "某某某0",
    info: "BBB",
    motto: "00000000"
  },
  user1: {
    smallpic: '../../img/team/small-1.png',
    bigPic: '../../img/team/big-1.png',
    title: "销售总监1",
    name: "某某某1",
    info: "BBB1",
    motto: "11111",
  },
  user2: {
    smallpic: '../../img/team/small-1.png',
    bigPic: '../../img/team/big-1.png',
    pic: '../../img/team/big-1.png',
    title: "销售总监2",
    name: "某某某",
    info: "AAA2",
    motto: "222222"
  },
  user3: {
    smallpic: '../../img/team/small-1.png',
    bigPic: '../../img/team/big-1.png',
    title: "销售总监33",
    name: "某某某33",
    info: "CCC",
    motto: "3333"
  },
  user4: {
    smallpic: '../../img/team/small-1.png',
    pic: '../../img/team/big-1.png',
    title: "销售总监44",
    name: "某某某4",
    info: "AAA",
    motto: "4444"
  },
  user5: {
    smallpic: '../../img/team/small-1.png',
    bigPic: '../../img/team/big-1.png',
    title: "销售总监55",
    name: "某某某555",
    info: "BBB",
    motto: "5555"
  },
  user6: {
    smallpic: '../../img/team/small-1.png',
    pic: '../../img/team/big-1.png',
    title: "销售总监666",
    name: "某某某666",
    info: "AAA",
    motto: "666"
  },
  user7: {
    smallpic: '../../img/team/small-1.png',
    bigPic: '../../img/team/big-1.png',
    title: "销售总监777",
    name: "某某某777",
    info: "BBB",
    motto: "7777"
  }
};

