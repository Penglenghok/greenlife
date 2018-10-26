// scroll fixed navbar

$(document).ready(function(){

	// scroll fix menu
 function styleScrollMenu(scrollTop){
 	var navTop = $('.box-navbar-top').outerHeight();//height navtop
    if (scrollTop > 0) {
    	$('.container-fluid-fixed').addClass('shrink-container-fluid-fixed');
      	$('#header .container-fluid-fixed').addClass('shrink-box-navbar-bottom');
      	$('#header .main-logo').addClass('shrink-main-logo');
      	$('#header .navbar-bottom').addClass('shrink-navbar-bottom');
    }else {
    	$('.container-fluid-fixed').removeClass('shrink-container-fluid-fixed');
     	$('#header .container-fluid-fixed').removeClass('shrink-box-navbar-bottom');
     	$('#header .main-logo').removeClass('shrink-main-logo');
     	$('#header .navbar-bottom').removeClass('shrink-navbar-bottom');
    }
  }

  if ($(window).scrollTop()) {
    var scrollTop = $(window).scrollTop();
    styleScrollMenu(scrollTop);
  }
  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    styleScrollMenu(scrollTop);
  });






$('.partner').slick({
  infinite: true,
  slidesToShow:8,
  slidesToScroll:8,
dots:true,
dotsClass:'dots-partner',
nextArrow:'',
prevArrow:'',

});

  $('.partner li button').text('');


});


