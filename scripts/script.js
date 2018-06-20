$(document).ready(function(){

	$('a').each(function() {
	  $(this).on('click', function(e) {
	    e.preventDefault();
	    var scrollTo = $(this).attr('href');
	    var whitespace = scrollTo == '#s1' ? 70 : 30
	    $('html,body').animate({
	      scrollTop: $(scrollTo).offset().top - whitespace
	    }, 1000);
	  });
	});

$(window).on('scroll',function(){
	console.log(window.scrollY);
		var bluePosition = Math.round($(window).scrollTop() / $(window).height() * 100);
    $('.blue').css('transform','translateX('+(bluePosition+100)+'%)');
    var orangePosition = Math.round($(window).scrollTop() / $(window).height() * -100);
	$('.orange').css('transform','translateX('+(orangePosition+100)+'%)');
	// if ($(window).scrollTop() > 200) {
		var logoPosition = Math.round($(window).scrollTop() / $(window).height() * 100);
	    $('.logo').css('transform','translateY('+(logoPosition-100)+'%)');
	// }
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
