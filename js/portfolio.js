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
		$('#contact-wrapper').animate({'background-color': '#0DC478'}, 1000);

		$('body').css('background', 'url(https://s31.postimg.org/ns9l9namz/contact_pattern.png)');

		$('#modal').css('opacity', '0.92');

		$('.my_name').removeClass("my_name_red");
		$('.my_name').removeClass("my_name_blue");
		$('.my_name').addClass("my_name_green");
		$('#my_title').css({'color':'#0DC478'}, 500);
		$('#contact-button').animate({'color': '#0DC478'}, 500);


		$('#projects-wrapper').delay(200).animate({'height': '10%', 'background-color': 'white'}, 600);
		$('#projects-button').animate({'color': 'white'}, 500);


		$('#bio-wrapper').animate({'height': '5%', 'background-color': 'white'}, 600);
		$('#bio-button').animate({'color': 'white'}, 500);
	})



	$('#projects-button').click(function() {
		$('#projects-wrapper').animate({'height': '77%', 'background-color': '#0095F9'}, 560);

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


		$('#contact-wrapper').animate({'background-color': 'white'}, 700);
		$('#contact-button').animate({'color': 'white'}, 500);


		$('#bio-wrapper').animate({'height': '5%', 'background-color': 'white'}, 600);
		$('#bio-button').animate({'color': 'white'}, 500);
	}) 



	$('#bio-button').click(function() {
		$('#bio-wrapper').delay(200).animate({'height': '74%', 'background-color': '#FF4956'}, 600);

		$('body').css('background', 'url(https://s-media-cache-ak0.pinimg.com/236x/c5/31/0c/c5310cd8e766595915405683d7bd3cb1.jpg)');

		$('#modal').css('opacity', '0.97');

		$('.my_name').removeClass("my_name_green");
		$('.my_name').removeClass("my_name_blue");
		$('.my_name').addClass("my_name_red");
		$('#my_title').css({'color':'#FF4956'}, 500);
		$('#bio-button').animate({'color': '#FF4956'}, 700);


		$('#contact-wrapper').animate({'background-color': 'white'}, 700);
		$('#contact-button').animate({'color': 'white'}, 500);


		$('#projects-wrapper').animate({'height': '77%', 'background-color': 'white'}, 600);
		$('#projects-button').animate({'color': 'white'}, 500);
	}) 





	// Project Descript Switches

	$('#bandly').click(function() {
		$('#neighborino-info').hide();
		$('#jukebox-info').hide();
		$('#bandly-info').show();
		$('#bandly').css('border-bottom', '2px solid white');
		$('#neighborino').css('border-bottom', 'none');
		$('#jukebox').css('border-bottom', 'none');
	})

	$('#neighborino').click(function() {
		$('#jukebox-info').hide();
		$('#bandly-info').hide();
		$('#neighborino-info').show();
		$('#neighborino').css('border-bottom', '2px solid white');
		$('#bandly').css('border-bottom', 'none');
		$('#jukebox').css('border-bottom', 'none');
	})

	$('#jukebox').click(function() {
		$('#neighborino-info').hide();
		$('#bandly-info').hide();
		$('#jukebox-info').show();
		$('#jukebox').css('border-bottom', '2px solid white');
		$('#neighborino').css('border-bottom', 'none');
		$('#bandly').css('border-bottom', 'none');
	})
		
	
})