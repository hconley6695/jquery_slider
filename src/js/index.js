// Javascript Entry Point
import $ from 'jquery';

// THIS MAKES THE LAST ITEM IN THE SLIDER AS A REPLICA OF THE FIRST.
	// var clone = $('.individual-slide:first-child').clone();
	// $('.slides').append(clone);
	// NEXT SECTION OF FUNCTIONS MAKES THE SLIDER MOVE
	var width = 1220; //needs to grab value of width of slider/individual
	var animateSpeed = 1000;
	var interval;
	var currentSlide = 1;


	var $slider = $('#slider');
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.individual-slide');



	function stopSlider() {
		clearInterval(interval);
	}

	function startSlider() {
		interval = setInterval(function() {
			$slideContainer.animate({'margin-left':'-=' + width}, 
				animateSpeed, function() {

					currentSlide++;

					if (currentSlide === $slides.length) {
						currentSlide = 1;
						$slideContainer.css('margin-left', '0');

						
					}			
			});
		}, 3000);
	}
	// FUNCTION MAKES SLIDER PAUSE WHEN HOVERING OVER ONE SLIDE
	$('#slider-container').mouseover(function() {
		$(this).css('cursor', 'pointer').stop(stopSlider());
	}).mouseout(function(){
		startSlider();
	});	


	// FUNCTIONS ARE FOR RIGHT AND LEFT BUTTONS BUT NOT WORKING PROPERLY

// BOTH WILL ONLY WORK IF YOU PRESS IT ONCE AND THEN PULL MOUSE AWAY COMPLETELY

// SLIDE LEFT WORKS EXCEPT IF CURRENTSLIDE === 1, MARGIN LEFT: -3660PX SLIDES THE WHOLE THING THE WRONG WAY
	$('#slide-left').click(function() {

		if (currentSlide === 4) {
			$slideContainer.animate({'margin-left':'+=' + width}, 500);
			currentSlide = 3;
		} else if (currentSlide === 3) {
			$slideContainer.animate({'margin-left':'+=' + width}, 500);
			currentSlide = 2;
		} else if (currentSlide === 2) {
			$slideContainer.animate({'margin-left': '+=' + width}, 500);
			currentSlide = 1;
		} else if (currentSlide === 1) {


			$slideContainer.animate({'margin-left': '-' + (width * 2)}, 500);
			currentSlide = 4;
		} else {
			alert('You broke the slider');
		}
	});


	$('#slide-right').click(function() {

		if (currentSlide === 1) {
			$slideContainer.animate({'margin-left':'-=' + width}, 500);
			currentSlide = 2;
		} else if (currentSlide === 2) {
			$slideContainer.animate({'margin-left':'-=' + width}, 500);
			currentSlide = 3;
		} else if (currentSlide === 3) {
			$slideContainer.animate({'margin-left': '-=' + width}, 500);
			currentSlide = 4;
		} else if (currentSlide === 4) {
			$slideContainer.animate({'margin-left': '0'}, 500);
			currentSlide = 1;
		} else {
			alert('You broke the slider');
		}
	});


	startSlider();
	// stopSlider();
	// ///////////////////////////////
