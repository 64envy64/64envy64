document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.header');
  const logoContainer = document.querySelector('.logo-container');
  const originalLogoMarginTop = logoContainer.offsetTop;

  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    if (scrollPosition > header.clientHeight) {
      logoContainer.style.position = 'fixed';
      logoContainer.style.top = '30px'; // Устанавливаем желаемый отступ от верха
      logoContainer.style.left = '0';
      logoContainer.style.right = '0';
      logoContainer.style.margin = 'auto';
      logoContainer.style.width = '100%';
      logoContainer.style.zIndex = '1500';
    } else {
      logoContainer.style.position = 'relative';
    }
  });
});