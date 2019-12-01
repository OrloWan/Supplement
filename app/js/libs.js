$(document).ready(function(){
	$('.realman-slider').slick({
		dots: true,
		infinite: true,
		responsive: [
			{
				breakpoint: 993,
				settings: {
					infinite: true,
					dots: true,
					arrows: false
				}
			}
		]
	})
	
	
	$('.client-slider').slick({
		dots: true,
		infinite: true,
		arrows: false,
		autoplay: true
	})

});