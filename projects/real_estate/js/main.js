$(document).ready(function () {
	if ($("#back-to-top").length) {
		var scrollTrigger = 500, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$("#back-to-top").addClass("show");
				} else {
					$("#back-to-top").removeClass("show");
				}
			};
		backToTop();
		$(window).on("scroll", function () {
			backToTop();
		});
		$("#back-to-top").on("click", function (e) {
			e.preventDefault();
			$("html, body").animate({
				scrollTop: 0
			}, 1000);
		});
	}
});

$(document).ready(function () {
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		var media = window.matchMedia("only screen and (min-width: 320px) and (max-width: 767px)");
		if (media.matches && scroll >= 500) {
			$("#sticky-social-bar").addClass("active");
		} else {
			$("#sticky-social-bar").removeClass("active");
		}
	});
});

$(document).ready(function () {
	$(".btn-rent").click(function () {
		$(this).addClass("active");
		$(".btn-sell").removeClass("active");
	});
	$(".btn-sell").click(function () {
		$(this).addClass("active");
		$(".btn-rent").removeClass("active");
	});
});

$('body').scrollspy({
	target: '#nav-bar'
});

$("#slideshow > div:gt(0)").hide();

setInterval(function () {
	$('#slideshow > div:first')
		.fadeOut(4000)
		.next()
		.fadeIn(4000)
		.end()
		.appendTo('#slideshow');
}, 12000);

$(document).ready(function () {
	$("#first-nav .nav-link").click(function () {
		var href = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(href).offset().top
		}, 1000);
	});
});

$(document).ready(function () {
	$('.grid-list').on('click', '.btn', function () {
		$(this).addClass('active').siblings().removeClass('active');
	});
});

$(document).ready(function () {
	$('.button-group.type').on('click', '.btn', function () {
		$(this).addClass('active').siblings().removeClass('active');
	});
});

$(document).on('click', function (event) {
	if (!$(event.target).closest("#login-div").length) {
		$("#login-div").removeClass("show");
	}
	if (!$(event.target).closest(".button-group.price").length) {
		$("#price").removeClass("show");
		$(".btn-price").attr("aria-expanded", "false");
	}
	if (!$(event.target).closest(".button-group.rooms").length) {
		$("#rooms").removeClass("show");
		$(".btn-rooms").attr("aria-expanded", "false");
	}
	if (!$(event.target).closest("#rent-div .button-group.type").length) {
		$("#type").removeClass("show");
		$(".btn-type").attr("aria-expanded", "false");
	}
	if (!$(event.target).closest("#buy-div .button-group.type-2").length) {
		$("#type-2").removeClass("show");
		$(".btn-type-2").attr("aria-expanded", "false");
	}
	if (!$(event.target).closest("#rent-div .button-group.space").length) {
		$("#space").removeClass("show");
		$(".btn-space").attr("aria-expanded", "false");
	}
	if (!$(event.target).closest("#buy-div .button-group.space-2").length) {
		$("#space-2").removeClass("show");
		$(".btn-space-2").attr("aria-expanded", "false");
	}
	if (!$(event.target).closest("#rent-div .button-group.year").length) {
		$("#year").removeClass("show");
		$(".btn-year").attr("aria-expanded", "false");
	}
	if (!$(event.target).closest("#buy-div .button-group.year-2").length) {
		$("#year-2").removeClass("show");
		$(".btn-year-2").attr("aria-expanded", "false");
	}
});

$(document).ready(function () {
	$(".btn-advanced-search").click(function () {
		if ($("#advanced-search-div").hasClass("show")) {
			$(".btn-advanced-search").html("Advanced search");
		} else {
			$(".btn-advanced-search").html("Close");
		};
	});
});

$(document).ready(function () {
	$(".hamburger").click(function () {
		if ($(this).hasClass("is-active")) {
			$(this).removeClass("is-active");
			$(".sidenav").removeClass("active");
			$("#close-nav").removeClass("active");
			$("body").css("overflow", "auto");
		} else {
			$(this).addClass("is-active");
			$(".sidenav").addClass("active");
			$("#close-nav").addClass("active");
			$("body").css("overflow", "hidden");
		}
	});
	$("#close-nav").click(function () {
		$(this).removeClass("active");
		$(".hamburger").removeClass("is-active");
		$(".sidenav").removeClass("active");
		$("body").css("overflow", "auto");
	});
	$("#login-mobile").click(function () {
		$("#login-div-mobile").addClass("active");
		$(".hamburger").removeClass("is-active");
		$(".sidenav").removeClass("active");
		$("#close-nav").removeClass("active");
		$("body").css("overflow", "auto");
		$("body").addClass("background");
	});
	$("#login-div-mobile .btn-close").click(function () {
		$("#login-div-mobile").removeClass("active");
		$("body").removeClass("background");
	});
});

$(document).ready(function () {
	$("#mobile-nav li a").click(function () {
		var href = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(href).offset().top
		}, 1000);
		$(".sidenav").removeClass("active");
		$(".hamburger").removeClass("is-active");
		$("#close-nav").removeClass("active");
		document.body.style.overflowY = "auto";
	});
});
