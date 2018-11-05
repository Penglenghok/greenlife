  $(document).ready(function(){
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
                if (imgWidth > windowWidth) {
                    $(this).find('img').css({
                        'width': '100%'
                    });
                } else {
                    $(this).find('img').css({
                        'height': '100%'
                    });
                }

            });
        }

        fullHeightScreen();




            $(document).ready(function(){
        $.fn.clickMenuHumberger = function(options) {
        var eThis = this;
        var setting = {
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
            $('#contentLayer').css({ 'width': '100%', 'height': '100%', 'position': 'fixed', 'top': 0, 'z-index': 2, 'display': 'none', 'box-shadow': '-5px 0 10px rgba(0,0,0,0.4)' });
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
            });
        });
    };


            $('#hamburger-menu').clickMenuHumberger({
                obj:['.container-cus2','.container-content','.container-footer'],
                width: 89,
                duration:300,
                objHide:['#header nav .menu-side-bar'],
                navbarFixed:{
                    headerNav:'.container-cus2',
                    content:'.container-content'
                }
            });


        });
        // $(window).resize(function() {
        //     fullHeightScreen();
        // });
        // fullHeightScreen();

        $('.banner').slick({
            dots:true,
            arrows:false,
          dotsClass:'dot-banner',
          autoplay:true,
          autoplaySpeed:3000,


        });
         $('.dot-banner li button').text('');


    });


