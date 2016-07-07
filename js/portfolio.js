// $(window).load(function(){

// 	$('#contact-wrapper').show("slide", {
//             direction: "down"
//   }, 600);

//   $('#projects-wrapper').show("slide", {
//             direction: "down"
//   }, 500);

//   $('#bio-wrapper').show("slide", {
//             direction: "down"
//   }, 400);

// })

$(document).ready(function() {


	$('#contact-button').click(function() {
		$('#contact-wrapper').animate({'background-color': '#0DC478'}, 500);

		$('body').css('background', 'url(https://s31.postimg.org/ns9l9namz/contact_pattern.png)');

		$('#modal').css('opacity', '0.92');

		$('.my_name').removeClass("my_name_red");
		$('.my_name').removeClass("my_name_blue");
		$('.my_name').addClass("my_name_green");
		$('#my_title').css({'color':'#0DC478'}, 500);
		$('#contact-button').animate({'color': '#0DC478'}, 500);


		$('#projects-wrapper').delay(170).animate({'height': '10%', 'background-color': 'white'}, 400);
		$('.tool').animate({'background-color': 'white'}, 600);
		$('.screens').animate({'opacity': '0'}, 500);
		$('#projects-button').animate({'color': 'white'}, 500);


		$('#bio-wrapper').animate({'height': '5%', 'background-color': 'white'}, 400);
		$('#bio-button').animate({'color': 'white'}, 500);
	})



	$('#projects-button').click(function() {
		$('#projects-wrapper').animate({'height': '77%', 'background-color': '#0095F9'}, 500);
		$('.tool').animate({'background-color': '#FF4956'}, 800);
		$('.screens').animate({'opacity': '1'}, 800);

		$('body').css('background', 'url(https://s32.postimg.org/6ds3m8pxh/projects_pattern.png)');

		$('#modal').css('opacity', '0.92');

		// $('#bandly').animate({'text-shadow': '0px -1px #0095F9, 0px -2px #0095F9, 0px -3px #0095F9, 0px -4px #0095F9'}, 560)

		// $('#neighborino').animate({'text-shadow': '0px -1px #0095F9, 0px -2px #0095F9, 0px -3px #0095F9, 0px -4px #0095F9'}, 560)

		// $('#jukebox').animate({'text-shadow': '0px -1px #0095F9, 0px -2px #0095F9, 0px -3px #0095F9, 0px -4px #0095F9'}, 560)

		$('.my_name').removeClass("my_name_green");
		$('.my_name').removeClass("my_name_red");
		$('.my_name').addClass("my_name_blue");
		$('#my_title').css({'color':'#0095F9'}, 500);
		$('#projects-button').animate({'color': '#0095F9'}, 500);


		$('#contact-wrapper').animate({'background-color': 'white'}, 500);
		$('#contact-button').animate({'color': 'white'}, 500);


		$('#bio-wrapper').animate({'height': '5%', 'background-color': 'white'}, 400);
		$('#bio-button').animate({'color': 'white'}, 500);
	}) 



	$('#bio-button').click(function() {
		$('#bio-wrapper').delay(170).animate({'height': '74%', 'background-color': '#FF4956'}, 350);

		$('body').css('background', 'url(https://s-media-cache-ak0.pinimg.com/236x/c5/31/0c/c5310cd8e766595915405683d7bd3cb1.jpg)');

		$('#modal').css('opacity', '0.97');

		$('.my_name').removeClass("my_name_green");
		$('.my_name').removeClass("my_name_blue");
		$('.my_name').addClass("my_name_red");
		$('#my_title').css({'color':'#FF4956'}, 500);
		$('#bio-button').animate({'color': '#FF4956'}, 500);


		$('#contact-wrapper').animate({'background-color': 'white'}, 500);
		$('#contact-button').animate({'color': 'white'}, 500);


		$('#projects-wrapper').animate({'height': '77%', 'background-color': 'white'}, 350);
		$('.tool').animate({'background-color': 'white'}, 600);
		$('.screens').animate({'opacity': '0'}, 500);
		$('#projects-button').animate({'color': 'white'}, 500);
	}) 





	// Project Descript Switches

	$('#bandly').click(function() {
		$('#neighborino-content-wrapper').hide();
		$('#jukebox-content-wrapper').hide();
		$('#bandly-content-wrapper').show();
		$('#bandly').css('border-bottom', '2px solid white');
		$('#neighborino').css('border-bottom', 'none');
		$('#jukebox').css('border-bottom', 'none');
	})

	$('#neighborino').click(function() {
		$('#jukebox-content-wrapper').hide();
		$('#bandly-content-wrapper').hide();
		$('#neighborino-content-wrapper').show();
		$('#neighborino').css('border-bottom', '2px solid white');
		$('#bandly').css('border-bottom', 'none');
		$('#jukebox').css('border-bottom', 'none');
	})

	$('#jukebox').click(function() {
		$('#neighborino-content-wrapper').hide();
		$('#bandly-content-wrapper').hide();
		$('#jukebox-content-wrapper').show();
		$('#jukebox').css('border-bottom', '2px solid white');
		$('#neighborino').css('border-bottom', 'none');
		$('#bandly').css('border-bottom', 'none');
	})
		
	
})