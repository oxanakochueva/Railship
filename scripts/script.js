$(document).ready(function(){

var $orange = $('.orange'),
$blue = $('.blue'),
$logo = $('.logo')

$(window).on('scroll', function(){

  console.log(window.scrollY);

  if ((window.scrollY > 20) && !$orange.hasClass('changePosition')) {
    $orange.toggleClass('changePosition');
  } else if((window.scrollY <= 20) && $orange.hasClass('changePosition')) {
  $orange.removeClass('changePosition');
}
if ((window.scrollY > 20) && !$blue.hasClass('changePosition')) {
  $blue.toggleClass('changePosition');
} else if((window.scrollY <= 20) && $blue.hasClass('changePosition')) {
$blue.removeClass('changePosition');
}
if ((window.scrollY > 400)) {
  $logo.addClass('logotype');
} else if((window.scrollY <= 400)) {
  $logo.removeClass('logotype')
}
});
});
