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
		$('#my_name').animate({'text-shadow': '0px -1px #0DC478, 0px -2px #0DC478, 0px -3px #0DC478, 0px -4px #0DC478, 0px -5px #0DC478'}, 500);
		$('#my_title').css({'color':'#0DC478'}, 500);
		$('#contact-button').animate({'color': '#0DC478'}, 500);


		$('#projects-wrapper').delay(200).animate({'height': '10%', 'background-color': 'white'}, 600);
		$('#projects-button').animate({'color': 'white'}, 500);


		$('#bio-wrapper').animate({'height': '5%', 'background-color': 'white'}, 600);
		$('#bio-button').animate({'color': 'white'}, 500);
	})



	$('#projects-button').click(function() {
		$('#projects-wrapper').animate({'height': '77%', 'background-color': '#0095F9'}, 560);
		$('#my_name').animate({'text-shadow': '0px -1px #0095F9, 0px -2px #0095F9, 0px -3px #0095F9, 0px -4px #0095F9, 0px -5px #0095F9'}, 500);
		$('#my_title').css({'color':'#0095F9'}, 500);
		$('#projects-button').animate({'color': '#0095F9'}, 500);


		$('#contact-wrapper').animate({'background-color': 'white'}, 700);
		$('#contact-button').animate({'color': 'white'}, 500);


		$('#bio-wrapper').animate({'height': '5%', 'background-color': 'white'}, 600);
		$('#bio-button').animate({'color': 'white'}, 500);

	}) 



	$('#bio-button').click(function() {
		$('#bio-wrapper').delay(200).animate({'height': '74%', 'background-color': '#FF4956'}, 600);
		$('#my_name').animate({'text-shadow': '0px -1px #FF4956, 0px -2px #FF4956, 0px -3px #FF4956, 0px -4px #FF4956, 0px -5px #FF4956'}, 500);
		$('#my_title').css({'color':'#FF4956'}, 500);
		$('#bio-button').animate({'color': '#FF4956'}, 700);


		$('#contact-wrapper').animate({'background-color': 'white'}, 700);
		$('#contact-button').animate({'color': 'white'}, 500);


		$('#projects-wrapper').animate({'height': '77%', 'background-color': 'white'}, 600);
		$('#projects-button').animate({'color': 'white'}, 500);

	}) 
		
	
})