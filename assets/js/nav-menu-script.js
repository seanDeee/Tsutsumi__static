//Mobile Menu Script
jQuery(document).ready(function ($) {
    $(".nav-menu-open").css("cursor", "pointer");
    $(".nav-menu-open").on('click', function () {
        $(".nav-menu-open").show();
        $("#menu-nav").slideToggle(400);
    });
});