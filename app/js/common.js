$(function() {

	$(".main-slider-content").slick({
		infinite: false,
		slidesToShow: 1,
  	slidesToScroll: 1,
		dots: false,
		fade: true,
		draggable: false,
		arrows: false
	});

	$(".main-slider").slick({
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: false,
		infinite: false,
		slidesToShow: 1,
  	slidesToScroll: 1,
		dots: false,
		cssEase: "ease-in-out",
		draggable: false,
		prevArrow: $(".main-slider-nav__prev"),
		nextArrow: $(".main-slider-nav__next")
	}).on('afterChange', function(event, slick, currentSlide, nextSlide){
		if(currentSlide == 1) $(".main-slider-content").slick("slickNext");
		if(currentSlide == 0) $(".main-slider-content").slick("slickPrev");
	});

	$(".js-range-slider").ionRangeSlider({
		type: "double",
		min: 32,
		max: 186,
		from: 32,
		to: 186
});

});
