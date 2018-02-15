$(document).ready(function() {

	$(".header-subtitle").on("click", function() {
		$(".call-to-action").slideToggle();
	});

	$(".call-button").on("click", function(e) {
		e.preventDefault();
		$(".column img").toggleClass("bigger");
	});

	/*var oldString = 'great'
			newString = '<span>great</span>'
			newText = $('h3').text().replace(RegExp(oldString,"gi"),newString)
	$('h3').html(newText);*/
});