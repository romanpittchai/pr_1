$(document).ready(function () {
  $(".slider").slick({
    infinite: true,
    speed: 800,
    easing: "ease",
    draggable: false,
    swipe: true,
    touchMove: true,
    slidesToShow: 1,
    variableWidth: true,
    adaptiveHeight: true,
    // centerMode: true,
    centerPadding: true,
    draggable: true,
    respondTo: "slick",
    // arrows: false,

    // responsive: [
    //   {
    //     breakpoint: 1180,
    //     settings: {
    //       slidesToShow: 1,
    //       variableWidth: true,
    //       respondTo: "slick",
    //     },
    //     breakpoint: 1010,
    //     settings: {
    //       slidesToShow: 1,
    //       variableWidth: true,
    //       respondTo: "slick",
    //     },
    //   },
    // ],
  });
});
