$(document).ready(function () {
  $(".screen-our-apartments__img-item-link").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: "mfp-no-margins mfp-with-zoom", // class to remove default margin from left and right side
    image: {
      verticalFit: true,
    },
    zoom: {
      enabled: true,
      duration: 500, // don't foget to change the duration also in CSS
    },
  });
});
