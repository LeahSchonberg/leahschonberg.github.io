$(document).ready(function () {

	$('#myForm').submit(function (event) {
		event.preventDefault()
		var name = $('#name-input').val()
		$('#target').text(name)

	})

})
