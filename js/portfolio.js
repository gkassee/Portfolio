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
		$('#contact-button').animate({'color': '#0DC478'}, 500);


		$('#projects-wrapper').animate({'height': '10%', 'background-color': 'white'}, 700);
		$('#projects-button').animate({'color': 'white'}, 500);


		$('#bio-wrapper').animate({'height': '5%', 'background-color': 'white'}, 600);
		$('#bio-button').animate({'color': 'white'}, 500);
	})



	$('#projects-button').click(function() {
		$('#projects-wrapper').animate({'height': '78%', 'background-color': '#0095F9', 'color': 'white'}, 560);
		$('#projects-button').animate({'color': '#0095F9'}, 500);


		$('#contact-wrapper').animate({'background-color': 'white'}, 700);
		$('#contact-button').animate({'color': 'white'}, 500);


		$('#bio-wrapper').animate({'height': '5%', 'background-color': 'white'}, 600);
		$('#bio-button').animate({'color': 'white'}, 500);

	}) 



	$('#bio-button').click(function() {
		$('#bio-wrapper').animate({'height': '75%', 'background-color': '#FF4956'}, 680);
		$('#bio-button').animate({'color': '#FF4956'}, 700);


		$('#contact-wrapper').animate({'background-color': 'white'}, 700);
		$('#contact-button').animate({'color': 'white'}, 500);


		$('#projects-wrapper').animate({'height': '78%', 'background-color': 'white'}, 600);
		$('#projects-button').animate({'color': 'white'}, 500);

	}) 
		
	
})