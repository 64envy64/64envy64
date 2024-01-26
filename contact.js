/*-- PRELOADER --*/
document.addEventListener("DOMContentLoaded", function () {
  // Добавляем класс "loading" при начале загрузки
  document.body.classList.add("loading");

  // Создаем дополнительный div для блокировки скролла
  const scrollBlocker = document.createElement('div');
  scrollBlocker.classList.add('scroll-blocker');
  document.body.appendChild(scrollBlocker);

  // Симулируем задержку загрузки контента (удалим это в реальном сценарии)
  setTimeout(function () {
    // Удаляем класс "loading" при завершении загрузки
    document.body.classList.remove("loading");

    // Скрываем прелоадер плавно
    fadeOut(document.querySelector('.preloader'), 500); // 

    // Удаляем блокировщик скролла
    document.body.removeChild(scrollBlocker);
  }, 1000); //
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
