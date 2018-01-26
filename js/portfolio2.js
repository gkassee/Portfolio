$(document).ready(function() {

	$('#urbnImg').click(function() {
		$('.modal-overlay').show();
		$('#urbnModal').show();
		$('.project-icon-text').hide();
	})

	$('#phlImg').click(function() {
		$('.modal-overlay').show();
		$('#phlModal').show();
		$('.project-icon-text').hide();
	})

	$('#homecastImg').click(function() {
		$('.modal-overlay').show();
		$('#homecastModal').show();
		$('.project-icon-text').hide();
	})

	$('#neighborinoImg').click(function() {
		$('.modal-overlay').show();
		$('#neighborinoModal').show();
		$('.project-icon-text').hide();
	})

	$('.modal-overlay').click(function() {
		$('.modal-overlay').hide();
		$('.modal').hide();
		$('.project-icon-text').show();
	});

	$('.close').click(function() {
		$('.modal-overlay').hide();
		$('.modal').hide();
		$('.project-icon-text').show();
	});


});

