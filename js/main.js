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

    // scroll to Our work 
    $('.go-team').click(function () {
        $('html, body').animate({
            scrollTop: $('.team').offset().top
        }, 1000);
    });

    // scroll to features 
    $('.go-works').click(function () {
        $('html, body').animate({
            scrollTop: $('.works').offset().top
        }, 1000);
    });
    
    // works images hover
    $('.works .items-box .item').hover(function () {
        $(this).children(".overlay").fadeIn();
    },
    function () {
        $(this).children(".overlay").fadeOut();
    });

    // show hidden item from work
    $('.works .more').click(function () {
        $('.works .hidden').fadeIn().removeClass('hidden');
    });

    // check testomonials
    var leftArrow = $('.testimonials .fa-chevron-left'),
        rightArrow = $('.testimonials .fa-chevron-right');

    function checkClient() {
        $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
        $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
    }

    checkClient();

    // testimonials slider
    $('.testimonials i').click(function () {
        if($(this).hasClass('fa-chevron-right')) {
            $('.client.active').fadeOut(1000, function () {
                $(this).removeClass('active').next('.client').addClass('active').fadeIn(1000);
                checkClient();
            });
        } 
        else {
            $('.client.active').fadeOut(1000, function () {
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn(1000);
                checkClient();
            });
        }
    });

    // trigger nice scroll
    $('html').niceScroll({
        cursorcolor: '#f7600e'
    });
});