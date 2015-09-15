$(document).ready(function(){
	if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
	    skrollr.init({
	        forceHeight: false
	    });
	}

	if (window.matchMedia("(min-width: 760px)").matches) {
		$("#collection-copy").stick_in_parent();
		console.log('Sticky');
	} else {
		$("#collection-copy").trigger("sticky_kit:detach");
		console.log('Not sticky');
	}

	$(window).resize(function(){
		if (window.matchMedia("(min-width: 760px)").matches) {
			$("#collection-copy").stick_in_parent();
			console.log('Above 760');
		} else {
			$("#collection-copy").trigger("sticky_kit:detach");
		}
	})

	window.onload = function() {
	    var elements = document.querySelectorAll( '.collection-imagery__image img' );
	    Intense( elements );
	};

	var feed = new Instafeed({
        get: 'tagged',
        tagName: 'awesome',
        clientId: 'YOUR_CLIENT_ID'
    });
    feed.run();

    if ($('#instafeed').length){
	    var userFeed = new Instafeed({
	        get: 'user',
	        userId: 1591524257,
	        accessToken: '1591524257.467ede5.48507d949bd44197858d4440b5e74b72',
	        resolution: 'standard_resolution',
	        limit: 6
	    });
	    userFeed.run();
	  }

});