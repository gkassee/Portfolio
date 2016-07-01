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
		$('#contact-wrapper').animate({'height': '82%', 'background-color': '#EAE3E3', 'background-color': '#E83A54'}, 1000);
		$('#bio-body').animate({'color': '#B2A9A9'}, 2000);
		$('#projects-wrapper').animate({'height': '20%', 'background-color': '#EAE3E3'}, 800);
		$('#bio-wrapper').animate({'height': '10%', 'background-color': '#EAE3E3'}, 400);
	})



	$('#projects-button').click(function() {
		$('#projects-wrapper').animate({'height': '72%', 'background-color': '#00F4BB', 'color': 'white'}, 560);
		$('#bio-wrapper').animate({'height': '10%', 'background-color': '#EAE3E3'}, 400);
		$('#bio-body').animate({'color': 'grey'}, 2000);
		$('#contact-wrapper').animate({'background-color': '#EAE3E3'}, 1000);
	}) 



	$('#bio-button').click(function() {
		$('#projects-wrapper').animate({'height': '72%', 'background-color': '#EAE3E3'}, 400);
		$('#bio-wrapper').animate({'height': '62%', 'background-color': 'blue'}, 2000);
		$('#bio-body').animate({'color': 'white'}, 2000);
		$('#contact-wrapper').animate({'background-color': '#EAE3E3'}, 1000);
	}) 
		
	
})