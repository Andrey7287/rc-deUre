'use strict';

/* Make jQuery available in global */
console.log(`jQuery ${$.fn.jquery} is loaded`);
window.$ = $;
window.jQuery = $;

/* Import project styles and components */
require('script-loader!slick-carousel');
require('./modules/ymap');
import '../sass/css.scss';
import OnResize from './modules/resize';
import scrollup from './modules/scrollup';
import './modules/ravno';

/* Define project components and variables */
var	mobileView = window.matchMedia("(max-width: 768px)").matches,
		resizeAlign = new OnResize,
		scrollTiming = 0;

/*************************
********** Menu **********
**************************/

$('.drop-trigger').hover(function(){

	$(this).addClass('act').next().stop().slideDown().addClass('drop_act');

}, function(e){
	if( !$(e.relatedTarget).is('.drop') ) {
		$(this).removeClass('act').next().stop().slideUp().removeClass('drop_act');
	}
});
$('.drop').mouseleave(function(){

	$(this).stop().slideUp().removeClass('drop_act');
	$('.drop-trigger').removeClass('act');
});


/************************
****** Mobile menu ******
*************************/

$('.c-hamburger').on('click', function(){
	$(this).toggleClass('is-active');
	$('.site-nav').slideToggle();
});


/***********************
******** SLIDER ********
************************/

$('.js-slider-1').slick({
	prevArrow: $('.js-slider-1-left'),
	nextArrow: $('.js-slider-1-right'),

});

/***********************
******* SLIDER 2 *******
************************/

$('.js-slider-2').slick({
	prevArrow: $('.js-slider-2-left'),
	nextArrow: $('.js-slider-2-right'),
	slidesToShow: 4,
	slidesToScroll: 1,
	infinite: true,
	responsive: [
    {
      breakpoint: 333,
      settings: {
        slidesToShow: 3
      }
		}
	]
});

/************************
******* Scroll Up *******
*************************/

$(document).scroll(function(){

	if ( !scrollTiming ) {

		scrollTiming = setTimeout(function(){

			var scroll = $('body').scrollTop() ? $('body').scrollTop() : $('html').scrollTop();
			scroll >= 300 ? $('.scrollup').addClass('act') : $('.scrollup').removeClass('act');
			scrollTiming = 0;
		},300);

	}

	(function switchTop(){

		var $fixMenu = $('.header__menu');

		$(document).scrollTop() ? $fixMenu.addClass('slim') : $fixMenu.removeClass('slim');

	}($));

});

$('.scrollup').scrollUp();

/************************
**** Toggle services ****
*************************/

$('.services__toggle').on('click', '[data-toggle]', function(e){

	e.preventDefault();

	var idx = $(this).attr('data-toggle') - 1,
			services = $('.services__block');
	
	$('[data-toggle]').removeClass('act');
	$(this).addClass('act');

	$(services).stop().fadeOut(200);//.removeClass('act');
	$(services[idx]).stop().fadeIn(800);//.addClass('act');

});

/************************
********* Ravno *********
*************************/

var $services = $('.services');
if ( $services.length ) {
	$(document).ready(function(){
		$services.find('.m-title').ravno();
	});
}
