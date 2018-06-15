$(document).ready(function(){

var $orange = $('.orange'),
$blue = $('.blue'),
$logo = $('.logo')

$(window).on('scroll', function(){
  console.log(window.scrollY);
  if(window.scrollY > 100) {
  	if(!$orange.hasClass('changePosition')) {
  		$orange.show();
    	setTimeout(function(){$orange.toggleClass('changePosition');},0);
  	}
  	if(!$blue.hasClass('changePosition')) {
  		$blue.show();
 			setTimeout(function(){$blue.toggleClass('changePosition');},0);
  	}
  } else if(window.scrollY <= 100) {
  	if($orange.hasClass('changePosition')) {
  		$orange.hide();
  		$orange.removeClass('changePosition');
  	}
  	if($blue.hasClass('changePosition')) {
  		$blue.hide();
  		$blue.removeClass('changePosition');
  	}
  }
  if ((window.scrollY > 400)) {
	  $logo.addClass('logotype');
	} else if((window.scrollY <= 400)) {
	  $logo.removeClass('logotype')
	}
});
});
