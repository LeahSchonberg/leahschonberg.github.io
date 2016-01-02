$(document).ready(function () {

	$(window).scroll(function(){

		if($(this).scrollTop() > 20) {
			$('header').addClass('sticky')
		} else {
			$('header').removeClass('sticky')
		}

	})
})

