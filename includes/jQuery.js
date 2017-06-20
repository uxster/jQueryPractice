$(document).ready(function() {

	$("#pokemon").click(function() {	
		$("img").hide();				 
	})

	// $("#pokemon").mouseEnter(function() {
	// 	$("img").fadeIn();
	// })

	$("button").click(function() {
		$("img").show("slow");
	})

});