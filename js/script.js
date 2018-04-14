$(document).ready(function(){
  $('#slides').superslides({
    animation: 'fade',
    play: 5000,
    pagination: false
  });

// https://github.com/mattboldt/typed.js/
  let typed = new Typed(".typed", {
    strings: ["Software Engineer.", "Full Stack Developer.", "Tech Blogger."],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });
});
