// SCROLL NAVIGATION
$(window).scroll(function() {
    var currentPos = $(this).scrollTop();
    var topNav = $('.top-nav');
    var searchbar = $('#searchbar');
    if(currentPos >= searchbar.offset().top) {
        topNav.addClass('active');
    } else {
        topNav.removeClass('active');
    }
});

// TAB NAVIGATION
$("#tab-navigation-wrapper ul li a").click(function() {
    $("#tab-navigation-wrapper ul li a.active").removeClass('active');
    $(this).toggleClass('active');
});
