/*-- PRELOADER --*/
document.addEventListener("DOMContentLoaded", function () {
    // Simulate content loading delay (you can remove this in a real scenario)
    setTimeout(function () {
        document.body.classList.add("loaded");
    }, 1500); // Change the delay time as needed
});

/*-- BACKTOTOP --*/
var btn = $('#back-to-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// scrollReveal.js

document.addEventListener('DOMContentLoaded', function () {
  ScrollReveal().reveal('.course h2', { delay: 100, origin: 'top', distance: '20px', duration: 800 });
  ScrollReveal().reveal('.campus h2', { delay: 300, origin: 'top', distance: '20px', duration: 800 });
  ScrollReveal().reveal('#firstimg', { delay: 300, origin: 'left', distance: '20px', duration: 800 });
  ScrollReveal().reveal('#secondimg', { delay: 300, origin: 'bottom', distance: '20px', duration: 800 });
  ScrollReveal().reveal('#thirdimg', { delay: 300, origin: 'right', distance: '20px', duration: 800 });
    ScrollReveal().reveal('.accordion-text .title', { delay: 300, origin: 'bottom', distance: '20px', duration: 800 });
    ScrollReveal().reveal('.partners h2', { delay: 300, origin: 'top', distance: '20px', duration: 800 });
    ScrollReveal().reveal('#firstbox', { delay: 300, origin: 'right', distance: '20px', duration: 800 });
    ScrollReveal().reveal('#secondbox', { delay: 300, origin: 'top', distance: '20px', duration: 800 });
    ScrollReveal().reveal('#thirdbox', { delay: 300, origin: 'left', distance: '20px', duration: 800 });
    ScrollReveal().reveal('#firstcourse', { delay: 300, origin: 'left', distance: '20px', duration: 800 });
    ScrollReveal().reveal('#secondcourse', { delay: 300, origin: 'bottom', distance: '20px', duration: 800 });
    ScrollReveal().reveal('#thirdcourse', { delay: 300, origin: 'right', distance: '20px', duration: 800 });
});
