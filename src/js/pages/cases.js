/**
 * Created by Antares on 2016/11/11.
 */

$(function () {

  // wzWeb.checkCase();
  // wzWeb.scrollPage();
});

//
// wzWeb.scrollPage = function () {
//   var ctrol = $('li', '#menuBar');
//   $(ctrol).eq(0).addClass('current');
//   $.each($(ctrol), function () {
//     $(this).click(function () {
//       $(this).addClass('current').siblings().removeClass('current');
//       var id = '#' + 'floor' + ($(this).index() + 1);
//       console.log(id);
//       $("html,body").animate({scrollTop: $(id).offset().top - 150}, 1000);
//     })
//   })
// };
//
//
// wzWeb.checkCase = function () {
//   var target = $('#navBar').find('.double').find('.sub').find('li');
//   var ctrol = $('li', '#menuBar');
//   $.each(target, function () {
//     $(this).on('click', function () {
//       if (ctrol.length > 0) {
//         var thisIndex = $(this).index();
//         $.each(ctrol, function () {
//           var that = this;
//           var thatIndex = $(this).index();
//           if (thisIndex == thatIndex) {
//             $(that).trigger('click');
//           }
//         })
//       }
//     });
//   })
// };
