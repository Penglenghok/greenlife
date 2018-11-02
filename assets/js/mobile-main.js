$(document).ready(function() {
     // one page scroll
    // $(document).ready(function() {
    //     $('nav .menu-side-bar').stickynav();
    // });
    $('.btn-camera a').on('mouseover',function(){
        $(this).parents('.items').find('.box-title').css({'color':'#F29022'});
    });
    $('.btn-camera a').on('mouseleave',function(){
        $('.items').find('.box-title').css({'color':'black'});
    });

    $.fn.clickMenuHumberger = function(options) {
        var eThis = this;
        var setting = {
            menuAnimate: true,
            width: 89,
            obj: [],
            objHide: [],
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
            var windowWidth = $(window).width();
            var widthN = (windowWidth * options.width) / 100;
            eachThis.parents('body').prepend('<div id="contentLayer"></div>'); //for click hide
            $('#contentLayer').css({ 'width': '100%', 'height': '100%', 'position': 'fixed', 'top': 0, 'z-index': 2, 'display': 'none', 'box-shadow': '-5px 0 10px rgba(0,0,0,0.4)'});
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
                    $('#header nav .menu-side-bar>li>a').each(function(){
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
                $('#contentLayer').css({ 'right': '-' + widthN + 'px' });
                for (var i = 0; i < options.obj.length; i++) {
                    $(options.obj[i]).stop().animate({ 'right': '-' + widthN + 'px' }, options.duration, function() {
                        $('#contentLayer').show();
                    });
                }
                $('body').css({'overflow-y':'hidden'});
            });
           
            $('#contentLayer').on('click', function() {
                eThis.removeClass('change-hamburger-menu');
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
        });
    };
    $('#hamburger-menu').clickMenuHumberger({
        obj:['.container-cus','.container-content','.container-footer'],
        objHide:['#header nav .menu-side-bar'],
        width: 89,
        duration:300,
        navbarFixed:{
            headerNav:'.container-cus2',
            content:'.container-content'
        }
    });

    function fullHeightScreen() {
        var amountHeaderH = '';
        var windowHight = $(window).height();
        var windowWidth = $(window).width();
        var dataHeaderH = $("[data-headerh]").outerHeight();
        if (typeof dataHeaderH !== 'undefined') {
            amountHeaderH = dataHeaderH;
        } else {
            amountHeaderH = '';
        }
        $("[data-fullscreen]").each(function() {
            var imgWidth = $(this).find('img').width();
            $("[data-fullscreen]").css({ 'height': windowHight - amountHeaderH + 'px', 'width': '100%', 'overflow': 'hidden' });
        });
    }
    $(window).resize(function() {
        fullHeightScreen();
    });
    fullHeightScreen();


    $(".banner").slick({
          infinite: true,
  slidesToShow:1,
  slidesToScroll:1,
dots:true,
nextArrow:'',
prevArrow:'',
  autoplay: true,
  autoplaySpeed: 3000,
    });



    $('[title="Hosted on free web hosting 000webhost.com. Host your own website for FREE."]').remove();

   
});