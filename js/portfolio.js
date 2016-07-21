$(document).ready(function() {

	$('#hi').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1}, 1500);

	$('#bio-p1').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1}, 1700);

	$('#code').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1}, 2000);

	$('#bio-p2').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1}, 2300);

	$('#bike').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1}, 2600);

	$('#bio-p3').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1}, 2900);

	$('#bio-button').css({'color': '#FF4956', 'border-bottom': '1px solid #FF4956', 'font-weight': '300'});




  $('#contact-button').click(function() {


		$('.my_name').removeClass("my_name_red");
		$('.my_name').removeClass("my_name_blue");
		$('.my_name').addClass("my_name_green");
		$('#me').css('border', '6px #0DC478 solid');

		$('#contact-button').css({'color': '#0DC478', 'border-bottom': '1px solid #0DC478', 'font-weight': '300'});
		$('#projects-button').css({'color': '#303030', 'border': '0px solid #0DC478', 'font-weight': '300'});
		$('#bio-button').css({'color': '#303030', 'border': '0px solid #0DC478', 'font-weight': '300'});

		// $('body').animate({
  //       scrollTop: $("#contact-wrapper").offset().top
  //   }, 300);

  	$('#bio-wrapper').fadeOut(400);
  	$('#projects-wrapper').fadeOut(400);
  	$('#contact-wrapper').delay(400).fadeIn(400);


  	$("#email-button").mouseover(function() {
	    $("#email-line").show();
    });

	  $("#email-button").mouseleave(function() {
	    $("#email-line").hide();
    });

    $("#resume-button").mouseover(function() {
	    $("#resume-line").show();
    });

	  $("#resume-button").mouseleave(function() {
	    $("#resume-line").hide();
    });

    $("#github-button").mouseover(function() {
	    $("#github-line").show();
    });

	  $("#github-button").mouseleave(function() {
	    $("#github-line").hide();
    });

    $("#linkedin-button").mouseover(function() {
	    $("#linkedin-line").show();
    });

	  $("#linkedin-button").mouseleave(function() {
	    $("#linkedin-line").hide();
    });

	})



	$('#projects-button').click(function() {


		$('.my_name').removeClass("my_name_green");
		$('.my_name').removeClass("my_name_red");
		$('.my_name').addClass("my_name_blue");
		$('#me').css('border', '6px #0095F9 solid');

		$('#projects-button').css({'color': '#0095F9', 'border-bottom': '1px solid #0095F9', 'font-weight': '300'});
		$('#contact-button').css({'color': '#303030', 'border': '0px solid #0DC478', 'font-weight': '300'});
		$('#bio-button').css({'color': '#303030', 'border': '0px solid #0DC478', 'font-weight': '300'});

		// $('body').animate({
  //       scrollTop: $("#projects-wrapper").offset().top
  //   }, 300);

  	$('#bio-wrapper').fadeOut(400);
  	$('#contact-wrapper').fadeOut(400);
  	$('#projects-wrapper').delay(400).fadeIn(400);

	}) 



	$('#bio-button').click(function() {

		$('.my_name').removeClass("my_name_green");
		$('.my_name').removeClass("my_name_blue");
		$('.my_name').addClass("my_name_red");
		$('#me').css('border', '6px #FF4956 solid');
		// $('#my_title').css({'color':'#FF4956'}, 500);

		$('#bio-button').css({'color': '#FF4956', 'border-bottom': '1px solid #FF4956', 'font-weight': '300'});
		$('#contact-button').css({'color': '#303030', 'border': '0px solid #0DC478', 'font-weight': '300'});
		$('#projects-button').css({'color': '#303030', 'border': '0px solid #0DC478', 'font-weight': '300'});

		// $('body').animate({
  //       scrollTop: $("#bio-wrapper").offset().top
  //   }, 300);

  	$('#projects-wrapper').fadeOut(400);
  	$('#contact-wrapper').fadeOut(400);
  	$('#bio-wrapper').delay(400).fadeIn(400);

	}) 




// Project tab buttons

	var project = ['#neighborino-content-wrapper', '#bandly-content-wrapper', '#jukebox-content-wrapper'];
	var x = 0;

	$('#forward').click(function() {
		if (x == project.length - 1) {
			$(project[x]).hide();
			x = 0
			$(project[x]).show();
		} 
		else if (x < project.length){
			$(project[x]).hide();
			$(project[x = x+1]).show();
		}

	});



	$('#backward').click(function() {
		if (x > 0){
			$(project[x]).hide();
			$(project[x = x-1]).show();
		}
		else if (x == 0) {
			$(project[x]).hide();
			x = project.length - 1
			$(project[x]).show();
		} 
	});





});

