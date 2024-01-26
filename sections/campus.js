window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)

function setScrollVar() {
  const htmlElement = document.documentElement
  const percentOfScreenHeightScrolled =
    htmlElement.scrollTop / htmlElement.clientHeight
  console.log(Math.min(percentOfScreenHeightScrolled * 100, 100))
  htmlElement.style.setProperty(
    "--scroll",
    Math.min(percentOfScreenHeightScrolled * 100, 100)
  )
}

setScrollVar()

const observer = new IntersectionObserver(entries => {
  for (let i = entries.length - 1; i >= 0; i--) {
    const entry = entries[i]
    if (entry.isIntersecting) {
      document.querySelectorAll("[data-img]").forEach(img => {
        img.classList.remove("show")
      })
      const img = document.querySelector(entry.target.dataset.imgToShow)
      img?.classList.add("show")
      break
    }
  }
})

document.querySelectorAll("[data-img-to-show]").forEach(section => {
  observer.observe(section)
})


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

// scrollReveal.js
document.addEventListener('DOMContentLoaded', function () {
  ScrollReveal().reveal('.about-header h1', { delay: 800, origin: 'top', distance: '20px', duration: 800 });
  ScrollReveal().reveal('.about-header p', { delay: 900, origin: 'bottom', distance: '20px', duration: 800 });
  ScrollReveal().reveal('.num-header h1', { delay: 700, origin: 'top', distance: '20px', duration: 800 });
  ScrollReveal().reveal('#firstset', { delay: 300, origin: 'left', distance: '200px', duration: 800 });
  ScrollReveal().reveal('#secondset', { delay: 300, origin: 'top', distance: '20px', duration: 800 });
  ScrollReveal().reveal('#thirdset', { delay: 350, origin: 'right', distance: '200px', duration: 800 });
  ScrollReveal().reveal('#firstcard', { delay: 300, origin: 'left', distance: '20px', duration: 800 });
    ScrollReveal().reveal('#secondcard', { delay: 150, origin: 'top', distance: '20px', duration: 800 });
    ScrollReveal().reveal('#thirdcard', { delay: 300, origin: 'right', distance: '20px', duration: 800 });
});
