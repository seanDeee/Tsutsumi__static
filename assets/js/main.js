// scroll effect on anchor tag to id
function scroll() {
    $('a[href^="#"]').click(function () {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('html, body').stop().animate({
            scrollTop: position
        }, 500, 'swing');
        return false;
    });
}

$(function () {
    scroll();
});


$(window).on('load resize', function () {}); // resize






//Mobile Menu Script
jQuery(document).ready(function ($) {
    $(".nav-menu-close").hide();
    $(".nav-menu-close").css("cursor", "pointer");
    $(".nav-menu-open").css("cursor", "pointer");
    $(".nav-menu-open").on('click', function () {
        $(".nav-menu-close").show();
        $(".nav-menu-open").hide();
        $("#menu-nav").slideToggle(400);
    });
});
$(".nav-menu-close").on('click', function () {
    $(".nav-menu-close").hide();
    $(".nav-menu-open").show();
    $("#menu-nav").slideToggle(400);
});


// ===== Scroll to Top ==== 
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200); // Fade in the arrow
    }
});
$('#return-to-top').click(function () { // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0 // Scroll to top of body
    }, 1000);
});