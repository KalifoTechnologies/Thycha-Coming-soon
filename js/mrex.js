/*
  [JS Index]
  
  ---
  
  Template Name: Mrex - Coming Soon Template
  Author:  ex-nihilo
  Version: 1.0
*/


/*
  1. preloader
  2. fadeIn.element
  3. slick slider
	3.1. slick fullscreen slideshow ZOOM/FADE
  4. countdown
    4.1. countdown timer
	4.2. countdown SETUP
  5. fullPage
    5.1. fullPage direction
	5.2. fullPage toggle active
  6. charts
    6.1. chart about
  7. forms
    7.1. newsletter form
	7.2. contact form
  8. YouTube player
  9. twitter ticker
    9.1. twitter ticker SETUP
  10. clone function
    10.1. horizontal stripes
*/


$(function() {
    "use strict";
	
	
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);
		
        // 2. fadeIn.element
        setTimeout(function() {
            $(".fadeIn-element").delay(800).css({
                display: "none"
            }).fadeIn(2000);
        }, 0);
    });
	
    // 3. slick slider
    // 3.1. slick fullscreen slideshow ZOOM/FADE
    $(".slick-fullscreen-slideshow-zoom-fade").slick({
        arrows: false,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
        speed: 1600,
        draggable: true,
        dots: false,
        pauseOnDotsHover: true,
        pauseOnFocus: false,
        pauseOnHover: false
    });
	
    // 4. countdown
    $(document).on("ready", function() {
        // 4.1. countdown timer
        $(".countdown").countdown({
            until: new Date(Date.parse(setting.counter.lastDate)),
            layout: $(".countdown").html(),
            timezone: setting.counter.timeZone
        });
    });
    // 4.2. countdown SETUP
    var setting = {
        counter: {
            lastDate: "05/05/2025 12:00:00", // target date settings, 'MM/DD/YYYY HH:MM:SS'
            timeZone: null
        }
    };
	
    // 5. fullPage
    $("#fullpage").fullpage({
		anchors: ["home", "about", "launch", "contact"],
		menu: "#fullpage__menu",
        navigation: true,
        navigationPosition: "right",
        navigationTooltips: ["Home", "About", "Launch", "Contact"],
        responsiveWidth: 1024,
        autoScrolling: true,
        scrollBar: false,
        css3: true,
        verticalCentered: true,
        onLeave: function(index, nextIndex, direction) {
            var idx = Math.abs(index - nextIndex) * 0.1;
			$.fn.fullpage.setScrollingSpeed(idx * 12000);
            change(index, direction);
        },
        afterResponsive: function(isResponsive) {}
    });
    // 5.1. fullPage direction
    function change(index, direction) {
        if (direction == "down") {
            $(".section" + index).removeClass("active");
            $(".section" + (index + 1)).addClass("active");
            $(".introduction").removeClass("introduction-on").addClass("introduction-off");
        } else if (direction == "up") {
            $(".section" + index).removeClass("active");
            $(".section" + (index - 1)).addClass("active");
            $(".introduction").removeClass("introduction-off").addClass("introduction-on");
        }
    }
	// 5.2. fullPage toggle active
	$("#fullpage__menu").on("click", function() {
		$(this).toggleClass("is-active");
		$("#fullpage").toggleClass("menu-is-active")
	});
	
    // 6. charts
    // 6.1. chart about
    $(".chart-appear-about").appear(function() {
        $(".chart-about").easyPieChart({
            easing: "easeOutBounce",
            onStep: function(from, to, percent) {
                $(this.el).find(".percent-about").text(Math.round(percent));
            }
        });
    });
	
    // 7. forms
    // 7.1. newsletter form
    $("form#subscribe").on("submit", function() {
        $("form#subscribe .subscribe-error").remove();
        $.post("subscribe.php");
        var s = !1;
        if ($(".subscribe-requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter your Email</span>'),
                    $(this).addClass("inputError"), s = !0;
                else if ($(this).hasClass("subscribe-email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter a valid Email</span>'),
                        $(this).addClass("inputError"), s = !0);
                }
            }), !s) {
            $("form#subscribe input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#subscribe").slideUp("fast", function() {
                    $(this).before('<div class="subscribe-success">Thank you for subscribing.</div>');
                });
            });
        }
        return !1;
    });
    // 7.2. contact form
    $("form#form").on("submit", function() {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                    "inputError"), s = !0;
                else if ($(this).hasClass("email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                        "inputError"), s = !0);
                }
            }), !s) {
            $("form#form input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });
	
	// 8. YouTube player
    $("#bgndVideo").YTPlayer();
	
    // 9. twitter ticker
    $("#ticker").tweet({
        username: "enihilo", // Twitter User Name
        page: 1,
        avatar_size: 0,
        count: 20,           // Number of Tweets
        loading_text: ""
	}).on("bind", function() {
        var ul = $(this).find(".tweet_list");
        var ticker = function() {
            setTimeout(function() {
                ul.find('li:first').animate({
                    marginTop: '-75px'
                }, 500, function() {
                    $(this).detach().appendTo(ul).removeAttr('style');
                });
                ticker();
            }, 8000);
        };
        ticker();
    });
    // 9.1. twitter ticker SETUP
    $(this).find(".tweet_list").list_ticker({
        speed: 8000,
        effect: 'fade' // fade, slide
    });
	
	// 10. clone function
    $.fn.duplicate = function(count, cloneEvents, callback) {
        var stack = [],
            el;
        while (count--) {
            el = this.clone(cloneEvents);
            callback && callback.call(el);
            stack.push(el.get()[0]);
        }
        return this.pushStack(stack);
    };
    // 10.1. horizontal stripes
    $("<div class='upper-page'></div>").appendTo(".horizontal-stripes");
    $("<div class='running-teardrop'></div>").duplicate(4).appendTo(".upper-page");
	
	
});