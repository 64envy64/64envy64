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

/*--TYPING EFF --*/
const dynamicText = document.querySelector("h1 span");
const words = ["KNOWLEDGE", "EDUCATION", "Wisdom", "Everything"];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();

/*-- FAQ BUTT --*/
const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )

/*-- PARTNERS --*/

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('carousel-container');
  const images = container.innerHTML;

  // Увеличьте количество повторений (в данном случае, 5 раз)
  const repeatCount = 7;

  // Дублируем изображения для увеличения повторений
  container.innerHTML = new Array(repeatCount).fill(images).join('');

  const duration = 35;
  const interval = 200;

  setInterval(() => {
    container.style.transition = `transform ${duration}s linear`;
    container.style.transform = 'translate3d(-100%, 0, 0)'; // Используем translate3d для улучшения производительности

    // Ждем завершения анимации и сбрасываем transform
    setTimeout(() => {
      container.style.transition = 'none';
      container.style.transform = 'translate3d(0, 0, 0)';
    }, duration * 1000);
  }, (duration + interval) * 1000);
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

/*-- PARALLAXBACK --*/
document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('backgroundVideo');
  
  // Получаем высоту видео, чтобы знать, когда остановить параллакс
  const videoHeight = video.offsetHeight;

  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    // Рассчитываем translateY, чтобы создать эффект параллакса
    const translateY = Math.max(0, Math.min(videoHeight / 2, scrollPosition / 2));

    // Применяем translateY к видео
    video.style.transform = `translateY(${translateY}px)`;
  });
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
    ScrollReveal().reveal('#firstbox', { delay: 600, origin: 'right', distance: '20px', duration: 800 });
    ScrollReveal().reveal('#secondbox', { delay: 600, origin: 'top', distance: '20px', duration: 800 });
    ScrollReveal().reveal('#thirdbox', { delay: 600, origin: 'left', distance: '20px', duration: 800 });
    ScrollReveal().reveal('#firstcourse', { delay: 300, origin: 'left', distance: '20px', duration: 800 });
    ScrollReveal().reveal('#secondcourse', { delay: 300, origin: 'bottom', distance: '20px', duration: 800 });
    ScrollReveal().reveal('#thirdcourse', { delay: 300, origin: 'right', distance: '20px', duration: 800 });
});