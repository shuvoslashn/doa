/*------------------------------------------------------------------
        [ Master Stylesheet ]

Project      :    DoA || Business Template
Version      :    1.0
Last change  :    20/07/2019 [fixed Float bug, vf]
Author Name  :    ShuvoSylhet
Primary use  :    Business
-------------------------------------------------------------------*/


/*------------------------------------------------------------------
        [ Table of contents ]

            01. START MENU JS
            02. PRELOADER JS
            03. WOW Active JS
            04. Owl Carousel JS 
            05. Megnefic popup JS
            06. Back to top button JS
            07. Typed JS 

-------------------------------------------------------------------*/


$(document).ready(function($){
    "use strict";

/*=========================================================
                START MENU JS
==========================================================*/
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 150) {
            $('.navbar-light').addClass('menu-shrink');
        } else {
            $('.navbar-light').removeClass('menu-shrink');
        }
    });			

    $('.navbar-nav .nav-item .nav-link').on('click', function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 30
        }, 1000);
        e.preventDefault();
    });
  
    $(document).on('click','.navbar-collapse.show',function(e) {
        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
            $(this).collapse('hide');
        }
    });		
    

/*=========================================================
               PRELOADER JS
==========================================================*/
    jQuery(window).on('load',function(){
        jQuery(".preloader").fadeOut(500);
    });

/*=========================================================
                WOW Active JS
==========================================================*/
	new WOW().init();


/*=========================================================
                Owl Carousel JS
==========================================================*/
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:15,
        dots:false,
        autoplay:true,
        nav:true,
        navText: [
            '<i class="fas fa-angle-double-left"></i>',
            '<i class="fas fa-angle-double-right"></i>'
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

/*=========================================================
                Megnefic popup JS
==========================================================*/
    $('.popup').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-s-loading',
        gallery: {
            enabled: true, // set to true to enable gallery
          
            preload: [0,2], // read about this option in next Lazy-loading section
          
            navigateByImgClick: true,
          
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
          
            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
          }
    });
/*=========================================================
                Back to top button JS
==========================================================*/
    $('body').append('<div id="toTop" class="top-button"><i class="fas fa-hand-point-up"></i></div>');
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    }); 
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });


/*=========================================================
                Typed JS
==========================================================*/
    var typed = new Typed(".type", {
        strings: [
            "Designer", 
            "Developer",
            "Programmer"
        ],
        typeSpeed: 120,
        backSpeed: 120,
        loop: true
    });

}(jQuery));