$(document).ready(function() {
  // run screen size test on initial page load
  // checkSize();
  // checkSize2();

  // // run test on resize of the window
  // $(window).resize(checkSize);
  // $(window).resize(checkSize2);

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



 

// $(window).bind('enterBreakpoint320',function() {
//     ...
// });

// $(window).bind('exitBreakpoint320',function() {
//     ...
// });

// $(window).bind('enterBreakpoint768',function() {
//     ...
// });

// $(window).bind('exitBreakpoint768',function() {
//     ...
// });

$(window).setBreakpoints({
// use only largest available vs use all available
    distinct: true, 
// array of widths in pixels where breakpoints
// should be triggered
    breakpoints: [
        320,
        480,
        999,
        1000,
        2000
    ] 
});   


$(window).bind('enterBreakpoint1000',function() {

    console.log('Entering 1000 breakpoint');

    $('#contact-button').click(function() {

					$('#bio-wrapper').css('visibility', 'hidden');
					$('#projects-wrapper').css('visibility', 'hidden');
					$('#contact-wrapper').css('visibility', 'visible');

					$('body').css('background', 'url(https://s31.postimg.org/ns9l9namz/contact_pattern.png)');

					$('#modal').css('opacity', '0.92');

					$('.my_name').removeClass("my_name_red");
					$('.my_name').removeClass("my_name_blue");
					$('.my_name').addClass("my_name_green");
					$('#my_title').css({'color':'#0DC478'}, 500);

					$('#projects-button').css('color', 'white');

					$('#contact-button').css('color', '#0DC478');

					$('#bio-button').css('color', 'white');
				})



				$('#projects-button').click(function() {

					$('#contact-wrapper').css('visibility', 'hidden');
					$('#bio-wrapper').css('visibility', 'hidden');
					$('#projects-wrapper').css('visibility', 'visible');

					$('body').css('background', 'url(https://s32.postimg.org/6ds3m8pxh/projects_pattern.png)');

					$('#modal').css('opacity', '0.92');

					$('.my_name').removeClass("my_name_green");
					$('.my_name').removeClass("my_name_red");
					$('.my_name').addClass("my_name_blue");
					$('#my_title').css({'color':'#0095F9'}, 500);

					$('#projects-button').css('color', '#0095F9');

					$('#contact-button').css('color', 'white');

					$('#bio-button').css('color', 'white');
				}) 



				$('#bio-button').click(function() {

					$('#contact-wrapper').css('visibility', 'hidden');
					$('#projects-wrapper').css('visibility', 'hidden');
					$('#bio-wrapper').css('visibility', 'visible');

					$('body').css('background', 'url(https://s-media-cache-ak0.pinimg.com/236x/c5/31/0c/c5310cd8e766595915405683d7bd3cb1.jpg)');

					$('#modal').css('opacity', '0.97');

					$('.my_name').removeClass("my_name_green");
					$('.my_name').removeClass("my_name_blue");
					$('.my_name').addClass("my_name_red");
					$('#my_title').css({'color':'#FF4956'}, 500);

					$('#projects-button').css('color', 'white');

					$('#contact-button').css('color', 'white');

					$('#bio-button').css('color', '#FF4956');
				}) 

});






$(window).bind('exitBreakpoint1000',function() {
    console.log('Exiting 1000 breakpoint');


    $('#contact-button').click(function() {
			$('#contact-wrapper').animate({'background-color': '#0DC478'}, 500);

			$('body').css('background', 'url(https://s31.postimg.org/ns9l9namz/contact_pattern.png)');

			$('#modal').css('opacity', '0.92');

			$('.my_name').removeClass("my_name_red");
			$('.my_name').removeClass("my_name_blue");
			$('.my_name').addClass("my_name_green");
			$('#my_title').css({'color':'#0DC478'}, 500);
			$('#contact-button').animate({'color': '#0DC478'}, 500);


			$('#projects-wrapper').delay(170).animate({'height': '6%', 'background-color': 'white'}, 400);
			$('.tool').animate({'background-color': 'white'}, 600);
			$('.screens').animate({'opacity': '0'}, 500);
			$('#projects-button').animate({'color': 'white'}, 500);


			$('#bio-wrapper').animate({'height': '3%', 'background-color': 'white'}, 400);
			$('#bio-button').animate({'color': 'white'}, 500);
		})



		$('#projects-button').click(function() {
			$('#projects-wrapper').animate({'height': '77%', 'background-color': '#0095F9'}, 500);
			$('.tool').animate({'background-color': '#FF4956'}, 800);
			$('.screens').animate({'opacity': '1'}, 800);

			$('body').css('background', 'url(https://s32.postimg.org/6ds3m8pxh/projects_pattern.png)');

			$('#modal').css('opacity', '0.92');

			$('.my_name').removeClass("my_name_green");
			$('.my_name').removeClass("my_name_red");
			$('.my_name').addClass("my_name_blue");
			$('#my_title').css({'color':'#0095F9'}, 500);
			$('#projects-button').animate({'color': '#0095F9'}, 500);


			$('#contact-wrapper').animate({'background-color': 'white'}, 500);
			$('#contact-button').animate({'color': 'white'}, 500);


			$('#bio-wrapper').animate({'height': '3%', 'background-color': 'white'}, 400);
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



});






$(window).bind('enterBreakpoint999',function() {
    

    console.log('Entering 999 breakpoint');

    $('#contact-button').click(function() {
			$('#contact-wrapper').animate({'background-color': '#0DC478'}, 500);

			$('body').css('background', 'url(https://s31.postimg.org/ns9l9namz/contact_pattern.png)');

			$('#modal').css('opacity', '0.92');

			$('.my_name').removeClass("my_name_red");
			$('.my_name').removeClass("my_name_blue");
			$('.my_name').addClass("my_name_green");
			$('#my_title').css({'color':'#0DC478'}, 500);
			$('#contact-button').animate({'color': '#0DC478'}, 500);


			$('#projects-wrapper').delay(170).animate({'height': '6%', 'background-color': 'white'}, 400);
			$('.tool').animate({'background-color': 'white'}, 600);
			$('.screens').animate({'opacity': '0'}, 500);
			$('#projects-button').animate({'color': 'white'}, 500);


			$('#bio-wrapper').animate({'height': '3%', 'background-color': 'white'}, 400);
			$('#bio-button').animate({'color': 'white'}, 500);
		})



		$('#projects-button').click(function() {
			$('#projects-wrapper').animate({'height': '77%', 'background-color': '#0095F9'}, 500);
			$('.tool').animate({'background-color': '#FF4956'}, 800);
			$('.screens').animate({'opacity': '1'}, 800);

			$('body').css('background', 'url(https://s32.postimg.org/6ds3m8pxh/projects_pattern.png)');

			$('#modal').css('opacity', '0.92');

			$('.my_name').removeClass("my_name_green");
			$('.my_name').removeClass("my_name_red");
			$('.my_name').addClass("my_name_blue");
			$('#my_title').css({'color':'#0095F9'}, 500);
			$('#projects-button').animate({'color': '#0095F9'}, 500);


			$('#contact-wrapper').animate({'background-color': 'white'}, 500);
			$('#contact-button').animate({'color': 'white'}, 500);


			$('#bio-wrapper').animate({'height': '3%', 'background-color': 'white'}, 400);
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



});











// function checkSize(){
// 	if ($("#contacters-1").css("float") == 'left' ){

// 		$('#contact-button').click(function() {
// 			$('#contact-wrapper').animate({'background-color': '#0DC478'}, 500);

// 			$('body').css('background', 'url(https://s31.postimg.org/ns9l9namz/contact_pattern.png)');

// 			$('#modal').css('opacity', '0.92');

// 			$('.my_name').removeClass("my_name_red");
// 			$('.my_name').removeClass("my_name_blue");
// 			$('.my_name').addClass("my_name_green");
// 			$('#my_title').css({'color':'#0DC478'}, 500);
// 			$('#contact-button').animate({'color': '#0DC478'}, 500);


// 			$('#projects-wrapper').delay(170).animate({'height': '6%', 'background-color': 'white'}, 400);
// 			$('.tool').animate({'background-color': 'white'}, 600);
// 			$('.screens').animate({'opacity': '0'}, 500);
// 			$('#projects-button').animate({'color': 'white'}, 500);


// 			$('#bio-wrapper').animate({'height': '3%', 'background-color': 'white'}, 400);
// 			$('#bio-button').animate({'color': 'white'}, 500);
// 		})



// 		$('#projects-button').click(function() {
// 			$('#projects-wrapper').animate({'height': '77%', 'background-color': '#0095F9'}, 500);
// 			$('.tool').animate({'background-color': '#FF4956'}, 800);
// 			$('.screens').animate({'opacity': '1'}, 800);

// 			$('body').css('background', 'url(https://s32.postimg.org/6ds3m8pxh/projects_pattern.png)');

// 			$('#modal').css('opacity', '0.92');

// 			$('.my_name').removeClass("my_name_green");
// 			$('.my_name').removeClass("my_name_red");
// 			$('.my_name').addClass("my_name_blue");
// 			$('#my_title').css({'color':'#0095F9'}, 500);
// 			$('#projects-button').animate({'color': '#0095F9'}, 500);


// 			$('#contact-wrapper').animate({'background-color': 'white'}, 500);
// 			$('#contact-button').animate({'color': 'white'}, 500);


// 			$('#bio-wrapper').animate({'height': '3%', 'background-color': 'white'}, 400);
// 			$('#bio-button').animate({'color': 'white'}, 500);
// 		}) 



// 		$('#bio-button').click(function() {
// 			$('#bio-wrapper').delay(170).animate({'height': '74%', 'background-color': '#FF4956'}, 350);

// 			$('body').css('background', 'url(https://s-media-cache-ak0.pinimg.com/236x/c5/31/0c/c5310cd8e766595915405683d7bd3cb1.jpg)');

// 			$('#modal').css('opacity', '0.97');

// 			$('.my_name').removeClass("my_name_green");
// 			$('.my_name').removeClass("my_name_blue");
// 			$('.my_name').addClass("my_name_red");
// 			$('#my_title').css({'color':'#FF4956'}, 500);
// 			$('#bio-button').animate({'color': '#FF4956'}, 500);


// 			$('#contact-wrapper').animate({'background-color': 'white'}, 500);
// 			$('#contact-button').animate({'color': 'white'}, 500);


// 			$('#projects-wrapper').animate({'height': '77%', 'background-color': 'white'}, 350);
// 			$('.tool').animate({'background-color': 'white'}, 600);
// 			$('.screens').animate({'opacity': '0'}, 500);
// 			$('#projects-button').animate({'color': 'white'}, 500);
// 		}) 
// 	}
// }








// //Function to the css rule
// function checkSize2(){
//     if ($("#contacters-1").css("float") == 'none' ){
        
// 			  $('#contact-button').click(function() {

// 					$('#bio-wrapper').css('visibility', 'hidden');
// 					$('#projects-wrapper').css('visibility', 'hidden');
// 					$('#contact-wrapper').css('visibility', 'visible');

// 					$('body').css('background', 'url(https://s31.postimg.org/ns9l9namz/contact_pattern.png)');

// 					$('#modal').css('opacity', '0.92');

// 					$('.my_name').removeClass("my_name_red");
// 					$('.my_name').removeClass("my_name_blue");
// 					$('.my_name').addClass("my_name_green");
// 					$('#my_title').css({'color':'#0DC478'}, 500);

// 					$('#projects-button').css('color', 'white');

// 					$('#contact-button').css('color', '#0DC478');

// 					$('#bio-button').css('color', 'white');
// 				})



// 				$('#projects-button').click(function() {

// 					$('#contact-wrapper').css('visibility', 'hidden');
// 					$('#bio-wrapper').css('visibility', 'hidden');
// 					$('#projects-wrapper').css('visibility', 'visible');

// 					$('body').css('background', 'url(https://s32.postimg.org/6ds3m8pxh/projects_pattern.png)');

// 					$('#modal').css('opacity', '0.92');

// 					$('.my_name').removeClass("my_name_green");
// 					$('.my_name').removeClass("my_name_red");
// 					$('.my_name').addClass("my_name_blue");
// 					$('#my_title').css({'color':'#0095F9'}, 500);

// 					$('#projects-button').css('color', '#0095F9');

// 					$('#contact-button').css('color', 'white');

// 					$('#bio-button').css('color', 'white');
// 				}) 



// 				$('#bio-button').click(function() {

// 					$('#contact-wrapper').css('visibility', 'hidden');
// 					$('#projects-wrapper').css('visibility', 'hidden');
// 					$('#bio-wrapper').css('visibility', 'visible');

// 					$('body').css('background', 'url(https://s-media-cache-ak0.pinimg.com/236x/c5/31/0c/c5310cd8e766595915405683d7bd3cb1.jpg)');

// 					$('#modal').css('opacity', '0.97');

// 					$('.my_name').removeClass("my_name_green");
// 					$('.my_name').removeClass("my_name_blue");
// 					$('.my_name').addClass("my_name_red");
// 					$('#my_title').css({'color':'#FF4956'}, 500);

// 					$('#projects-button').css('color', 'white');

// 					$('#contact-button').css('color', 'white');

// 					$('#bio-button').css('color', '#FF4956');
// 				}) 

//     }



// }




});
