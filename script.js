// function toggleVideo() {
//     const trailer = document.querySelector('.trailer');
//     const video = document.querySelector('video');
//     video.pause();
//     trailer.classList.toggle('active')
// }

$(document).ready(function(){
    var $scramble = $(".etflix-text");
    $scramble.scramble(1500, 15,"alphabet", true);
});

var t1 = gsap.timeline();
t1.to(".etflix-text",{
    opacity: 0,
    delay: 2.5,
})
.to(".intro-container",{
    opacity: 0,
    duration: 0.5,
    ease:"Expo.easeInOut"
})