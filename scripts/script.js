$(document).ready(function(){



$(window).on('scroll',function(){
	console.log(window.scrollY);
		var bluePosition = Math.round($(window).scrollTop() / $(window).height() * 100);
    $('.blue').css('transform','translateX('+(bluePosition-50)+'%)');
    var orangePosition = Math.round($(window).scrollTop() / $(window).height() * -100);
	$('.orange').css('transform','translateX('+(orangePosition-50)+'%)');

	var logo = $('.logo');

	if ((window.scrollY > 1800) && !$('.logo').hasClass('logotype')) {
	  $('.logo').addClass('logotype');
  } else if((window.scrollY <= 1800) && $('.logo').hasClass('logotype')) {
	  $('.logo').removeClass('logotype');
	}

});

// $(window).on('scroll',function () {
//     var logo = $('.logo').offset().top + $("header").outerHeight();
//
//     if ($(window).scrollTop() > 1825) {
//         //when the header reaches the top of the window change position to fixed
//         $(".logo").css("position", "relative");
//     } else {
//         //put position back to relative
//         $(".logo").css("position", "fixed");
//     }
// });

});
