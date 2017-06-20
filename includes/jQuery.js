$(document).ready(function() {			//check to see if all the elements are loaded
	$('#welcome').click(function() {	//lookout for an element with the 'welcome' ID
		$('img').hide();				//when clicked, images will hide 
		$('body').css({					//and the background-color of body will change to #ffffff
			"background-color": "#FFFFFF";	//access this element of the css of body
		})
	})
});