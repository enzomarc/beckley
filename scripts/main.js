$(document).ready(function(){
	if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
	    skrollr.init({
	        forceHeight: false
	    });
	    
	}

	if (window.matchMedia("(min-width: 760px)").matches) {
	  $("#collection-copy").stick_in_parent();
	  console.log('Above 760');
	}

	window.onload = function() {
	    var elements = document.querySelectorAll( '.collection-imagery__image img' );
	    Intense( elements );
	};
});