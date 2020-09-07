$(document).ready(function () {
  $(".header-burger").click(function (event) {
    $(".header-burger, .header-menu__box").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
