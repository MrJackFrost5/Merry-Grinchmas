console.log("this works");
//document.querySelector("#vid").src = "../grinch_clips/Christmas_tree.mp4";
var video = document.querySelector("#vid");
video.src = "grinch_clips/Christmas_tree.mp4";

function playVid() {
    video.play()
}
