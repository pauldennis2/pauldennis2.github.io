// --------------------------------------------------------------
	// Author       : Theme_xyz
	// Template Name: Porfi - Personal Portfolio Template
	// Version      : 1.0	
// --------------------------------------------------------------
// ==============================================================
    // CSS TABLE OF CONTENTS
// ==============================================================
    // 01. START PRELOADER
    // 02. START MENU STICKY JS
    // 03. START SMOTH SCROOL JS
    // 04. START SCROOLSPY JS
    // 05. START TOGGLE DROPDOWN JS
    // 06. START SERVICE CAROUSEL JS
	// 07. START PORTFOLIO MIXITUP JS
    // 08. START VENOBOX JS
    // 09. START COUNTDOWN JS
	// 10. START PARALLAX JS
    // 11. START WOW ANIMATION JS
// ==============================================================

(function ($) {
    "use strict";
	
	jQuery(document).ready(function($){
		
		// 01. START PRELOADER
		$(window).load(function() {
			// Animate loader off screen
			$(".preloader").fadeOut("slow");
		});
		// 01. END PRELOADER
		
		// 02. START MENU STICKY JS
		$(".header-top-area").sticky({
            topSpacing: 0,
        });
		// 02. END MENU STICKY JS
		
		// 03. START SMOTH SCROOL JS
		$('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 60
            }, 1000);
            e.preventDefault();
        });
		// 03. END SMOTH SCROOL JS
		
		// 04. START SCROOLSPY JS
		$('body').scrollspy({
            target: '.navbar-collapse',
            offset: 80
        });
		// 04. END SCROOLSPY JS
		
		// 05. START TOGGLE DROPDOWN JS
		$(document).on('click','.navbar-collapse.in',function(e) {
		if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
		});
		// 05. END TOGGLE DROPDOWN JS
		
		// 06. START SERVICE CAROUSEL JS
		$('#service-carousel').owlCarousel({
		    loop:true,
			margin:0,
			nav:false,
			autoplay:true,
			smartSpeed:900,
		    autoplayTimeout:2000,
		    autoplayHoverPause:true,
		    responsiveClass:true,
		    responsive:{
		        0:{
		            items:1,
		        },
		        600:{
		            items:2,
		        },
		        1000:{
		            items:3,
		        }
		    }
		});
		// 06. END SERVICE CAROUSEL JS
		
		// 07. START PORTFOLIO MIXITUP JS
		jQuery('.grid').mixitup({
			targetSelector: '.mix'
		});
		// 07. END PORTFOLIO MIXITUP JS
		
		// 08. START VENOBOX JS
		$('.image-popup').venobox({
			numeratio: true,
			infinigall: true
		});
		// 08. END VENOBOX JS
		
		// 09. START COUNTDOWN JS
		$('.progress').on('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.timer').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 3000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});
		// 09. END COUNTDOWN JS
		
		// 10. START PARALLAX JS
        $(window).stellar({
            responsive: true,
            positionProperty: 'position',
            horizontalScrolling: false
        });
		// 10. END PARALLAX JS

	});
	
	// 11. START WOW ANIMATION JS
	new WOW().init();
	// 11. END WOW ANIMATION JS
	
})(jQuery);