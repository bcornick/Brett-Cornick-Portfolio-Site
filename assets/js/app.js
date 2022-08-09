// Page loading animation
$(window).on("load", function () {
  if ($(".cover").length) {
    $(".cover").parallax({
      imageSrc: $(".cover").data("image"),
      zIndex: "1",
    });
  }

  $("#preloader").animate(
    {
      opacity: "0",
    },
    600,
    function () {
      setTimeout(function () {
        $("#preloader").css("visibility", "hidden").fadeOut();
      }, 300);
    }
  );
});

const titleBtn = document.querySelector("#title-btn");
const titlePic = document.querySelector("#title-pic");
const glasses = document.querySelector("#glasses-pic");
const titleVid = document.querySelector("#title-video");
const topVid = document.querySelector("#top-video");
const complete = document.querySelector("#complete");
const titleSect = document.querySelector("#contact-us");
const h1 = document.querySelector("h1");
const sect1 = document.querySelector("#services");
const sect2 = document.querySelector("#portfolio");
const sect3 = document.querySelector("#our-story");
const footer = document.querySelector("footer");
const html = document.querySelector("html");

titleBtn.addEventListener("click", () => {
  glasses.style.bottom = "185px";
  titlePic.style.filter = "saturate(0.85)";
  titleVid.play();
  topVid.play();

  setTimeout(() => {
    loading.classList.remove("hidden");
  }, 500);
  setTimeout(() => {
    complete.classList.remove("hidden");
  }, 3500);
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    html.style.overflowY = "scroll";
  }, 4500);
  setTimeout(() => {
    titleSect.style.display = "none";
    document.body.style.backgroundColor = "black";
    footer.classList.remove("hidden");
    titleVid.pause();
  }, 5000);
  setTimeout(() => {
    h1.classList.add("flicker-animation");
  }, 6000);
});

jQuery(document).ready(function ($) {
  "use strict";

  var top_header = $(".parallax-content");
  top_header.css({ "background-position": "center center" }); // better use CSS

  $(window).scroll(function () {
    var st = $(this).scrollTop();
    top_header.css({
      "background-position": "center calc(50% + " + st * 0.5 + "px)",
    });
  });

  $("body").scrollspy({
    target: ".fixed-side-navbar",
    offset: 200,
  });

  // smoothscroll on sidenav click

  $(".tabgroup > div").hide();
  $(".tabgroup > div:first-of-type").show();
  $(".tabs a").click(function (e) {
    e.preventDefault();
    var $this = $(this),
      tabgroup = "#" + $this.parents(".tabs").data("tabgroup"),
      others = $this.closest("li").siblings().children("a"),
      target = $this.attr("href");
    others.removeClass("active");
    $this.addClass("active");
    $(tabgroup).children("div").hide();
    $(target).show();
  });

  var owl = $("#owl-testimonials");

  owl.owlCarousel({
    pagination: true,
    paginationNumbers: false,
    autoPlay: false, //Set AutoPlay to 3 seconds
    items: 3, //10 items above 1000px browser width
    itemsDesktop: [1000, 3], //5 items between 1000px and 901px
    itemsDesktopSmall: [900, 2], // betweem 900px and 601px
    itemsTablet: [600, 1], //2 items between 600 and 0
    itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
  });
});
