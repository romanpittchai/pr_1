$(document).ready(function () {
  $(".slider").slick({
    infinite: true,
    speed: 800,
    easing: "ease",
    draggable: false,
    swipe: true,
    touchMove: true,
    slidesToShow: 2,
    variableWidth: true,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: true,
    draggable: true,
    respondTo: "slick",
    arrows: false,
    dots: true,
  });
});
