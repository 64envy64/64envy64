gsap.registerPlugin(ScrollTrigger);

const textElements = gsap.utils.toArray(".text");

textElements.forEach((text) => {
  gsap.to(text, {
    backgroundSize: "100%",
    ease: "none",
    scrollTrigger: {
      trigger: text,
      start: "center 80%",
      end: "center 20%",
      scrub: true
    }
  });
});

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

// Функция для плавного скрытия элемента
function fadeOut(element, duration) {
  element.style.transition = `opacity ${duration / 1000}s ease-out`;
  element.style.opacity = 0;
  setTimeout(() => {
    element.style.display = 'none';
  }, duration);
}

// Функция для плавного скрытия элемента
function fadeOut(element, duration) {
  element.style.transition = `opacity ${duration / 1000}s ease-out`;
  element.style.opacity = 0;
  setTimeout(() => {
    element.style.display = 'none';
  }, duration);
}

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

/*-- PARALLAXBACK --*/
document.addEventListener('DOMContentLoaded', function () {
    const courseSection = document.querySelector('.course');
    const video = document.getElementById('backgroundVideo');

    window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;

      // Изменяем translateY для создания эффекта параллакса
      video.style.transform = `translateY(${scrollPosition / 2}px)`;
    });
  });

// scrollReveal.js
document.addEventListener('DOMContentLoaded', function () {
  ScrollReveal().reveal('.about-header h1', { delay: 800, origin: 'top', distance: '20px', duration: 800 });
  ScrollReveal().reveal('.num-header h1', { delay: 700, origin: 'top', distance: '20px', duration: 800 });
  ScrollReveal().reveal('#firstset', { delay: 300, origin: 'left', distance: '200px', duration: 800 });
  ScrollReveal().reveal('#secondset', { delay: 300, origin: 'top', distance: '20px', duration: 800 });
  ScrollReveal().reveal('#thirdset', { delay: 350, origin: 'right', distance: '200px', duration: 800 });
  ScrollReveal().reveal('#firstcard', { delay: 300, origin: 'left', distance: '20px', duration: 800 });
    ScrollReveal().reveal('#secondcard', { delay: 150, origin: 'top', distance: '20px', duration: 800 });
    ScrollReveal().reveal('#thirdcard', { delay: 300, origin: 'right', distance: '20px', duration: 800 });
});
