

$("#collection-copy").stick_in_parent();

var s = skrollr.init();

window.onload = function() {
    // Intensify all images with the 'intense' classname.
    var elements = document.querySelectorAll( '.collection-imagery__image img' );
    Intense( elements );
};

