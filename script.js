(function () {
  'use strict';

  // ===== Header scroll =====
  const header = document.querySelector('.header');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 80) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ===== Menu mobile =====
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // ===== Animação de entrada do Hero =====
  const heroContent = document.querySelector('.hero-content');
  const observerOptions = { threshold: 0.2, rootMargin: '0px 0px -40px 0px' };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  if (heroContent) observer.observe(heroContent);

  // ===== Filtros do cardápio =====
  const filtros = document.querySelectorAll('.filtro');
  const cards = document.querySelectorAll('.card-item');

  filtros.forEach((btn) => {
    btn.addEventListener('click', () => {
      const categoria = btn.dataset.categoria;
      filtros.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      cards.forEach((card) => {
        const cardCat = card.dataset.categoria;
        const show = categoria === 'todos' || cardCat === categoria;
        card.classList.toggle('hidden', !show);
      });
    });
  });

  // ===== Carrossel de depoimentos =====
  const depoimentos = document.querySelectorAll('.depoimento');
  const btnPrev = document.querySelector('.carrossel-btn.prev');
  const btnNext = document.querySelector('.carrossel-btn.next');
  const dotsContainer = document.querySelector('.carrossel-dots');

  let currentIndex = 0;
  const total = depoimentos.length;

  function goToSlide(index) {
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;
    currentIndex = index;
    depoimentos.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
  }

  if (depoimentos.length && dotsContainer) {
    depoimentos.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Depoimento ' + (i + 1));
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    });
  }

  if (btnPrev) btnPrev.addEventListener('click', () => goToSlide(currentIndex - 1));
  if (btnNext) btnNext.addEventListener('click', () => goToSlide(currentIndex + 1));

  // Auto-avanço opcional (a cada 5s)
  let carouselInterval = setInterval(() => goToSlide(currentIndex + 1), 5000);
  const carrossel = document.querySelector('.depoimentos-carrossel');
  if (carrossel) {
    carrossel.addEventListener('mouseenter', () => clearInterval(carouselInterval));
    carrossel.addEventListener('mouseleave', () => {
      carouselInterval = setInterval(() => goToSlide(currentIndex + 1), 5000);
    });
  }

})();
