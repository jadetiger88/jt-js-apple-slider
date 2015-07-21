

$(document).ready(function() {
	var lastIndex = 0; 
	var autoPlayIndex = 0; 
	var autoPlayFlag = false;
	$('.thumbnail-image').click(function(e, autoScroll){
		$('.active-thumbnail').removeClass('active-thumbnail');
		$(this).addClass('active-thumbnail'); 

		var index = $(this).prevAll().length; 
		var speed = 500 * (Math.abs(index - lastIndex)); 
		$("#main-display").stop().animate({marginLeft:'-'+index*900+'px'}, speed);
		lastIndex = index; 
    autoPlayIndex = index;
	});

     var autoPlay = null;
     var duration = 5000 // 3000 ms 
   	$('#auto-play img').click(function() {
   		if (autoPlayFlag == true) {
   			$(this).attr("src", "img/play.png"); 
   			autoPlayFlag = false;
   			clearInterval(autoPlay); 
   		} else {
   			$(this).attr("src", "img/stop.png"); 
   			autoPlayFlag = true;
   			autoPlay = setInterval(play, duration); 
    	}
   	})

   	function play () {
   		autoPlayIndex = ++autoPlayIndex%($('.thumbnail-image').length); 
   		$('.thumbnail-image').eq(autoPlayIndex).trigger('click', [true]);
   	}
});
