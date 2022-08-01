$(function(){
	$("li").mouseenter(function(){
		// event 처리
		$(this).addClass("myStyle");
	})
	$("li").mouseleave(function(){
		$(this).removeClass("myStyle");
	})
});