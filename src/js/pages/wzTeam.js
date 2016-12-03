/**
 * Created by Antares on 2016/11/14.
 */

$(function () {
  wzWeb.ourTeam();
});

wzWeb.ourTeam = function () {
  wzWeb.picWall();
  var unslider04 = $('#team-pic-wall').unslider({
      autoplay: false,
      delay: 300000
    }),
    data04 = unslider04.data('unslider');
  
  $('.arrow').click(function () {
    var fn = this.className.split(' ')[1];
    data04[fn]();
  });
};

//照片墙
wzWeb.picWall = function () {
  var picWall = document.querySelector('#team-pic-wall');
  var teamPic = picWall.querySelectorAll('.img');
  var teamName = $(teamPic).siblings('.text');
  
  $.each(teamPic, function () {
    var thisKey = $(this).attr('user-pic');
    $(this).hover(function () {
      if (thisKey.length > 0) {
        var key = thisKey;
      }
      $.each(teamName, function () {
        var thatKey = $(this).attr('user-name');
        if (key == thatKey && thatKey) {
          $(this).css({'opacity': '1'});
        }
      });
    }, function () {
      teamName.css({'opacity': '0'});
    })
  });
};

