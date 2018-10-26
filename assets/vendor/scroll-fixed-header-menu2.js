$(document).ready(function(){
    $.fn.clickMenuHumberger = function(options) {
        var eThis = this;
        var setting = {
            menuAnimate: true,
            width: 89,
            obj: [],
            objHide: [],
            asideWidth:'',
            duration: 300,
            navbarFixed: {
                headerNav: '',
                content: ''
            }
        };
        options = $.extend(setting, options);
        return this.each(function() {
            var eachThis = $(this);
            var navH = $(options.navFixed).outerHeight();
            $(window).resize(function(){
                var windowWidth = $(window).width();
                myClickHamburger(windowWidth);
            });
            var windowWidth = $(window).width();
            myClickHamburger(windowWidth);
            function myClickHamburger(windowWidth){
                var widthN = (windowWidth * options.width) / 100;
                eachThis.parents('body').prepend('<div id="contentLayer"></div>'); //for click hide
                $('#contentLayer').css({ 'width': '100%', 'height': '100%', 'position': 'fixed', 'top': 0, 'z-index': 1000, 'display': 'none', 'box-shadow': '-5px 0 10px rgba(0,0,0,0.4)'});
                var navH = $(options.navbarFixed.headerNav).outerHeight();
                $(options.navbarFixed.content).css({ 'margin-top': navH + 'px' });
                eachThis.on('click', function() {
                    for (var i = 0; i < options.objHide.length; i++) {
                        $(options.objHide[i]).show();
                    }
                    for (var i = 0; i < options.obj.length; i++) {
                        $(options.obj[i]).css({
                            'position': 'relative'
                        });
                    }
                    if (options.menuAnimate === true) {//click hamberger menu and make menu as animation
                        var count = 1;
                        $('#header nav .menu-side-bar > li > a').each(function(){
                            $(this).addClass('animated slideInLeft');
                            var xxx = count/100;
                            var reCount = xxx+'s';
                            $(this).css({
                                'animation-duration': '0.001',
                                'animation-delay':reCount
                            });
                            count+=4;
                        });
                    }
                    $(this).addClass('change-hamburger-menu');
                    $('#contentLayer').stop().animate({ 'right': '-' + widthN + 'px' },options.duration);
                    $(options.asideWidth).css({'width':widthN+'px'});
                    for (var i = 0; i < options.obj.length; i++) {
                        $(options.obj[i]).stop().animate({ 'right': '-' + widthN + 'px' }, options.duration, function() {
                            $('#contentLayer').show();
                            $('#contentLayer').stop().animate({ 'right': '-' + widthN + 'px' },options.duration);
                        });
                    }
                    $('body').css({'overflow-y':'hidden'});
                });
               
                $('#contentLayer').on('click', function() {
                    eThis.removeClass('change-hamburger-menu');
                    $(options.asideWidth).css({'width':0+'px'});
                    $('#contentLayer').hide();
                    for (var i = 0; i < options.obj.length; i++) {
                        $(options.obj[i]).stop().animate({ 'right': 0 }, options.duration, function() {
                            $('#contentLayer').stop().animate({ 'right': 0 });
                            for (var i = 0; i < options.objHide.length; i++) {
                                $(options.objHide[i]).hide();
                            }
                        });
                    }
                    $('body').css({'overflow-y':'scroll'});
                    if (options.menuAnimate === true) {//click hamberger menu and make menu as animation
                         $('#header nav .menu-side-bar > li > a').removeClass('animated fadeInLeft');
                    }
                });
            }
            
        });
    };


    $('#hamburger-menu').clickMenuHumberger({
        obj:['.container-fluid-menu .box-tool-top','#content','#footer','.banner',],
        objHide:['#header .nav-menu-sidebar-tablate'],
        width: 50,
        duration:300,
        navbarFixed:{
            headerNav:'.container-cus2',
            content:'.container-content'
        },
        asideWidth:'#header .container-fluid-menu ul.menu'
    });


    function styleScrollMenu(scrollTop){
			var navTop;
			if ($('#header').find('div').hasClass('nav-top')) {
				navTop = $('#header .nav-top').outerHeight()-30;
			}else {
				navTop = 0;
			}
			if (scrollTop > navTop) {
				$('#header .container-fluid-menu').addClass('shrink-container-fluid-menu');
				$('#header .container-fluid-menu2').addClass('shrink-container-fluid-menu2');
				$('#header .nav-bottom .box-logo').addClass('shrink-box-logo');
				$('#header .nav-bottom .logo').addClass('shrink-logo');
				$('#header .nav-bottom .menu').addClass('shrink-menu');
				$('#header .nav-bottom .media').addClass('shrink-media');
				$('#header .nav-bottom').prepend($('.nav-top ul.media'));
				
			}else {
				$('#header .container-fluid-menu').removeClass('shrink-container-fluid-menu');
				$('#header .container-fluid-menu2').removeClass('shrink-container-fluid-menu2');
				$('#header .nav-bottom .box-logo').removeClass('shrink-box-logo');
				$('#header .nav-bottom .logo').removeClass('shrink-logo');
				$('#header .nav-bottom .menu').removeClass('shrink-menu');
				$('#header .nav-bottom .media').removeClass('shrink-media');
				
				if ($(window).width() > 1024) {
					$('#header .nav-top').prepend($('.nav-bottom ul.media'));
				}
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

		function appendMedia(windowWidth){
	        if (windowWidth <= 1024) {
	            $('#header .nav-bottom').prepend($('.nav-top ul.media'));
	        }else {
	        	$('#header .nav-top').prepend($('.nav-bottom ul.media'));
	        }
	    }
	    appendMedia($(window).width());
	    $(window).resize(function(){
	         appendMedia($(window).width());
	    });

});