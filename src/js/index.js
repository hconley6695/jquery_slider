

jQuery(document).ready(function($) {

	// FUNCTION DISPLAYS MOBILE MENU WHEN YOU TAP THE HAMBURGER
	$('.hamburger-icon').click(function () {
		$('#mobile-li').slideToggle(400);
	})

	//FUNCTION DISPLAYS THE SEARCH BOX WHEN YOU TAP THE SEARCH ICON
	$('.search-icon').click(function() {
		$('.search-site').toggleClass('show-search');
	})

	$('#post-4 button').removeClass('blue-border');

	// THIS MAKES THE LAST ITEM IN THE SLIDER AS A REPLICA OF THE FIRST.
	var clone = $('.individual-slide:first-child').clone();
	$('.slides').append(clone);
	// NEXT SECTION OF FUNCTIONS MAKES THE SLIDER MOVE
	// var width = 1220; //needs to grab value of width of slider/individual
	
	var width = $('.individual-slide').css('max-width');
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


	// FUNCTIONS ARE FOR RIGHT AND LEFT BUTTONS

// BOTH WILL ONLY WORK IF YOU PRESS IT ONCE AND THEN PULL MOUSE AWAY COMPLETELY

// SLIDE LEFT WORKS EXCEPT IF CURRENTSLIDE === 1, MARGIN LEFT: -(WIDTH*2) SLIDES THE WHOLE THING THE WRONG WAY
// SLIDE RIGHT WORKS EXCEPT IF CURRENTSLIDE === 4, MARGIN LEFT: 0 SLIDES THE WHOLE THING THE WRONG WAY

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

			function pixToNum(pixels){
				var strNum = pixels.substring(0, pixels.length-2);
				var num = Number(strNum);
				var largeNum = num * 3;
				var largeWidth = largeNum + "px";
				return largeWidth;
			}
			var finalWidth = pixToNum(width);

			$slideContainer.animate({'margin-left': '-=' + finalWidth}, 500);
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


});
	







