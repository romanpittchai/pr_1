//youtube script
var tag = document.createElement("script");
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
let height_player = 650;
let width_player = 720;
if (window.matchMedia("(max-width: 991px)").matches) {
  (height_player = 530), (width_player = 600);
}
if (window.matchMedia("(max-width: 767px)").matches) {
  (height_player = 410), (width_player = 480);
}
if (window.matchMedia("(max-width: 600px)").matches) {
  (height_player = 360), (width_player = 420);
}
onYouTubeIframeAPIReady = function () {
  player = new YT.Player("player", {
    height: height_player,
    width: width_player,
    videoId: "AkyQgpqRyBY", // youtube video id

    playerVars: {
      autoplay: 0,
      rel: 0,
      showinfo: 0,
    },
    events: {
      onStateChange: onPlayerStateChange,
    },
  });
};

var p = document.getElementById("player");
$(p).hide();

var t = document.getElementById("thumbnail");
t.src = "/images/dest/video-pic.webp";

onPlayerStateChange = function (event) {
  if (event.data == YT.PlayerState.ENDED) {
    $(".start-video").fadeIn("normal");
  }
};

$(document).on("click", ".start-video", function () {
  $(this).hide();
  $("#player").show();
  $("#thumbnail_container").hide();
  player.playVideo();
});
