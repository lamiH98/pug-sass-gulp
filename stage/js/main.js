$(function () {
    
    'use strict';

    // new WOW().init();
    
    $(window).scroll(function () {
        var windowScroll = $(window).scrollTop();
        // Background Fixed
        if (windowScroll > 120) {
            $(".navbar").addClass('navbar-bg');
            $(".navbar .nav-item").css('color', '#222');
            $(".navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover").css('color', '#222');
        } else {
            $(".navbar").removeClass('navbar-bg');
            $(".navbar .nav-item").css('color', '#FFF');
        }
        var scrollToTop = $('.scroll-to-top');
        if (windowScroll >= 800) {
            if (scrollToTop.is(':hidden')) {
                scrollToTop.fadeIn(400);
                $('.fire').css('opacity','0');
                $('.scroll-to-top').animate({
                    bottom: 10,
                }, 600);
            }
        } else {
            scrollToTop.fadeOut(400);
        }
    });
    
    // Click On Scroll To Top To Go Up

    $('.scroll-to-top').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 200);
        $('.scroll-to-top').animate({
            bottom: 1000,
        }, 1000);
        $('.fire').css('opacity','1');
    });

    $('.owl-header').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
        }
    })

    // Owl-carousel Testimonial
    $('.owl-tourist').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout: 5000,
        margin: 20,
        nav: false,
        rtl: true,
        dotsEach: 1,
        responsive:{
            0:{
                items: 1
            },
            768: {
                items: 2,
            },
            1200:{
                items: 3
            }
        }
    });

    $('.owl-testimonial').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout: 5000,
        margin:20,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            991:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });

    $('.dh-container').directionalHover();
    
});