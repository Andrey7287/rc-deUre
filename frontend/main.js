'use strict';

/* Make jQuery available in global */
console.log(`jQuery ${$.fn.jquery} is loaded`);
window.$ = $;
window.jQuery = $;

/* Import project styles and components */
require('script-loader!slick-carousel');
require('jquery-colorbox');
require('./modules/ymap');
import '../sass/css.scss';
import OnResize from './modules/resize';
import scrollup from './modules/scrollup';
import './modules/ravno';

/* Define project components and variables */
var	largeScreen = window.matchMedia("(min-width: 1201px)").matches,
		mediumScreen = window.matchMedia("(min-width: 993px) and (max-width: 1200px)").matches,
		smallScreen = window.matchMedia("(max-width: 768px)").matches,
		resizeAlign = new OnResize(),
		scrollTiming = 0;

/****************************
********* Drop menu *********
*****************************/

if ( largeScreen ) {

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

} else {

	$('.drop-trigger').click(function(e){

		var $targetMenu = $(this).next();
		$.colorbox({
			inline: true, 
			href: $(this).next()[0],
			closeButton: true,
			onLoad: function(){ $targetMenu.addClass('forLightBox'); },
			onCleanup: function(){ $targetMenu.removeClass('forLightBox'); }
		});
		
	});

}




/************************
****** Mobile menu ******
*************************/

$('.site-nav-toggle').on('click', function(){
	$(this).toggleClass('act');
	$('.site-nav__link').fadeToggle();
});



var $sliderImages = $('.sliderImage'),
		$sliderMask = $('.slider-svg-mask');

if ( $sliderImages.length && mediumScreen ) {

	$sliderMask.attr('width', '500');
	$sliderMask.attr('height', '408');

	$sliderImages.each(function(){
		$(this).attr('width', '500');
		$(this).attr('height', '408');
	});

} else if ( $sliderImages.length && smallScreen ) {

	$sliderMask.attr('width', '290');
	$sliderMask.attr('height', '236');

	$sliderImages.each(function(){
		$(this).attr('width', '290');
		$(this).attr('height', '236');
	});

}
/***********************
******** SLIDER ********
************************/

$('.js-slider-1').slick({
	prevArrow: $('.js-slider-1-left'),
	nextArrow: $('.js-slider-1-right'),
	responsive: [{
		breakpoint: 769,
      settings: {
				arrows: false,
        dots: true,
				appendDots: $('.js-slider-1-dots')
      }
		}
	]
	
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
      breakpoint: 993,
      settings: {
        slidesToShow: 3
      }
		}, {
			breakpoint: 769,
      settings: {
        slidesToShow: 2
      }
		}, {
			breakpoint: 577,
      settings: {
        slidesToShow: 1
      }
		}
	]
});

/***********************
******* SLIDER 3 *******
************************/

$('.js-slider-3').slick({
	prevArrow: $('.js-slider-3-left'),
	nextArrow: $('.js-slider-3-right'),
	slidesToShow: 2,
	slidesToScroll: 1,
	infinite: true,
	responsive: [
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 1
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

		$(document).scrollTop() && largeScreen ? $fixMenu.addClass('slim') : $fixMenu.removeClass('slim');

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
