$(document).ready(function(){
	if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
	    skrollr.init({
	        forceHeight: false
	    });
	    
	}


	$("#collection-copy").stick_in_parent();
	
	if (window.matchMedia("(max-width: 759px)").matches) {
		$("#collection-copy").trigger("sticky_kit:detach");
	}

	$(window).resize(function(){
		if (window.matchMedia("(max-width: 759px)").matches) {
			$("#collection-copy").trigger("sticky_kit:detach");
		}
	})

	window.onload = function() {
	    var elements = document.querySelectorAll( '.collection-imagery__image img' );
	    Intense( elements );
	};
});