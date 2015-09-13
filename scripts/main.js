$(document).ready(function(){
	if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
	    skrollr.init({
	        forceHeight: false
	    });
	    
	}

	$("#collection-copy").stick_in_parent();

	window.onload = function() {
	    var elements = document.querySelectorAll( '.collection-imagery__image img' );
	    Intense( elements );
	};
});