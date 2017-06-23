$(document).ready(function() {

	$( ".pokeball" ).hide();

	$( "#pokemon" ).click(function() {	
		$( this ).fadeOut( 100 );
		$( ".pokeball" ).fadeIn();		 
	});

	$( "#release" ).click(function() {
		$( "#pokemon" ).show();
		$( ".pokeball" ).hide();
	});

	$( "#clean img" ).hover(function() {
  		$( this ).fadeOut( 2000 );
	});

	$( "#messy" ).click(function() {
		$( "#clean img" ).fadeIn( 2000 );
	});

	$( "#hideandseek" ).mouseover(function() {
    	$( "#jigglyimage" ).slideToggle( "slow", function(){
    	} );
	});

});