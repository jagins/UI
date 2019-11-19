var menuToggled = false;

$(document).ready(function() {

    $('#mobile-menu-toggle').click(() => toggleMenu());

});

function toggleMenu() { 

    if (menuToggled)
        $('#mobile-nav-wrapper').height('0px');
    else
        $('#mobile-nav-wrapper').height('200px');

    menuToggled = !menuToggled;

}

function changeImage(id, src) {

    document.getElementById(id).src = src;

}