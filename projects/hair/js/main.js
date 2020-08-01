function openNav() {
	var media = window.matchMedia("only screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape)");
	if (media.matches) { // If media query matches
		document.getElementById("mySidenav").style.width = "65%";
		document.getElementById("close-nav").style.width = "100%";
	} else {
		document.getElementById("mySidenav").style.width = "70%";
		document.getElementById("close-nav").style.width = "100%";
	}
	document.body.style.overflowY = "hidden";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("close-nav").style.width = "0";
	document.body.style.overflowY = "auto";
}

$(document).ready(function () {
	$(".toggle").on("click", function (e) {
		var toggle = $(e.currentTarget);
		if (toggle.attr("aria-expanded") === "true") {
			$(this).attr("title", "Show");
		} else {
			$(this).attr("title", "Hide");
		};
	});
});

lightGallery(document.getElementById('lightgallery'));

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
	var bodyWidth = $("body").width();
	var a4Width = $("#A4").width();
	var width = (bodyWidth - a4Width) / 2 - 75;
	$("#change-language").css("right", width);
});

$(document).ready(function () {
	$("#mySidenav ul li a").click(function () {
		var href = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(href).offset().top - 60
		}, 1000);
		$("#mySidenav").css("width", "0");
		document.body.style.overflowY = "auto";
		$("#close-nav").css("width", "0");
	});
});

function loader() {
	myVar = setTimeout(showPage, 800);
}

function showPage() {
	document.getElementById("loader").style.display = "none";
	document.body.style.display = "block";
}

var changeColor = function () {
	if ($(document).scrollTop() >= 30) {
		$('#top-menu').addClass('white');
		$('#top-menu .social').addClass('white');
		$('#top-menu .social svg').addClass('white');
		$('#top-menu .tooltiptext').addClass('white');
		$('.dropbtn-language').addClass('white');
		$('.dropdown-content').addClass('white');
		$('.dropdown-content-language').addClass('white');
		$('.dropdown-content a').addClass('white');
		$('.dropdown-content-language a').addClass('white');
		$('header').addClass('white');
		$('.dropdown').addClass('white');
		$('.dropbtn-language').addClass('white');
		$('#logo img').attr('src', 'img/logo-black.png');
	} else {
		$('#top-menu').removeClass('white');
		$('#top-menu .social').removeClass('white');
		$('#top-menu .social svg').removeClass('white');
		$('#top-menu .tooltiptext').removeClass('white');
		$('.dropbtn-language').removeClass('white');
		$('.dropdown-content').removeClass('white');
		$('.dropdown-content-language').removeClass('white');
		$('.dropdown-content a').removeClass('white');
		$('.dropdown-content-language a').removeClass('white');
		$('header').removeClass('white');
		$('.dropdown').removeClass('white');
		$('.dropbtn-language').removeClass('white');
		$('#logo img').attr('src', 'img/logo.png');
	}
};
$(document).bind('scroll', changeColor);

$(document).ready(function () {
	$(".carousel").carousel({
		interval: 5000,
		pause: 'false'
	});
});

$(document).ready(function () {
	var width = $("#item-1").width();
	$("#btn-left").click(function () {
		var scrollPosition = $("#products-div").scrollLeft();
		var scroll = scrollPosition - width;
		$("#products-div").animate({
			scrollLeft: scroll
		}, 800);
		if (scrollPosition === 0) {
			$("#btn-left").prop("disabled", true);
		} else {
			$("#btn-right").prop("disabled", false);
		};
	});
	$("#btn-right").click(function () {
		$("#btn-left").prop("disabled", false);
		var scrollPosition = $("#products-div").scrollLeft();
		var scroll = scrollPosition + width;
		$("#products-div").animate({
			scrollLeft: scroll
		}, 800);
		var widthScroll = $("#products-div").prop("scrollWidth") - $("#products-div").width();;
		if (scroll >= widthScroll) {
			$("#btn-right").prop("disabled", true);
		};
	});
});

$(document).ready(function () {
	$(".dropbtn").click(function () {
		var header = $("header").outerHeight();
		var href = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(href).offset().top - header
		}, 1000);
	});
	$(".topBar li a").click(function () {
		$(".topBar").removeClass("topBar-show");
		$("#topBar").removeClass("topBar-height");
		$(".hamburger.hamburger--elastic-r").removeClass("is-active");
		$("body").css("overflow", "auto");
		var href = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(href).offset().top - 20
		}, 1000);
	});
});

$(document).ready(function () {
	$(".hamburger.hamburger--elastic-r").click(function () {
		if ($(this).hasClass("is-active")) {
			$(this).removeClass("is-active");
			$("body").css("overflow", "auto");
			$("#topBar").css("overflow", "unset");
			$("#topBar").removeClass("topBar-height");
			$("#topBar .topBar").removeClass("topBar-show");
		} else {
			$(this).addClass("is-active");
			$("body").css("overflow", "hidden");
			$("#topBar").addClass("topBar-height");
			$("#topBar").css("overflow", "auto");
			$("#topBar .topBar").addClass("topBar-show");
		}
	});
});

$(document).ready(function () {
	$("#language").click(function () {
		$(".dropdown-content-topBar").toggle();
	});
	$("body").click(function (e) {
		if ($(e.target).closest("#language").length != 0) return false;
		$(".dropdown-content-topBar").hide();
	});
});
