$(document).ready(function(){
    $("#top").owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            768:{
                items:1,
                nav:true
            },
            992:{
                items:1,
                nav:true,
                loop:true
            }
        }
    });
});
$(document).ready(function(){
    $("#triple").owlCarousel({
        items:1,
        lazyLoad:true,
        loop:true,
        margin:10,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            480:{
                items:1,
                nav:true
            },
            768:{
                items:2,
                nav:true
            },
            992:{
                items:3,
                nav:true,
                loop:true
            }
        }
    });
});
$(document).ready(function(){

    //toggle menu
    $('.hamburger-container').click(function(){
        $('#menu').slideToggle();
    });

    //to fix issue that toggle adds style(hides) to nav
    $(window).resize(function(){
        if(window.innerWidth > 1024) {
            $('#menu').removeAttr('style');
        }
    });

    //icon animation
    var topBar = $('.hamburger li:nth-child(1)'),
        middleBar = $('.hamburger li:nth-child(2)'),
        bottomBar = $('.hamburger li:nth-child(3)');

    $('.hamburger-container').on('click', function() {
        if (middleBar.hasClass('rot-45deg')) {
            topBar.removeClass('rot45deg');
            middleBar.removeClass('rot-45deg');
            bottomBar.removeClass('hidden');
        } else {
            bottomBar.addClass('hidden');
            topBar.addClass('rot45deg');
            middleBar.addClass('rot-45deg');
        }
    });

});