$(function(){var t=0,e=$(".nav","#navBar"),n=$(".nav .m").eq(t),i=$(".nav .block");i.css({left:n.position().left-3}),e.hover(function(){},function(){i.stop().animate({left:n.position().left-3},300)}),$(e).slide({type:"menu",titCell:".m",targetCell:".sub",delayTime:300,triggerTime:0,returnDefault:!0,defaultIndex:t,startFun:function(t,e,n,a){i.stop().animate({left:a.eq(t).position().left-3},300)}})});