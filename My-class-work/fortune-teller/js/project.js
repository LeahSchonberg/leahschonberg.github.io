

$(document).ready(function (){


	$('#clickme').click(getFortune)

	function getFortune () {

		// get inputs

		var hometown = $('#hometown').val()
		var partner = $('#partner').val()
		var numKids = $('#numKids').val()
		var jobTitle = $('#jobTitle').val()

	// run your function logic
	var fortuneStr = "You will be a " + jobTitle + " in " + hometown + " married to" + partner + " with " + numKids + "kids" + '.'

	$('#output').text(fortuneStr)
	}

})