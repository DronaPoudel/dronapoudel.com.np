/*-------------------------------------------------------------------------
    
    Theme Name: POGO: One Page Minimal Bootstrap HTML5 Template
    Auther: SynchroTheme
    Author URI: http://synchrotheme.com
    Version: 1.0

  -------------------------------------------------------------------------*/
(function ($) {
	"use strict";


	    /*
	     * ----------------------------------------------------------------------------------------
	     *  STICKY MENU
	     * ----------------------------------------------------------------------------------------
	     */
		    function stickyMenu(){
		        $(window).on('scroll', function(){
		            var x = $(this).scrollTop();

		            if(x > 100){
		                $('.main_nav').addClass('isActive');
		            }else{
		                $('.main_nav').removeClass('isActive');
		            }
		        });
		    }
		    stickyMenu();
	    /*
	     * ----------------------------------------------------------------------------------------
	     *  SCROLL SPY
	     * ----------------------------------------------------------------------------------------
	     */
	    	$('body').scrollspy({ target: '.navbar-ex1-collapse' });


	    /*
	     * ----------------------------------------------------------------------------------------
	     *  MIX IT UP
	     * ----------------------------------------------------------------------------------------
	     */
	    	// $('.sort').mixItUp();
	    /*
	     * ----------------------------------------------------------------------------------------
	     *  Owl Carousel
	     * ----------------------------------------------------------------------------------------
	     */


	     // 	const test = new Siema({
	     // 		selectior: '.testimonial_carousel',
		    // 	perPage : 1,
		    // 	loop: true,
		    // 	duration: 2000
		    // });

	     //    document.querySelector('.prev').addEventListener('click', () => test.prev());
	     //    document.querySelector('.next').addEventListener('click', () => test.next());

	        $('.testimonials').owlCarousel({
		        items: 2,
		        nav: false,
		        loop: true,
		        autoplay: true,
		        autoplayTimeout: 3000,
				responsiveClass:true,
			    responsive:{
			        0:{
			            items:1,
			        },
			        600:{
			            items:1,
			        },
			        1000:{
			            items:2,
			        }
			    }
		    });
		/*
	     * ----------------------------------------------------------------------------------------
	     *  Wow Js
	     * ----------------------------------------------------------------------------------------
	     */	

	     	// new WOW().init();

	     /*
	     * ----------------------------------------------------------------------------------------
	     *  Smooth Scroll
	     * ----------------------------------------------------------------------------------------
	     */
			$('a[href*="#"]:not([href="#"]):not([data-toggle])').on('click', function() {
				if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				  var target = $(this.hash);
				  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				  if (target.length) {
				    $('html, body').animate({
				      scrollTop: target.offset().top
				    }, 1000);
				    return false;
				  }
				}
			});

		/*
		* ----------------------------------------------------------------------------------------
		*  Perloader
		* ----------------------------------------------------------------------------------------
		*/		

			$('#bar1').barfiller({
				barColor: "#22B4FF",
				tooltip: true,
				animateOnResize: true,
				duration: 2000
			});
			$('#bar2').barfiller({
				barColor: "#22B4FF",
				tooltip: true,
				animateOnResize: true,
				duration: 2000
			});
			$('#bar3').barfiller({
				barColor: "#22B4FF",
				tooltip: true,
				animateOnResize: true,
				duration: 2000
			});
			$('#bar4').barfiller({
				barColor: "#22B4FF",
				tooltip: true,
				animateOnResize: true,
				duration: 2000
			});
			$('#bar5').barfiller({
				barColor: "#22B4FF",
				tooltip: true,
				animateOnResize: true,
				duration: 2000
			});
			$('#bar6').barfiller({
				barColor: "#22B4FF",
				tooltip: true,
				animateOnResize: true,
				duration: 2000
			});
			$('#bar7').barfiller({
				barColor: "#22B4FF",
				tooltip: true,
				animateOnResize: true,
				duration: 2000
			});
			$('#bar8').barfiller({
				barColor: "#22B4FF",
				tooltip: true,
				animateOnResize: true,
				duration: 2000
			});



    jQuery(window).on('load',function(){

		/*
		* ----------------------------------------------------------------------------------------
		*  Perloader
		* ----------------------------------------------------------------------------------------
		*/

            // $('.preloader').fadeOut(200);




        
    });


}(jQuery));	