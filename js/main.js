/*global $, alert. console*/

$(function () {

    'use strict';

    // change header's height
    $('header').innerHeight($(window).innerHeight());
    $(window).resize(function () {
        $('header').innerHeight($(window).innerHeight());
    });

    // toggle menu
    var toggleMenu = $('.toggle-menu');
    var links = $('.links');
    toggleMenu.click(function (e) {
        e.stopPropagation();
        links.toggleClass('open');
    });
    links.click(function (e) {
        e.stopPropagation();
    });
    // click everywhere to hide menu links
    $(document).click(function (e) {
        if(e.target !== links && e.target !== toggleMenu) {
            if(links.has('.open')) {
                links.removeClass('open');
            }
        }
    });

    // add click event to the links
    $("header .links li a").click(function () {
        $("html, body").animate({
            // smoth scroll
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
    });

    // scroll to features 
    $('header .arrow i').click(function () {
        $('html, body').animate({
            scrollTop: $('.features').offset().top
        }, 1000);
    });
    
    // trigger nice scroll
    $('html').niceScroll({
        cursorColor: '#f7600e'
    });
});