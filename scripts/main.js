if (window.matchMedia("(min-width: 760px)").matches) {
	$("#collection-copy").stick_in_parent();
	$("#collection-copy").removeClass('.collection-copy-fixed');
} else {
	$("#collection-copy").trigger("sticky_kit:detach");
}

$(window).resize(function(){
	if (window.matchMedia("(min-width: 760px)").matches) {
		$("#collection-copy").stick_in_parent();
		$("#collection-copy").removeClass('.collection-copy-fixed');
	} else {
		$("#collection-copy").trigger("sticky_kit:detach");
	}
})

$(document).ready(function(){

	console.log('Designed and developed by Ordinary Studios.');

	if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
	    skrollr.init({
	        forceHeight: false
	    });
	}

	if (window.matchMedia("(min-width: 760px)").matches) {
		$("#collection-copy").stick_in_parent();
	} else {
		$("#collection-copy").trigger("sticky_kit:detach");
	}

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
	        userId: 226305277,
	        accessToken: '226305277.467ede5.5cab4058fe0c461893536a7cab47ccd1',
	        resolution: 'standard_resolution',
	        limit: 6
	    });
	    userFeed.run();
	  }

});

$(window).load(function(){
	if (window.matchMedia("(min-width: 760px)").matches) {
		$("#collection-copy").stick_in_parent();
		$("#collection-copy").removeClass('.collection-copy-fixed');
		console.log('Sticky');
	} else {
		$("#collection-copy").trigger("sticky_kit:detach");
		console.log('Not sticky');
	}
});